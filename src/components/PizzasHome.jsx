import React from "react";
import Image from "next/image";

const PizzasHome = () => {
  const imgPizzas = require.context("/public/images/pizzas", false);
  const pizzaList = imgPizzas.keys().map((image) => imgPizzas(image));
  console.log(pizzaList.map((image, index) => {
    console.log(image.default, index);
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-2 bg-red-400 rounded-md sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h1 className="text-amber-100">Napolitana</h1>
          <Image
            src={"/images/pizzas/napolitana.jpg"}
            alt="napolitana"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            src={"/images/pizzas/vegetariana.jpg"}
            alt="vegetariana"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            src={"/images/pizzas/hawuaina.jpg"}
            alt="hawuaina"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            src={"/images/pizzas/ny.jpg"}
            alt="newyorkina"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default PizzasHome;