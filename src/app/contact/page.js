import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function ContactPage() {
  return (
    <>
      <main className="grid grid-flow-row auto-rows-max">
        <div className="w-full md:w-screen text-center bg-amber-200 p-10">
          <h1 className="text-3xl">Contáctanos</h1>
          <p>
            Si tienes alguna dudo o consulta que deseas enviar, no dudes
            mandarnos un mensaje a través del siguiente formulario{" "}
          </p>
        </div>
        <div className="container mx-auto justify-center p-8">
          <form className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 block">
                <Label htmlFor="asunto1" value="Asunto" />
              </div>
              <TextInput
                id="asunto1"
                type="text"
                placeholder="Asunto"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Nombres y apellidos" />
              </div>
              <TextInput
                id="name1"
                type="text"
                placeholder="Nombres y apellidos"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Correo electrónico" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="ejemplo@email.com"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 block">
                <Label htmlFor="celular1" value="Número telefónico" />
              </div>
              <TextInput
                id="celular1"
                type="text"
                placeholder="Número telefónico"
              />
            </div>
            <div className="col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="mensaje1" value="Mensaje" />
              </div>
              <Textarea id="mensaje1" type="text" placeholder="Escribe aquí tu comentario o consulta ..." required rows={5} />
            </div>
            <div className="col-span-2 py-4 md:py-8">
              <Button type="submit" color="success" size="lg" className="w-56 md:w-64 lg:w-72 xl:w-96 mx-auto h-15 md:h-auto">Enviar</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
