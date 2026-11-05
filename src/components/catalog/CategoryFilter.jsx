export function CategoryFilter({ categories, selectedCategory, onChange }) {
  if (!categories.length) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2" aria-label="Filtrar catálogo por categoría">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-lime-400 ${selectedCategory === "all" ? "bg-lime-700 text-white" : "bg-amber-100 text-lime-800 hover:bg-amber-200"}`}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-lime-400 ${selectedCategory === category ? "bg-lime-700 text-white" : "bg-amber-100 text-lime-800 hover:bg-amber-200"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
