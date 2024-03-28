import React from "react";
import Link from "next/link";

export const HeaderAuth = () => {
  return (
    <header className="bg-lime-700 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          <Link href="/" className=" text-white hover:text-amber-400 m-5">
            Munayco Pizzas
          </Link>
        </h1>
      </div>
    </header>
  );
};
