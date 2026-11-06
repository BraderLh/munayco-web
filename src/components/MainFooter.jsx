import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { createWhatsAppUrl } from "@/services/whatsapp";

const socialLinkClass =
  "rounded-full p-2 text-xl text-yellow-100 transition focus:outline-none focus:ring-2 focus:ring-yellow-100";

export const MainFooter = () => {
  const whatsappUrl =
    createWhatsAppUrl("Hola Munayco, quisiera solicitar información.") ||
    "/contact";

  return (
    <footer className="rounded-none bg-amber-600 p-6 md:p-8">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
          <Link
            href="/"
            className="h-[180px] w-[180px] overflow-hidden rounded-full bg-amber-800"
            aria-label="Ir al inicio de Munayco"
          >
            <Image
              src="/images/logo/logo-board-munayco.webp"
              alt="Logo Munayco sobre una tabla de pizza"
              width={180}
              height={180}
              sizes="180px"
              className="h-full w-full object-contain"
            />
          </Link>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:justify-self-end">
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase text-yellow-200">
                Acerca de
              </h2>
              <Link
                href="/about"
                className="text-base text-white transition hover:text-yellow-200 hover:underline"
              >
                Munayco
              </Link>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase text-yellow-200">
                Información legal
              </h2>
              <ul className="space-y-3 text-base text-white">
                <li>
                  <a href="#" className="hover:text-yellow-200 hover:underline">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200 hover:underline">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200 hover:underline">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-amber-200" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-yellow-200">© 2024 Munayco</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialLinkClass} hover:bg-green-700 hover:text-white`}
              aria-label="WhatsApp de Munayco"
            >
              <BsWhatsapp aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/people/Munayco-Pizzas/100070075998203/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialLinkClass} hover:bg-blue-700 hover:text-white`}
              aria-label="Facebook de Munayco"
            >
              <BsFacebook aria-hidden="true" />
            </a>
            <a
              href="#"
              className={`${socialLinkClass} hover:bg-pink-600 hover:text-white`}
              aria-label="Instagram de Munayco"
            >
              <BsInstagram aria-hidden="true" />
            </a>
            <a
              href="#"
              className={`${socialLinkClass} hover:bg-sky-600 hover:text-white`}
              aria-label="X de Munayco"
            >
              <BsTwitter aria-hidden="true" />
            </a>
            <a
              href="#"
              className={`${socialLinkClass} hover:bg-red-600 hover:text-white`}
              aria-label="YouTube de Munayco"
            >
              <BsYoutube aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
