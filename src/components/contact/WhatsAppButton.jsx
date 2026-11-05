import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { createWhatsAppUrl } from "@/services/whatsapp";

export const WhatsAppButton = () => {
  const whatsappUrl =
    createWhatsAppUrl("Hola Munayco, quisiera solicitar información.") ||
    "/contact";

  return (
    <div className="flex absolute top-1/2 right-0 z-10 justify-center bg-green-500 hover:bg-green-600 h-[90px] w-[90px] 
    rounded-full animate-bounce cursor-pointer transition ease-in-out delay-150">
      <a href={whatsappUrl} className="my-auto mx-auto" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Munayco por WhatsApp">
        <BsWhatsapp
          size={50}
          color="white"
        />
      </a>
    </div>
  );
};
