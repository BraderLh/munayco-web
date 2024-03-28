"use client";

import { Footer } from "flowbite-react";
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
    <Footer container className="bg-orange-200">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="A cerca de" className="text-red-500" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-yellow-700">Munayco</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/*<div>
              <Footer.Title title="Visitanos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Conta</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>*/}
            <div>
              <Footer.Title title="Información legal" className="text-red-500" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-yellow-700">Política de privacidad</Footer.Link>
                <Footer.Link href="#" className="text-yellow-700">Terminos &amp; Condiciones</Footer.Link>
                <Footer.Link href="#" className="text-yellow-700">Cookies</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-amber-100"/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Munayco" year={2024}  className="text-red-500"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsWhatsapp} className="hover:text-green-500"/>
            <Footer.Icon href="#" icon={BsFacebook} className="hover:text-blue-600"/>
            <Footer.Icon href="#" icon={BsInstagram} className="hover:text-orange-500"/>
            <Footer.Icon href="#" icon={BsTwitter} className="hover:text-sky-500"/>
            <Footer.Icon href="#" icon={BsYoutube} className="hover:text-red-600"/>
          </div>
        </div>
      </div>
    </Footer>
  );
};
