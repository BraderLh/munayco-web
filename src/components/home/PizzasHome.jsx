'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import getImages from "@/services/home/images";

const PizzasHome = () => {
  const imgs = getImages();
  const [pizzaList, setPizzaList] = useState(imgs);

  useEffect(() => {
    const interval = setInterval(() => {
      setPizzaList(getImages());
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [pizzaList]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-2 bg-red-400 rounded-md sm:grid-cols-2 md:grid-cols-4">
        {/* <div>
          <p className="text-black">{JSON.stringify(imgs, 2)}</p>
        </div> */}
        {pizzaList && pizzaList.map((img, key) => {
          return (
            <div className="flex flex-col" key={key}>
              <Image
                src={img.default.src}
                alt={"pizza"}
                width={500}
                height={500}
                className="rounded-md"
              />
              <h1 className="text-amber-100 text-lg text-center">{img.alt}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PizzasHome;
