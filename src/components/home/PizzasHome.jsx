"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import { fetchItems } from "@/services/items";
import { useApiCollection } from "@/hooks/useApiCollection";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";

const MAX_HOME_ITEMS = 4;
const ROTATION_INTERVAL_MS = 7000;

const PizzasHome = () => {
  const { data: items, status, error, retry } = useApiCollection(fetchItems);
  const [groupIndex, setGroupIndex] = useState(0);
  const pizzaItems = useMemo(
    () =>
      items.filter((item) => item.itemType?.toLowerCase() === "pizza"),
    [items]
  );
  const displayItems = pizzaItems.length > 0 ? pizzaItems : items;
  const itemGroups = useMemo(() => {
    const groups = [];

    for (let index = 0; index < displayItems.length; index += MAX_HOME_ITEMS) {
      groups.push(displayItems.slice(index, index + MAX_HOME_ITEMS));
    }

    return groups;
  }, [displayItems]);
  const featuredItems = itemGroups[groupIndex] || itemGroups[0] || [];

  useEffect(() => {
    setGroupIndex((currentIndex) =>
      currentIndex < itemGroups.length ? currentIndex : 0
    );
  }, [itemGroups.length]);

  useEffect(() => {
    if (itemGroups.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setGroupIndex((currentIndex) => (currentIndex + 1) % itemGroups.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [itemGroups.length]);

  return (
    <div className="rounded-md border-2 border-dashed border-orange-400 bg-yellow-300 p-2">
      {status === "loading" && <LoadingState label="Cargando pizzas..." />}
      {status === "error" && <ErrorState error={error} onRetry={retry} />}
      {status === "success" && items.length === 0 && (
        <EmptyState message="No hay pizzas activas disponibles." />
      )}
      {status === "success" && featuredItems.length > 0 && (
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          aria-live="polite"
        >
          {featuredItems.map((item) => (
            <article
              className="flex flex-col overflow-hidden rounded-md border-2 border-dotted border-lime-600 bg-amber-500"
              key={item.itemsTypeId ?? item.id ?? item.code}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name ? `Pizza ${item.name}` : "Pizza Munayco"}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              ) : (
                <div className="flex h-44 items-center justify-center text-sm text-amber-950">
                  Imagen no disponible
                </div>
              )}
              <h2 className="p-3 text-center text-lg font-semibold text-amber-50">
                {item.name || "Pizza Munayco"}
              </h2>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzasHome;
