import Image from "next/image";
import { Carousel } from "flowbite-react";

const promotionImages = [
  {
    src: "/images/promos/promo-artesanal-01.png",
    alt: "Pizza artesanal con tomate, mozzarella y albahaca",
  },
  {
    src: "/images/promos/promo-pepperoni-02.png",
    alt: "Pizza de pepperoni recién horneada",
  },
  {
    src: "/images/promos/promo-vegetariana-03.png",
    alt: "Pizza vegetariana con vegetales frescos",
  },
  {
    src: "/images/promos/promo-quesos-04.png",
    alt: "Pizza de quesos acompañada de bebidas",
  },
];

export const CarouselHome = () => {
  return (
    <div
      className="h-64 w-full overflow-hidden rounded-md border-2 border-dashed border-orange-400 bg-yellow-300 py-2 md:h-80 2xl:h-96"
      aria-label="Promociones destacadas"
    >
      <Carousel pauseOnHover>
        {promotionImages.map((image, index) => (
          <div className="relative h-full w-full" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 90vw, 80vw"
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
