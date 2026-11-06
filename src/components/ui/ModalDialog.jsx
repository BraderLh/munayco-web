"use client";

import { useEffect } from "react";
import { BsX } from "react-icons/bs";

export function ModalDialog({
  isOpen,
  onClose,
  title,
  children,
  footer,
  titleClassName = "text-2xl font-bold text-lime-800",
  bodyClassName = "bg-white",
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dialog-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Cerrar ventana"
      />
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <header className="flex items-center justify-between gap-4 border-b border-amber-200 bg-orange-100 px-5 py-4">
          <h2 id="modal-dialog-title" className={titleClassName}>
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-amber-900 transition hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Cerrar ventana"
          >
            <BsX className="text-2xl" aria-hidden="true" />
          </button>
        </header>
        <div className={`flex-1 overflow-y-auto p-5 ${bodyClassName}`}>
          {children}
        </div>
        {footer && (
          <footer className="border-t border-amber-200 bg-amber-50 p-4">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
