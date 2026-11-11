"use client";

import { BsCart3 } from "react-icons/bs";
import { useCart } from "@/context/CartContext";

export function CartButton({ floating = false }) {
  const { itemCount, openCart } = useCart();
  const productLabel = itemCount === 1 ? "producto" : "productos";
  const buttonClassName = floating
    ? "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime-700 text-white shadow-lg transition hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 md:hidden"
    : "relative inline-flex items-center gap-2 rounded-lg border border-yellow-200 px-3 py-2 text-base font-semibold text-white transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-yellow-300";

  return (
    <button
      type="button"
      onClick={openCart}
      className={buttonClassName}
      aria-label={`Abrir carrito con ${itemCount} ${productLabel}`}
    >
      <BsCart3 className={floating ? "text-2xl" : "text-xl"} aria-hidden="true" />
      {itemCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-orange-500 px-1 text-xs text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
