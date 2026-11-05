import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <main className="grid grid-flow-row auto-rows-max">
        <div className="w-full md:w-screen text-center bg-amber-200 p-10">
          <h1 className="p-3 text-4xl">Contáctanos</h1>
          <p>
            Si tienes dudas o alguna consulta, envíanos un mensaje utilizando el siguiente formulario o a través de nuestras redes.
          </p>
        </div>
        <div className="container mx-auto justify-center p-8">
          <WhatsAppButton/>
          <ContactForm/>
        </div>
      </main>
    </>
  );
}
