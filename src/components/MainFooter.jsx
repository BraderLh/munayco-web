"use client";

import { Footer } from "flowbite-react";
import Image from "next/image";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

export const MainFooter = () => {
  return (
    <Footer container className="bg-amber-700 rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="w-[200px] h-[200px] bg-amber-800 rounded-full">
            {/* <Footer.Brand
              href="/"
              src="/images/logo/logo.png"
              alt="Munayco Logo"
              name=""
              className="w-full h-max"
            /> */}
            <Image src={"/images/logo/logo.png"} alt="Munayco logo" width={200} height={200} style={{
              width: 'max-content',
              height: 'auto'
            }}/>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="A cerca de" className="text-green-300" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-yellow-200">Munayco</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Información legal" className="text-green-300" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-yellow-200">Política de privacidad</Footer.Link>
                <Footer.Link href="#" className="text-yellow-200">Terminos &amp; Condiciones</Footer.Link>
                <Footer.Link href="#" className="text-yellow-200">Cookies</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-amber-200"/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Munayco" year={2024}  className="text-green-200"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://api.whatsapp.com/send?phone=973643385" target="_blank" icon={BsWhatsapp} className="text-yellow-100 hover:text-green-400"/>
            <Footer.Icon href="https://www.facebook.com/people/Munayco-Pizzas/100070075998203/" target="_blank" icon={BsFacebook} className="text-yellow-100 hover:text-blue-600"/>
            <Footer.Icon href="#" icon={BsInstagram} className="text-yellow-100 hover:text-pink-500"/>
            <Footer.Icon href="#" icon={BsTwitter} className="text-yellow-100 hover:text-sky-500"/>
            <Footer.Icon href="#" icon={BsYoutube} className="text-yellow-100 hover:text-red-600"/>
          </div>
        </div>
      </div>
    </Footer>
  );
};
