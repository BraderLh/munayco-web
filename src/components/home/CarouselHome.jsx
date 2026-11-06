"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const promotionImages = [
  {
    src: "/images/promos/promo-artesanal-01.webp",
    alt: "Pizza artesanal con tomate, mozzarella y albahaca",
  },
  {
    src: "/images/promos/promo-pepperoni-02.webp",
    alt: "Pizza de pepperoni recién horneada",
  },
  {
    src: "/images/promos/promo-vegetariana-03.webp",
    alt: "Pizza vegetariana con vegetales frescos",
  },
  {
    src: "/images/promos/promo-quesos-04.webp",
    alt: "Pizza de quesos acompañada de bebidas",
  },
];

export const CarouselHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % promotionImages.length
      );
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + promotionImages.length) % promotionImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % promotionImages.length
    );
  };

  return (
    <div
      className="h-64 w-full overflow-hidden rounded-md border-2 border-dashed border-orange-400 bg-yellow-300 py-2 md:h-80 2xl:h-96"
      aria-label="Promociones destacadas"
    >
      <div className="relative h-full w-full" aria-live="polite">
        {promotionImages.map((image, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            key={image.src}
            aria-hidden={activeIndex !== index}
          >
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
        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Promoción anterior"
        >
          <BsChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Promoción siguiente"
        >
          <BsChevronRight aria-hidden="true" />
        </button>
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {promotionImages.map((image, index) => (
            <button
              key={`${image.src}-indicator`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full border border-white ${
                activeIndex === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Mostrar promoción ${index + 1}`}
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
