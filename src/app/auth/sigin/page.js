import React from "react";
import { HeaderAuth } from "@/components/HeaderAuth";
import { useRouter } from "next/navigation";
import { SigninForm } from "@/components/auth/SigninForm";

export default function SigInPage() {
  //const router = useRouter();

  return (
    <>
      <HeaderAuth />
      <main className="container w-full md:w-2/5 h-screen mx-auto p-4 flex items-center">
        <div className="w-full h-auto py-auto flex flex-col justify-center border-2 border-dashed rounded-lg border-sky-400 bg-amber-300 md:p-8 p-4">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Registro</h1>
            <p className="text-base md:text-lg text-slate-600">
              Ingresa los siguientes datos para registrarte
            </p>
          </div>
          <div>
            <SigninForm/>
          </div>
        </div>
      </main>
    </>
  );
}
