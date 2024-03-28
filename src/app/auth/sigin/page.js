"use client";
import React, { useState } from "react";
import { HeaderAuth } from "@/components/HeaderAuth";
import { singUp } from "@/services/auth/users";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export default function SigInPage() {
  const router = useRouter();

  const initialState = {
    names: "",
    surnames: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const [input, setInput] = useState({
    names: "",
    surnames: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    names: "",
    surnames: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
    setForm({ ...form, [name]: value });
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "names":
          if (!value) {
            stateObj[name] = "Por favor, ingrese sus nombres.";
          }
          break;

        case "surnames":
          if (!value) {
            stateObj[name] = "Por favor, ingrese sus apellidos.";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Por favor, ingrese su email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Ingrese su contraseña.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Las contraseñas no coinciden, por favor aségurese que sean iguales.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Ingrese la confirmación de su contraseña.";
          } else if (input.password && value !== input.password) {
            stateObj[name] =
              "Las contraseñas no coinciden, por favor aségurese que sean iguales.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const promiseSignUp = singUp(form);
    showToastSingUp(promiseSignUp);
    // setForm(initialState);
  };

  const showToastSingUp = (dataPromise) => {
    toast.promise(dataPromise, {
      loading: "Iniciando sesión ...",
      success: () => {
        setForm(initialState);
        router.push("/");
        return "Sesión iniciada existosamente";
      },
      error:
        "No se pudo iniciar sesión: datos inválidos o el usuario no existe",
    });
  };

  return (
    <>
      <HeaderAuth />
      <main className="container w-[480px] h-screen mx-auto space-y-5 flex flex-col justify-center p-4">
        <div className="mx-auto flex w-full h-auto flex-col justify-center border rounded-lg border-lime-500 p-4">
          <div className="flex flex-col text-center space-y-3">
            <h1 className="text-4xl font-semibold">Registro</h1>
            <p className="text-sm text-slate-600">
              Ingresa los siguientes datos para registrarte
            </p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
            <label className="font-bold mt-4">Nombres</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="text"
              name="names"
              placeholder="Ingresa tus nombres"
              value={input.names}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.names && (
              <span className="text-sm text-red-600">{error.names}</span>
            )}

            <label className="font-bold mt-4">Apellidos</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="text"
              name="surnames"
              placeholder="Ingrese sus apellidos"
              value={input.surname}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.surnames && (
              <span className="text-sm text-red-600">{error.surnames}</span>
            )}

            <label className="font-bold mt-4">Correo electrónico</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              value={input.email}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.email && (
              <span className="text-sm text-red-600">{error.email}</span>
            )}

            <label className="font-bold">Contraseña</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="password"
              name="password"
              placeholder="contrAseñ@1234"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.password && (
              <span className="text-sm text-red-600">{error.password}</span>
            )}

            <label className="font-bold">Confirmar contraseña</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              placeholder="contrAseñ@1234"
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.confirmPassword && (
              <span className="text-sm text-red-600">
                {error.confirmPassword}
              </span>
            )}
            <button
              type="submit"
              className="mt-4 w-90 border p-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-md cursor-pointer mx-5"
            >
              Registrarme
            </button>
          </form>
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
