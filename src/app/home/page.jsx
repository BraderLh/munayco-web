import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div>
        <h1>Promociones</h1>
      </div>
      <div>
        <h1>Pizzas</h1>
        <Link
          href="./home/pizzas"
          className="no-underline hover:underline text-blue-500 text-lg"
        >
          Ver pizzas
        </Link>
      </div>
      <div>
        <h1>Menus</h1>
      </div>
    </main>
  );
}
