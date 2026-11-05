import { ApiError, apiRequest } from "@/services/api/client";
import localesFixture from "@/data/locales.json";

const branchPath = (branchId) => `/api/v1/branchOffice/${encodeURIComponent(branchId)}`;

export async function getBranchesFromFixture() {
  const data = localesFixture?.data;

  if (!Array.isArray(data)) {
    throw new ApiError("Las sucursales locales no tienen un formato válido.", {
      type: "payload",
    });
  }

  return data
    .filter((branch) => branch?.active ?? branch?.status === 1)
    .map(({ image, ...branch }) => ({
      ...branch,
      imageUrl: image,
      active: branch.active ?? branch.status === 1,
    }));
}

export async function getBranches() {
  const data = await apiRequest("/api/v1/branchOffice", {
    method: "GET",
    cache: "no-store",
  });

  if (!Array.isArray(data)) {
    throw new ApiError("Las sucursales recibidas no tienen un formato válido.", {
      type: "payload",
    });
  }

  return data;
}

export function createBranch(form) {
  return apiRequest("/api/v1/branchOffice", {
    method: "POST",
    auth: true,
    body: form,
  });
}

export function deleteBranch(branchId) {
  return apiRequest(branchPath(branchId), {
    method: "DELETE",
    auth: true,
  });
}

export function updateBranch(branchId, form) {
  return apiRequest(branchPath(branchId), {
    method: "PATCH",
    auth: true,
    body: form,
  });
}
