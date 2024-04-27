'use client';

import { GridPizzas } from "@/components/pizzas/GridPizzas";
import { fetchItems } from "@/services/items";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import pizzaJson from "../../../data/pizzas.json"

export default function PizzasPage() {
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   toast.promise(fetchItems, {
  //     loading: "Cargando ...",
  //     success: (res) => {
  //       console.log(res);
  //       setItems(res.data);
  //       return "Datos cargados satisfactoriamente";
  //     },
  //     error: "Error al cargar datos",
  //   });
  // }, []);

  useEffect(() => {
    setItems(pizzaJson.data)
  }, [])

  return (
    <>
      <main className="container mx-auto py-5 px-4 w-full border border-white">
        {items && <GridPizzas items={items}></GridPizzas>}
        <Toaster richColors position="bottom-right" visibleToasts={1} toastOptions={{duration: 5000}}/>
        {/* <pre>{JSON.stringify(itemsTypeList, null, 2)}</pre> */}
      </main>
    </>
  );
}
