import { apiRequest } from "@/services/api/client";

export function signUp(form) {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: form,
  });
}

// Alias legado para conservar compatibilidad con los componentes existentes.
export const singUp = signUp;

export function login(form) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: form,
  });
}
