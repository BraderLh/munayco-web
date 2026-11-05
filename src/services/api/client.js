export const AUTH_TOKEN_KEY = "auth-token";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiError extends Error {
  constructor(message, { status = 0, code = null, type = "http", cause } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.type = type;
    this.cause = cause;
  }
}

function getApiBaseUrl() {
  if (!API_BASE_URL || !API_BASE_URL.trim()) {
    throw new ApiError(
      "Configura NEXT_PUBLIC_API_BASE_URL para conectar con Munayco.",
      { type: "configuration" }
    );
  }

  return API_BASE_URL.trim().replace(/\/+$/, "");
}

function getStoredToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(AUTH_TOKEN_KEY);
}

function notifyUnauthorized() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_TOKEN_KEY);
  window.dispatchEvent(new CustomEvent("munayco:auth-expired"));
}

async function readResponseBody(response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function getResponseMessage(payload, status) {
  return payload?.message || `La solicitud no pudo completarse (${status}).`;
}

function serializeBody(body, headers) {
  if (
    body === undefined ||
    body === null ||
    (typeof FormData !== "undefined" && body instanceof FormData)
  ) {
    return body;
  }

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return typeof body === "string" ? body : JSON.stringify(body);
}

export async function apiRequest(path, options = {}) {
  const {
    auth = false,
    body,
    headers: customHeaders,
    ...fetchOptions
  } = options;

  if (!path || !path.startsWith("/")) {
    throw new ApiError("La ruta de la API debe comenzar con /.", {
      type: "configuration",
    });
  }

  const headers = new Headers(customHeaders);

  if (auth) {
    const token = getStoredToken();

    if (!token) {
      notifyUnauthorized();
      throw new ApiError("Tu sesión no está disponible. Inicia sesión nuevamente.", {
        status: 401,
        code: 401,
        type: "unauthorized",
      });
    }

    headers.set("Authorization", `Bearer ${token}`);
  }

  const apiBaseUrl = getApiBaseUrl();
  let response;

  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...fetchOptions,
      headers,
      body: serializeBody(body, headers),
    });
  } catch (cause) {
    throw new ApiError(
      "No se pudo conectar con el servidor. Verifica que el backend esté disponible.",
      { type: "network", cause }
    );
  }

  const payload = await readResponseBody(response);
  const responseCode = Number.isFinite(Number(payload?.code))
    ? Number(payload.code)
    : response.status;

  if (response.status === 401 || responseCode === 401) {
    notifyUnauthorized();
    throw new ApiError(getResponseMessage(payload, 401), {
      status: 401,
      code: 401,
      type: "unauthorized",
    });
  }

  if (response.status === 403 || responseCode === 403) {
    throw new ApiError(getResponseMessage(payload, 403), {
      status: 403,
      code: 403,
      type: "forbidden",
    });
  }

  if (!response.ok || responseCode < 200 || responseCode >= 300) {
    throw new ApiError(getResponseMessage(payload, response.status), {
      status: response.status,
      code: responseCode,
      type: "http",
    });
  }

  if (!payload || !Object.prototype.hasOwnProperty.call(payload, "data")) {
    throw new ApiError("La respuesta del servidor no tiene el formato esperado.", {
      status: response.status,
      code: responseCode,
      type: "payload",
    });
  }

  return payload.data;
}
