"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "munayco-cart";
const CartContext = createContext(null);

function readStoredCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    return Array.isArray(storedCart) ? storedCart : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [isHydrated, items]);

  const addItem = (product, variant, quantity = 1) => {
    const normalizedQuantity = Number(quantity);

    if (!Number.isInteger(normalizedQuantity) || normalizedQuantity <= 0) {
      return;
    }

    const productId =
      product.itemsTypeId ?? product.id ?? product.code ?? product.name;
    const lineId = `${productId}:${variant.size}:${variant.price}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + normalizedQuantity }
            : item
        );
      }

      return [
        ...currentItems,
        {
          lineId,
          productId,
          name: product.name || "Producto",
          itemType: product.itemType || "Producto",
          image: product.image || null,
          size: variant.size,
          price: variant.price,
          quantity: normalizedQuantity,
        },
      ];
    });
  };

  const updateQuantity = (lineId, quantity) => {
    const normalizedQuantity = Number(quantity);

    if (!Number.isInteger(normalizedQuantity) || normalizedQuantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId)
      );
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId
          ? { ...item, quantity: normalizedQuantity }
          : item
      )
    );
  };

  const removeItem = (lineId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId)
    );
  };

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () =>
      items.reduce(
        (currentTotal, item) => currentTotal + item.price * item.quantity,
        0
      ),
    [items]
  );

  const value = {
    items,
    itemCount,
    total,
    isOpen,
    addItem,
    updateQuantity,
    removeItem,
    clearCart: () => setItems([]),
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe utilizarse dentro de CartProvider.");
  }

  return context;
}
