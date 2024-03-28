import { CarouselHome } from "@/components/CarouselHome";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Card } from 'flowbite-react';
import  PizzasHome from "@/components/PizzasHome";

export default function StartPage() {
  return (
    <>
      <Header/>
      <main className="container mx-auto text-amber-600 block border border-white gap-3">
        <h1 className="font-bold text-2xl">Promociones</h1>
        <CarouselHome/>
        <h1 className="font-bold text-2xl">Pizzas</h1>
        <PizzasHome/>
        <Link
          href="./home/pizzas"
          className="ml-[80%] no-underline hover:underline text-lime-600 hover:text-lime-700 text-lg"
        >Ver pizzas
        </Link>
        {/* <div className="container mx-auto justify-center p-4 w-[100%]">
          <h1 className="font-bold text-2xl">Pizzas</h1>
        </div> */}
        <div className="container mx-auto justify-center px-4 mb-10">
          <h1 className="font-bold text-2xl">Menus</h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Card 
                className="max-w-sm" 
                renderImage={() => <Image width={200} height={100} src="/images/menu/general.jpg" alt="menu-1" className="rounded-lg p-1"/>}
                horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-lime-700 dark:text-lime-200">
                  Menu general
                </h5>
                <p className="font-normal text-rose-800 dark:text-gray-400">
                  Ven y disfruta con tu amigos del menu general que ofrece Munayco pizzas, ofrece una variedad de pizzas clásicas y bebidas.
                </p>
              </Card>
            </div>
            <div>
              <Card 
                className="max-w-sm"
                renderImage={() => <Image width={230} height={200} src="/images/menu/familiar.jpg" alt="menu-2" className="rounded-lg p-1"/>}
                horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-lime-700 dark:text-lime-200">
                  Menu familiar
                </h5>
                <p className="font-normal text-rose-800 dark:text-gray-400">
                  Ven y disfruta con tu familia del variado menu que ofrece Munayco pizzas, con el menu familiar que ofrece Munayco Pizzas.
                </p>
              </Card>
            </div>
          </div>
          <Link
            href="./home/menu"
            className="ml-[85%] no-underline hover:underline text-lime-600 hover:text-lime-700 text-lg"
          >Ver menús
          </Link>
        </div>
      </main>
    </>
  );
}
