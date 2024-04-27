import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { BsSend } from "react-icons/bs";

export const ContactForm = () => {
  return (
    <form className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="asunto1"
            value="Asunto"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="asunto1"
          type="text"
          placeholder="Asunto"
          required
          sizing="md md:lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="name1"
            value="Nombres y apellidos"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="name1"
          type="text"
          placeholder="Nombres y apellidos"
          required
          sizing="md md:lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Correo electrónico"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="ejemplo@email.com"
          required
          sizing="md md:lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="celular1"
            value="Número telefónico"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="celular1"
          type="text"
          placeholder="Número telefónico"
          sizing="md md:lg"
        />
      </div>
      <div className="col-span-2">
        <div className="mb-2 block">
          <Label
            htmlFor="mensaje1"
            value="Mensaje"
            className="text-base md:text-xl"
          />
        </div>
        <Textarea
          id="mensaje1"
          type="text"
          placeholder="Escribe aquí tu comentario o consulta ..."
          required
          rows={5}
          className="text-base md:text-lg"
        />
      </div>
      <div className="col-span-2 py-4 md:py-8">
        <Button
          type="submit"
          color="success"
          size="lg"
          className="w-56 md:w-64 lg:w-72 xl:w-96 mx-auto h-15 md:h-auto"
        >
          <BsSend className="mr-2 h-5 w-7" />
          Enviar
        </Button>
      </div>
    </form>
  );
};
