'use client';
import React,  { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import Link from "next/link";

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const openDropdown = () => {
    setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <>
      <header>
        <nav className="bg-lime-600 border-b border-lime-600 dark:bg-lime-900 p-1 md:p-2 fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse text-yellow-50 hover:text-yellow-400 mr-5"
            >
              <span className="inline-flex font-semibold text-4xl tracking-tight whitespace-nowrap dark:text-white">
                Munayc
                <GiFullPizza className="mr-2" /> Pizzas
              </span>
            </Link>
            <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
              {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
              <div className="flex space-x-4">
                <Link
                  href="auth/login"
                  className="inline-block text-base p-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-lime-700 hover:bg-white mt-4 mr-2 lg:mt-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="auth/sigin"
                  className="inline-block text-base p-4 py-auto leading-none border rounded text-white border-white hover:border-transparent hover:text-lime-700 hover:bg-white mt-4 lg:mt-0"
                >
                  Registrarme
                </Link>
              </div>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={!isNavCollapsed ? true : false}
                onClick={openDropdown}
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Open main menu</span>
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
              className={`${isNavCollapsed ? 'hidden' : ''} navbar-collapse items-center justify-between w-full md:flex md:w-auto md:order-1`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:bg-transparent dark:text-lime-300"
                    aria-current="page"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/branches"
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:dark:hover:yellow-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:mx-3"
                  >
                    Sucursales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:dark:hover:yellow-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:mx-3"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 md:p-0 text-lg text-white rounded hover:bg-lime-700 md:hover:bg-transparent hover:text-yellow-300 md:dark:hover:yellow-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
