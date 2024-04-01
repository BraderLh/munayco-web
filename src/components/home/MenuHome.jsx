import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";

export const MenuHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 content-stretch">
      <div className="w-full h- justify-self-center md:justify-self-stretch">
        <Card
          className="bg-red-100 max-w-sm m-4"
          renderImage={() => (
            <Image
              width={250}
              height={200}
              src="/images/menu/general.jpg"
              alt="menu-1"
              className="rounded-md"
              style={{
                width: 'auto'
              }}
            />
          )}
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-lime-700 dark:text-lime-200">
            Menu general
          </h5>
          <p className="font-normal text-rose-800 dark:text-gray-400">
            Ven y disfruta con tu amigos del menu general que ofrece Munayco pizzas, ofrece una variedad de pizzas clásicas y bebidas.
          </p>
        </Card>
      </div>
      <div className="w-full h-auto justify-self-center md:justify-self-stretch">
        <Card
          className="bg-red-100 max-w-sm m-4"
          renderImage={() => (
            <Image
              width={250}
              height={240}
              src="/images/menu/familiar.jpg"
              alt="menu-2"
              className="rounded-md"
              style={{
                width: 'auto',
                height: '250px'
              }}
            />
          )}
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-lime-700 dark:text-lime-200">
            Menu familiar
          </h5>
          <p className="font-normal text-rose-800 dark:text-gray-400">
            Ven y disfruta con tu familia del variado menu que ofrece Munayco pizzas, con el menu familiar que ofrece Munayco Pizzas.
          </p>
        </Card>
      </div>
    </div>
  );
};
