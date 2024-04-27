"use client";
import { Header } from "@/components/Header";
import React from "react";
import BranchWrapper from "@/components/branches/BranchWrapper";
import BranchList from "@/components/branches/BranchList";

export default function BranchesPage() {
  return (
    <>
      <Header />
      <main className="grid gap-4 grid-flow-row auto-rows-max md:auto-rows-min h-auto">
        <div className="m-4 h-full">
          <section className="rounded-md bg-orange-500 p-4 container mx-auto">
            <h1 className="font-semibold text-2xl text-amber-300 mb-4">Locales</h1>
            <p className="bg-orange-300 border-2 border-dashed border-amber-200 rounded-lg p-5 text-pretty">
              Nuestro local está cuidadosamente diseñado para crear un ambiente
              acogedor y moderno. Los tonos cálidos y la iluminación suave crean
              una atmósfera íntima y acogedora, perfecta para una comida
              relajada con amigos y familiares. Las mesas y sillas están
              dispuestas de manera que te permitan disfrutar de tu comida con
              comodidad, mientras que nuestra área de espera ofrece un espacio
              cómodo para relajarte mientras esperas tu pedido.
              <br />
              En Munayco Pizza, no se trata solo de la comida, se trata de la
              experiencia. Desde el momento en que entras en nuestro local hasta
              el último bocado de tu pizza, nos esforzamos por ofrecerte un
              servicio excepcional y una experiencia inolvidable. Ven y únete a
              nosotros en Munayco Pizza, donde cada comida es una celebración de sabor
              y hospitalidad.
            </p>
          </section>
        </div>
        <div className="flex justify-end mr-[10%]">
          <BranchWrapper />
        </div>
        <div className="container mx-auto w-full">
          <BranchList />
        </div>
        <div>
          <div className="bg-orange-400">
            <section></section>
          </div>
        </div>
      </main>
    </>
  );
}
