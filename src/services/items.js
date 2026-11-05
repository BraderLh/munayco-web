import { ApiError, apiRequest } from "@/services/api/client";
import appetizersFixture from "@/data/aperitivos.json";
import beveragesFixture from "@/data/bebidas.json";
import lasagnasFixture from "@/data/lasagnas.json";
import pizzasFixture from "@/data/pizzas.json";

const localCatalogFixtures = [
  pizzasFixture,
  lasagnasFixture,
  appetizersFixture,
  beveragesFixture,
];

function getFixtureItems(fixture) {
  const data = fixture?.data;

  if (!Array.isArray(data)) {
    throw new ApiError("El catálogo local no tiene un formato válido.", {
      type: "payload",
    });
  }

  return data;
}

export async function fetchItems() {
  return localCatalogFixtures
    .flatMap(getFixtureItems)
    .map((item) => ({
      ...item,
      active: item.active ?? item.status === 1,
    }))
    .filter((item) => item.active === true);
}

export async function fetchItemsFromApi() {
  const data = await apiRequest("/api/v1/itemType", {
    method: "GET",
    cache: "no-store",
  });

  if (!Array.isArray(data)) {
    throw new ApiError("El catálogo recibido no tiene un formato válido.", {
      type: "payload",
    });
  }

  return data.filter((item) => item?.active === true);
}

export const getCatalogItems = fetchItems;
