"use client"
import { HeaderAuth } from "@/components/HeaderAuth";
import { login } from "@/services/auth/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const initialState = {
    email: '',
    password: ''
  }
  
  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({ ...form, [name]: value})
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Enviando credenciales");
    const promiseLogin = login(form);
    const response = await promiseLogin;
    localStorage.setItem('auth-token', response.token);
    showToastLogin(promiseLogin);
    checkToken(response.token);
  }

  const checkToken = (token) => {
    if (!token) {
      router.push('/auth/login');
      return
    }
  }

  const showToastLogin = (dataPromise) => {
    toast.promise(dataPromise, {
      loading: 'Iniciando sesión ...',
      success: () => {
        setForm(initialState);
        router.push('/')
        return 'Sesión iniciada existosamente';
      },
      error: 'Error en iniciar sesión: datos inválidos o no existen'
    })
  }

  return (
    <>
      <HeaderAuth />
      <main className="container md:w-1/3 h-screen mx-auto space-y-4 flex flex-col justify-center">
        <div className="mx-auto flex w-full h-[520px] flex-col justify-center border-2 border-dashed border-sky-400 rounded-lg p-4 bg-amber-300">
          <div className="flex flex-col text-center space-y-5">
            <h1 className="text-4xl font-semibold text-orange-600">Iniciar sesión</h1>
            <p className="text-base md:text-lg text-slate-600">
              Ingresa tu correo y contraseña para iniciar sesión
            </p>
          </div>

          <form className="flex flex-col gap-5 p-3" onSubmit={handleLogin}>
            <label className="block mt-4 text-base md:text-lg" htmlFor="emailId">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold mb-4">
                Correo electrónico 
              </span>
              <input
                className="w-full border p-3 shadow-sm rounded-md border-lime-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 invalid:text-pink-600 invalid:border-red-500 focus:invalid:border-red-600 
                focus:invalid:ring-pink-600"
                type="email"
                placeholder="ejemplo@gmail.com"
                required
                autoComplete="given-email"
                name="email"
                id="emailId"
                onChange={handleChange}
                value={form.email}
              />
            </label>
            <label className="block mt-2 text-base md:text-lg" htmlFor="passwordId">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold mb-4">
              Contraseña
              </span>
              <input
                className="w-full border p-3 shadow-sm rounded-md border-lime-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500
              invalid:text-pink-600 focus:invalid:border-red-600 focus:invalid:ring-pink-600"
                type="password"
                placeholder="contrAseñ@1234"
                required
                name="password"
                id="passwordId"
                onChange={handleChange}
                value={form.password}
              />
            </label>
            <button className="mt-2 w-90 border p-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-md cursor-pointer mx-5">
              Iniciar sesión
            </button>
          </form>
          <div className="flex justify-center gap-2 font-semibold text-base md:text-lg">
            <span>¿No tienes una cuenta?</span>
            <Link
              href="/auth/sigin"
              className="text-orange-500 hover:text-orange-600"
            >
              Registrarme
            </Link>
          </div>
          <Toaster
            richColors
            toastOptions={{
              duration: 5000,
            }}
          />
        </div>
      </main>
    </>
  );
}
