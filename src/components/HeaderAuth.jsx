import React from "react";
import Link from "next/link";
import { GiFullPizza } from "react-icons/gi";

export const HeaderAuth = () => {
  return (
    <header className="bg-lime-700 border-b border-lime-600 dark:bg-lime-900 text-white py-4 px-6 w-full z-20">
      <div className="container mx-auto flex justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-yellow-50 hover:text-yellow-400 mr-5"
        >
          <span className="inline-flex font-semibold text-4xl tracking-tight whitespace-nowrap dark:text-white">
            Munayc
            <GiFullPizza className="ml-1 mr-3" size={40} color="orange"/> Pizzas
          </span>
        </Link>
      </div>
    </header>
  );
};
