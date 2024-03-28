import { GridPizzas } from "@/components/pizzas/GridPizzas";
import { fetchItems } from "@/services/items";
// import { useState} from "react";

export default async function PizzasPage() {
  const itemsTypeList = await fetchItems()
  console.log('list' + itemsTypeList);
  // console.log(itemsTypeList);
  //itemsTypeList.sort((a,b) => a.itemsTypeId - b.itemsTypeId)

  return (
    <>
      <main className="container mx-auto py-10 px-4 w-full border border-white">
        {/* <GridPizzas items = {itemsTypeList}></GridPizzas> */}
      <pre>{JSON.stringify(itemsTypeList, null, 2)}</pre>
      </main>
      {/* <div className="container mx-auto justify-center px-2">
        <h1 className="text-xl font-bold text-amber-600">Pizza List</h1>
        <GridPizzas items = {itemsTypeList}></GridPizzas>
      </div> */}
    </>
  );
}
