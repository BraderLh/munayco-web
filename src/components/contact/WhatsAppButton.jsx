import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export const WhatsAppButton = () => {
  return (
    <div className="flex absolute top-1/2 right-0 z-10 justify-center bg-green-500 hover:bg-green-600 h-[90px] w-[90px] 
    rounded-full animate-bounce cursor-pointer transition ease-in-out delay-150">
      <a href={"https://api.whatsapp.com/send?phone=973643385"} className="my-auto mx-auto">
        <BsWhatsapp
          size={50}
          color="white"
        />
      </a>
    </div>
  );
};
