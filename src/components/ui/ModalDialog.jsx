"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
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
  const titleId = useId();
  const dialogRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    restoreFocusRef.current = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    const animationFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector("[data-modal-close]")?.focus();
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      restoreFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <header className="flex items-center justify-between gap-4 border-b border-amber-200 bg-orange-100 px-5 py-4">
          <h2 id={titleId} className={titleClassName}>
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            data-modal-close
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
    </div>,
    document.body
  );
}
