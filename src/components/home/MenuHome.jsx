import Image from "next/image";
import { Card } from "flowbite-react";

const menus = [
  {
    title: "Menú general",
    description:
      "Disfruta una selección de pizzas clásicas y bebidas para compartir con tus amigos.",
    image: "/images/menu/menu-general-original.png",
    alt: "Pizza de pepperoni y mozzarella del menú general",
  },
  {
    title: "Menú familiar",
    description:
      "Comparte una pizza familiar acompañada de entradas y bebidas para todos.",
    image: "/images/menu/menu-familiar-original.png",
    alt: "Pizza familiar con ensalada, palitos de pan y bebidas",
  },
];

export const MenuHome = () => {
  return (
    <div className="grid w-full grid-cols-1 place-items-stretch gap-4 md:grid-cols-2">
      {menus.map((menu) => (
        <Card
          key={menu.title}
          className="mx-auto w-full max-w-none border-2 border-dashed border-orange-400 bg-yellow-200 [&>div:last-child]:gap-2 [&>div:last-child]:p-4 md:max-w-none md:[&>div:last-child]:gap-4 md:[&>div:last-child]:p-6"
          horizontal
          renderImage={() => (
            <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-t-lg sm:h-72 md:h-auto md:w-64 md:self-stretch md:rounded-l-lg md:rounded-tr-none">
              <Image
                src={menu.image}
                alt={menu.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 3rem), 256px"
                className="object-cover"
              />
            </div>
          )}
        >
          <h2 className="text-2xl font-bold tracking-tight text-lime-700">
            {menu.title}
          </h2>
          <p className="font-normal text-rose-800">{menu.description}</p>
        </Card>
      ))}
    </div>
  );
};
