"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/catalog/CategoryFilter";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { GridPizzas } from "@/components/pizzas/GridPizzas";
import { useApiCollection } from "@/hooks/useApiCollection";
import { fetchItems } from "@/services/items";

export default function PizzasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data: items, status, error, retry } = useApiCollection(fetchItems);

  const categories = useMemo(
    () =>
      [...new Set(items.map((item) => item.itemType).filter(Boolean))].sort(),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      selectedCategory === "all"
        ? items
        : items.filter((item) => item.itemType === selectedCategory),
    [items, selectedCategory]
  );

  return (
    <main className="container mx-auto w-full px-4 py-5">
      <header className="mb-6">
        {/* <p className="text-sm font-semibold uppercase tracking-wider text-lime-700">
          Carta Munayco
        </p> */}
        <h1 className="mt-1 text-3xl font-bold text-amber-700 md:text-4xl">
          Carta Munayco
        </h1>
        <p className="mt-2 max-w-2xl text-base text-amber-900">
          Consulta pizzas, lasañas, aperitivos y bebidas disponibles directamente desde nuestro catálogo.
        </p>
      </header>

      {status === "loading" && <LoadingState label="Cargando catálogo..." />}

      {status === "error" && <ErrorState error={error} onRetry={retry} />}

      {status === "success" && items.length === 0 && (
        <EmptyState message="No hay productos activos disponibles en este momento." />
      )}

      {status === "success" && items.length > 0 && (
        <>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
          {filteredItems.length > 0 ? (
            <GridPizzas items={filteredItems} />
          ) : (
            <EmptyState
              message="No hay productos en la categoría seleccionada."
              onAction={() => setSelectedCategory("all")}
            />
          )}
        </>
      )}
    </main>
  );
}
