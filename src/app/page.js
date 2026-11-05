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
      <main className="container mx-auto h-full text-amber-600 block border-2 border-amber-200 gap-3 p-2">
        <section className="hover:bg-lime-50 p-2 rounded-lg">
          <h1 className="font-semibold text-2xl md:text-3xl my-2">Promociones</h1>
          <div className="flex w-[80%] mx-auto justify-center">
            <CarouselHome />
          </div>
        </section>
        <section className="hover:bg-lime-50 p-2 rounded-lg">
          <h1 className="font-semibold text-2xl md:text-3xl my-3">Pizzas</h1>
          <div className="w-full h-full">
            <PizzasSsr />
          </div>
          {/* <div className="flex justify-end">
            <Link
              href="./home/pizzas"
              className="inline-flex items-center justify-center no-underline hover:underline text-lime-700 hover:text-lime-800 text-lg"
            >
              <CiPizza size={"3.5rem"} />
              <span className="w-full ml-2 md:ml-3 text-xl my-auto">
                Ver más
              </span>
            </Link>
          </div> */}
        </section>
        <section className="container mx-auto justify-center hover:bg-lime-50 p-2 rounded-lg">
          <h1 className="font-semibold text-2xl md:text-3xl my-2">Menus</h1>
          <div className="w-full h-full">
            <MenuHome />
          </div>
          {/* <div className="flex justify-end">
            <Link
              href="./home/menu"
              className="inline-flex items-center justify-center no-underline hover:underline text-lime-700 hover:text-lime-800 text-lg"
            >
              <MdRestaurantMenu size={"3rem"} />
              <span className="w-full ml-2 md:ml-3 mr-2 text-xl my-auto">
                Ver carta
              </span>
            </Link>
          </div> */}
        </section>
        <div className="mt-2 flex justify-center px-2 pb-2">
          <div className="w-full rounded-xl border-2 border-dashed border-orange-300 bg-amber-100 p-2 shadow-sm sm:w-auto">
            <Link
              href="./home/pizzas"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-700 px-5 py-3 text-lg font-semibold text-white no-underline shadow-sm transition hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 sm:w-auto"
            >
              <CiPizza size={"2rem"} aria-hidden="true" />
              <span>Ver carta completa</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
