"use client";

import React from "react";
import { Card, Carousel, Modal } from "flowbite-react";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export const ItemType = ({ item }) => {
  const [pizzaModal, setPizzaModal] = useState(false);
  const splitPrices = item.prices.split(",");
  let convertedPrices = splitPrices.map((numStr) =>
    parseFloat(numStr).toFixed(2)
  );

  return (
    <div>
      <Card
        className="max-w-sm h-[505px] bg-amber-200 border border-solid border-orange-300"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        renderImage={() => (
          <Image
            width={400}
            height={300}
            src={item.image}
            priority={true}
            alt={`item-${item.itemsTypeId}`}
            style={{
              height: "auto",
              maxWidth: "100%",
            }}
            className="rounded-md"
          />
        )}
        // imgSrc={item.image}
      >
        <div className="flex flex-col gap-y-3">
          <div className="text-3xl">
            <h2 className="font-semibold tracking-tight text-rose-600 dark:text-rose-200">
              {item.name}
            </h2>
          </div>
          <div className="text-xl">
            <h3 className="text-green-600 dark:text-green-200">{item.size}</h3>
          </div>
          <div className="text-lg">
            <p className="italic truncate text-pretty h-[56px]">{item.ingredients}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-amber-500 dark:text-amber-200">
            S/. {convertedPrices.join(" / ")}
          </span>
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            onClick={() => setPizzaModal(true)}
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-orange-700 
            focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Ver más detalles
          </a>
          <Modal
            dismissible
            show={pizzaModal}
            onClose={() => setPizzaModal(false)}
          >
            <Modal.Header className="bg-orange-400 dark:bg-yellow-600 "><div className="font-bold  text-2xl text-red-600 dark:text-red-100">{item.name}</div></Modal.Header>
            <Modal.Body className="bg-amber-200">
              <div className="flex flex-col">
                <div className="h-100 w-98">
                  <div className="h-56 md:h-64 xl:h-72">
                    <Carousel leftControl={<FaRegHandPointLeft color="white" size={40}/>} rightControl={<FaRegHandPointRight color="white" size={40}/>}>
                      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                  </div>
                </div>
                <div className="my-2 border-2 border-dashed border-lime-500 p-2 rounded-md">
                  <h2 className="mb-2 text-xl font-semibold text-green-600 dark:text-lime-200">Ingredientes</h2>
                    <p className="font-medium italic">{item.ingredients}</p>
                </div>
                <div className="container w-full h-auto my-2 p-2 border-2 border-lime-500 border-dashed rounded-md">
                  <table className="w-full border-separate border-spacing-2 border border-amber-600 bg-amber-300 rounded-lg">
                    <thead className="bg-orange-500">
                      <tr className="text-white text-lg">
                        <th className="border rounded-md border-amber-400">Tamaño</th>
                        <th className="border rounded-md border-amber-400">Piezas</th>
                        <th className="border rounded-md border-amber-400">Precio</th>
                      </tr>
                    </thead>
                    <tbody className="bg-amber-100 text-center">
                      <tr>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">Personal</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">4 porciones</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">S/.{convertedPrices[0]}</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">Mediana</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">8 porciones</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">S/.{convertedPrices[1]}</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">Familiar</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">12 porciones</td>
                        <td className="border-2 border-dotted border-amber-600 px-2 py-1">S/.{convertedPrices[2]}</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-dotted border-amber-600 px-2">Extra Familiar</td>
                        <td className="border-2 border-dotted border-amber-600 px-2">16 porciones</td>
                        <td className="border-2 border-dotted border-amber-600 px-2">S/.50.00 (aprox)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-end bg-orange-400">
              <button type="button" onClick={() => setPizzaModal(false)} 
                className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 
                font-medium rounded-full text-sm md:text-base px-5 py-2.5 text-center me-2 mb-2 
                dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Cerrar
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card>
    </div>
  );
};
