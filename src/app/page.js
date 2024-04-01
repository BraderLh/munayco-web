import { CarouselHome } from "@/components/home/CarouselHome";
import { Header } from "@/components/Header";
import Link from "next/link";
import { CiPizza } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";
import { MenuHome } from "@/components/home/MenuHome";
import PizzasSsr from "@/utils/PizzasSsr";

export default function StartPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto text-amber-600 block border border-white gap-3 p-2">
        <section className="hover:bg-lime-50 p-2 rounded-lg">
          <h1 className="font-bold text-2xl md:text-3xl my-2">Promociones</h1>
          <CarouselHome />
        </section>
        <section className="hover:bg-lime-50 p-2 rounded-lg">
          <h1 className="font-bold text-2xl md:text-3xl my-2">Pizzas</h1>
          <div className="w-full h-full">
            <PizzasSsr />
          </div>
          <div className="flex justify-end">
            <Link
              href="./home/pizzas"
              className="inline-flex items-center justify-center no-underline hover:underline text-lime-700 hover:text-lime-800 text-lg"
            >
              <CiPizza size={"3.5rem"} />
              <span className="w-full ml-2 md:ml-3 text-xl my-auto">
                Ver pizzas
              </span>
            </Link>
          </div>
        </section>
        <section className="container mx-auto justify-center hover:bg-lime-50">
          <h1 className="font-bold text-2xl md:text-3xl my-2">Menus</h1>
          <div className="w-full h-full">
            <MenuHome />
          </div>
          <div className="flex justify-end">
            <Link
              href="./home/menu"
              className="inline-flex items-center justify-center no-underline hover:underline text-lime-700 hover:text-lime-800 text-lg"
            >
              <MdRestaurantMenu size={"3rem"} />
              <span className="w-full ml-2 md:ml-3 mr-2 text-xl my-auto">
                Ver menus
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
