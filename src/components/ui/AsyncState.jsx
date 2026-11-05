export function LoadingState({ label = "Cargando información..." }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-lg border border-amber-300 bg-amber-50 p-6 text-center text-amber-800" role="status" aria-live="polite">
      <span className="inline-flex items-center gap-3">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-amber-600 border-t-transparent" aria-hidden="true" />
        {label}
      </span>
    </div>
  );
}

export function ErrorState({ error, onRetry }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-center text-red-800" role="alert">
      <p className="font-semibold">No pudimos cargar la información.</p>
      <p className="mt-2 text-sm">{error?.message || "Inténtalo nuevamente."}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md bg-red-700 px-4 py-2 font-semibold text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

export function EmptyState({ message = "No hay información disponible.", onAction, actionLabel = "Limpiar filtro" }) {
  return (
    <div className="rounded-lg border border-dashed border-lime-500 bg-lime-50 p-8 text-center text-lime-900">
      <p>{message}</p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 rounded-md bg-lime-700 px-4 py-2 font-semibold text-white transition hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-400"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
