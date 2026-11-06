"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCart3, BsDash, BsPlus, BsTrash, BsWhatsapp, BsX } from "react-icons/bs";
import { useCart } from "@/context/CartContext";
import { createCartMessage, createWhatsAppUrl } from "@/services/whatsapp";
import { formatPen } from "@/utils/currency";

export function CartDrawer() {
  const {
    items,
    total,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeCart, isOpen]);

  if (!isOpen) {
    return null;
  }

  const sendToWhatsApp = () => {
    setError("");

    if (items.length === 0) {
      setError("Agrega al menos un producto antes de enviar la solicitud.");
      return;
    }

    const message = createCartMessage(items, total);
    const whatsAppUrl = createWhatsAppUrl(message);

    if (!whatsAppUrl) {
      setError(
        "Configura NEXT_PUBLIC_WHATSAPP_PHONE para enviar la solicitud."
      );
      return;
    }

    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Carrito de compras">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={closeCart}
        aria-label="Cerrar carrito"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-amber-50 shadow-2xl">
        <header className="flex items-center justify-between border-b border-amber-300 bg-lime-700 px-5 py-4 text-white">
          <div>
            <p className="text-sm text-lime-100">Solicitud de productos</p>
            <h2 className="text-2xl font-bold">Tu carrito</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar carrito"
          >
            <BsX className="text-2xl" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center rounded-lg border border-dashed border-amber-400 bg-white p-6 text-center text-amber-900">
              <BsCart3 className="mb-3 text-4xl text-amber-600" aria-hidden="true" />
              <p className="font-semibold">Tu carrito está vacío.</p>
              <p className="mt-1 text-sm">Agrega productos desde la carta.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.lineId}
                  className="flex gap-3 rounded-lg border border-amber-300 bg-white p-3"
                >
                  {item.image && (
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-rose-700">
                      {item.name}
                    </p>
                    <p className="text-sm text-lime-800">{item.size}</p>
                    <p className="mt-1 font-semibold text-amber-800">
                      {formatPen(item.price * item.quantity)}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center rounded-md border border-amber-300">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity - 1)
                          }
                          className="p-2 text-amber-900 hover:bg-amber-100"
                          aria-label={`Reducir cantidad de ${item.name}`}
                        >
                          <BsDash aria-hidden="true" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity + 1)
                          }
                          className="p-2 text-amber-900 hover:bg-amber-100"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          <BsPlus aria-hidden="true" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="rounded-md p-2 text-red-700 hover:bg-red-50"
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        <BsTrash aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-amber-300 bg-white p-4">
          <div className="mb-4 flex items-center justify-between text-lg font-bold text-amber-900">
            <span>Total referencial</span>
            <span>{formatPen(total)}</span>
          </div>
          {error && (
            <p className="mb-3 rounded-md bg-red-50 p-3 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={sendToWhatsApp}
            disabled={items.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <BsWhatsapp className="text-xl" aria-hidden="true" />
            Solicitar por WhatsApp
          </button>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="mt-2 w-full rounded-lg px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
            >
              Vaciar carrito
            </button>
          )}
          <p className="mt-3 text-center text-xs text-gray-600">
            El envío por WhatsApp solicita confirmación; no registra un pedido ni realiza un pago.
          </p>
        </footer>
      </aside>
    </div>
  );
}
