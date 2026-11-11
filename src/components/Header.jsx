"use client";
import React, { useEffect, useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavCollapsed(true);
  }, [pathname]);

  const openDropdown = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeDropdown = () => setIsNavCollapsed(true);

  return (
    <>
      <header>
        <CartButton floating />
        <nav className="bg-lime-600 border-b border-lime-700 p-1 md:p-2 w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap mx-auto container items-center justify-between p-4">
            <div>
              <Link
                href="/"
                onClick={closeDropdown}
                className="flex items-center space-x-3 rtl:space-x-reverse text-yellow-50 hover:text-yellow-400 mr-5"
              >
                <span className="inline-flex font-bold text-4xl tracking-tight whitespace-nowrap">
                  Munayc
                  <GiFullPizza
                    className="ml-1 mr-3"
                    size={45}
                    color="orange"
                    id="pizzaIconHeader"
                  />
                  Pizzas
                </span>
              </Link>
            </div>
            {/* <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse"> */}
            <div className="flex items-center gap-3">
              {/* <div className="flex space-x-4">
                <Link
                  href="auth/login"
                  className="text-base p-4 leading-none border rounded text-white font-medium text-center border-white 
                  hover:border-transparent hover:text-lime-700 hover:font-bold focus:ring-4 focus:outline-none focus:ring-amber-100 
                  hover:bg-white mt-4 mr-2 lg:mt-0"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="auth/sigin"
                  className="text-base p-4 leading-none border rounded text-white font-medium text-center border-white 
                  hover:border-transparent hover:text-lime-700 hover:font-bold focus:ring-4 focus:outline-none focus:ring-amber-100
                hover:bg-white mt-4 lg:mt-0"
                >
                  Registrarme
                </Link>
              </div> */}
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-cta"
                aria-expanded={!isNavCollapsed ? true : false}
                onClick={openDropdown}
                aria-label="Abrir o cerrar menú principal"
              >
                <span className="sr-only">Abrir o cerrar menú principal</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isNavCollapsed ? "hidden" : ""
              } navbar-collapse items-center justify-between w-full md:flex md:w-auto md:order-1`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
                <li>
                  <Link
                    href="/"
                    onClick={closeDropdown}
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:bg-transparent"
                    aria-current="page"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/branches"
                    onClick={closeDropdown}
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:mx-3"
                  >
                    Sucursales
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/about"
                    onClick={closeDropdown}
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:mx-3"
                  >
                    Acerca de
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact"
                    onClick={closeDropdown}
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300"
                  >
                    Contáctanos
                  </Link>
                </li>
                <li className="hidden md:block">
                  <CartButton />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
