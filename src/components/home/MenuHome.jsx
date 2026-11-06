import Image from "next/image";

const menus = [
  {
    title: "Menú general",
    description:
      "Disfruta una selección de pizzas clásicas y bebidas para compartir con tus amigos.",
    image: "/images/menu/menu-general-original.webp",
    alt: "Pizza de pepperoni y mozzarella del menú general",
  },
  {
    title: "Menú familiar",
    description:
      "Comparte una pizza familiar acompañada de entradas y bebidas para todos.",
    image: "/images/menu/menu-familiar-original.webp",
    alt: "Pizza familiar con ensalada, palitos de pan y bebidas",
  },
];

export const MenuHome = () => {
  return (
    <div className="grid w-full grid-cols-1 place-items-stretch gap-4 md:grid-cols-2">
      {menus.map((menu) => (
        <article
          key={menu.title}
          className="mx-auto flex w-full max-w-none flex-col overflow-hidden rounded-lg border-2 border-dashed border-orange-400 bg-yellow-200 shadow-sm md:flex-row"
        >
          <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-72 md:h-auto md:w-64 md:self-stretch">
            <Image
              src={menu.image}
              alt={menu.alt}
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), 256px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 p-4 md:gap-4 md:p-6">
            <h2 className="text-2xl font-bold tracking-tight text-lime-700">
              {menu.title}
            </h2>
            <p className="font-normal text-rose-800">{menu.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
