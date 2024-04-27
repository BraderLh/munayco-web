import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <main className="grid grid-flow-row auto-rows-max">
        <div className="w-full md:w-screen text-center bg-amber-200 p-10">
          <h1 className="text-4xl">Contáctanos</h1>
          <p>
            Si tienes alguna dudo o consulta que deseas enviar, no dudes
            mandarnos un mensaje a través del siguiente formulario{" "}
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
