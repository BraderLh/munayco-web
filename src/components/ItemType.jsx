"use client";

/* eslint-disable @next/next/no-img-element */
import { Card, Modal } from "flowbite-react";
import { useMemo, useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import { useCart } from "@/context/CartContext";
import { formatPen } from "@/utils/currency";

function parseValues(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }

  return typeof value === "string"
    ? value.split(",").map((entry) => entry.trim()).filter(Boolean)
    : [];
}

export const ItemType = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const { addItem } = useCart();
  const sizes = useMemo(() => parseValues(item.size), [item.size]);
  const prices = useMemo(() => parseValues(item.prices), [item.prices]);
  const variants = useMemo(
    () =>
      prices
        .map((price, index) => ({
          size: sizes[index] || "Presentación única",
          price: Number(price),
        }))
        .filter((variant) =>
          Number.isFinite(variant.price) && variant.price > 0
        ),
    [prices, sizes]
  );
  const selectedCount = useMemo(
    () =>
      variants.reduce(
        (total, _variant, index) => total + (selectedQuantities[index] || 0),
        0
      ),
    [selectedQuantities, variants]
  );
  const selectedTotal = useMemo(
    () =>
      variants.reduce(
        (total, variant, index) =>
          total + variant.price * (selectedQuantities[index] || 0),
        0
      ),
    [selectedQuantities, variants]
  );
  const imageUrl =
    typeof item.image === "string" && item.image.trim() ? item.image : null;
  const itemLabel = item.itemType || "Producto";
  const imageAlt = item.name
    ? `${itemLabel} ${item.name}`
    : "Producto del catálogo";

  const updateSelectedQuantity = (variantIndex, change) => {
    setSelectedQuantities((currentQuantities) => ({
      ...currentQuantities,
      [variantIndex]: Math.max(
        0,
        (currentQuantities[variantIndex] || 0) + change
      ),
    }));
  };

  const handleAddSelectedToCart = () => {
    variants.forEach((variant, index) => {
      const quantity = selectedQuantities[index] || 0;

      if (quantity > 0) {
        addItem(item, variant, quantity);
      }
    });

    setSelectedQuantities({});
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedQuantities({});
    setIsOpen(false);
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden border border-orange-300 bg-amber-200">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
          className="aspect-[3/2] w-full rounded-md object-cover"
        />
      ) : (
        <div className="flex h-56 items-center justify-center rounded-md bg-amber-100 text-center text-sm text-amber-700">
          Imagen no disponible
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        <div>
          {item.itemType && (
            <span className="text-sm font-semibold uppercase tracking-wide text-lime-700">
              {item.itemType}
            </span>
          )}
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-rose-600">
            {item.name || "Producto sin nombre"}
          </h2>
        </div>

        {variants.length > 0 && (
          <div
            className="flex flex-wrap gap-2"
            aria-label="Precios disponibles"
          >
            {variants.map((variant) => (
              <span
                key={`${variant.size}-${variant.price}`}
                className="inline-flex items-center gap-1 rounded-full border border-amber-500 bg-amber-100 px-3 py-1.5 text-sm text-amber-950"
              >
                <span className="font-medium text-green-800">
                  {variant.size}
                </span>
                <span aria-hidden="true">·</span>
                <strong>{formatPen(variant.price)}</strong>
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          disabled={variants.length === 0}
          className="mt-auto rounded-lg bg-orange-500 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Pedir
        </button>
      </div>

      <Modal dismissible show={isOpen} onClose={handleCloseModal}>
        <Modal.Header className="bg-orange-400">
          <span className="text-2xl font-bold text-red-700">
            {item.name || "Detalle del producto"}
          </span>
        </Modal.Header>
        <Modal.Body className="bg-amber-50">
          <div className="space-y-4">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={imageAlt}
                className="max-h-80 w-full rounded-md object-contain"
              />
            )}

            {item.ingredients && (
              <div className="rounded-md border-2 border-dashed border-lime-500 p-3">
                <h3 className="mb-2 text-xl font-semibold text-green-700">
                  Ingredientes
                </h3>
                <p className="font-medium italic">{item.ingredients}</p>
              </div>
            )}

            {variants.length > 0 && (
              <div className="rounded-md border-2 border-dashed border-lime-500 p-3">
                <h3 className="mb-2 text-xl font-semibold text-green-700">
                  Precios disponibles
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-1 border border-amber-600 bg-amber-300">
                    <thead className="bg-orange-500 text-left text-white">
                      <tr>
                        <th className="p-2">Tamaño</th>
                        <th className="p-2">Precio</th>
                        <th className="p-2 text-center">Cantidad</th>
                        <th className="p-2 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="bg-amber-100">
                      {variants.map((variant, index) => {
                        const quantity = selectedQuantities[index] || 0;

                        return (
                          <tr key={`${variant.size}-${variant.price}`}>
                            <td className="border border-amber-400 p-2">
                              {variant.size}
                            </td>
                            <td className="border border-amber-400 p-2">
                              {formatPen(variant.price)}
                            </td>
                            <td className="border border-amber-400 p-2">
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateSelectedQuantity(index, -1)
                                  }
                                  disabled={quantity === 0}
                                  className="rounded-md bg-amber-200 p-2 text-amber-950 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-lime-500 disabled:cursor-not-allowed disabled:opacity-40"
                                  aria-label={`Reducir cantidad de ${item.name} ${variant.size}`}
                                >
                                  <BsDash aria-hidden="true" />
                                </button>
                                <span
                                  className="min-w-8 text-center font-semibold"
                                  aria-live="polite"
                                >
                                  {quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateSelectedQuantity(index, 1)
                                  }
                                  className="rounded-md bg-lime-700 p-2 text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                  aria-label={`Aumentar cantidad de ${item.name} ${variant.size}`}
                                >
                                  <BsPlus aria-hidden="true" />
                                </button>
                              </div>
                            </td>
                            <td className="border border-amber-400 p-2 text-right font-semibold">
                              {quantity > 0
                                ? formatPen(variant.price * quantity)
                                : "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="flex-col gap-3 bg-amber-100 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:w-auto">
            <p className="text-sm font-semibold text-red-900">
              {selectedCount} {selectedCount === 1 ? "unidad" : "unidades"}
            </p>
            <p className="text-xl font-bold text-red-800">
              Total: {formatPen(selectedTotal)}
            </p>
          </div>
          <div className="flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={handleCloseModal}
              className="rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={handleAddSelectedToCart}
              disabled={selectedCount === 0}
              className="rounded-full bg-lime-700 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Agregar al carrito
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};
