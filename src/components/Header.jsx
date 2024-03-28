import React from 'react';
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-lime-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-10">
          <span className="font-semibold text-5xl tracking-tight">Munayco Pizzas</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-m lg:flex-grow">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-yellow-400 mr-5 ml-5">Inicio</Link>
            <Link href="/branches" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-yellow-400 mr-5 ml-5">Sucursales</Link>
            <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-yellow-400 mr-5 ml-5">Acerca de</Link>
            <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-yellow-400 mr-5 ml-5">Contactanos</Link>
          </div>
        </div>
        <div>
          <a href="auth/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-lime-700 hover:bg-white mt-4 mr-2 lg:mt-0">Iniciar Sesión</a>
          <a href="auth/sigin" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-lime-700 hover:bg-white mt-4 lg:mt-0">Registrarme</a>
        </div>
      </nav>
    </>
  )
}
