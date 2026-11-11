"use client";

import { useMemo, useState } from "react";
import { BsSend } from "react-icons/bs";

const initialValues = {
  subject: "",
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const baseFieldClass =
  "block w-full rounded-lg border bg-gray-50 p-3 text-gray-900 outline-none transition placeholder:text-gray-500 focus:ring-2";

function fieldClass(hasError, extraClass = "") {
  const stateClass = hasError
    ? "border-red-500 focus:border-red-600 focus:ring-red-200"
    : "border-gray-300 focus:border-lime-600 focus:ring-lime-200";

  return `${baseFieldClass} ${stateClass} ${extraClass}`;
}

function validateForm(values) {
  const errors = {};
  const namePattern = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[\s'-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.subject.trim().length < 3) {
    errors.subject = "Ingresa un asunto de al menos 3 caracteres.";
  }

  if (!namePattern.test(values.fullName.trim())) {
    errors.fullName = "Ingresa nombres y apellidos válidos.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (!/^\d{9}$/.test(values.phone)) {
    errors.phone = "Ingresa los 9 dígitos de tu celular.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

function FieldError({ id, message }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

export const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const errors = useMemo(() => validateForm(values), [values]);

  const getError = (field) =>
    touched[field] || submitted ? errors[field] : undefined;

  const updateField = (field, value) => {
    setFeedback("");
    const nextValue =
      field === "phone" ? value.replace(/\D/g, "").slice(0, 9) : value;

    setValues((currentValues) => ({
      ...currentValues,
      [field]: nextValue,
    }));
  };

  const markTouched = (field) => {
    setTouched((currentTouched) => ({
      ...currentTouched,
      [field]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTouched({
      subject: true,
      fullName: true,
      email: true,
      phone: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) {
      setFeedback("");
      return;
    }

    setFeedback(
      "Para continuar con tu consulta, comunícate con nosotros mediante el botón de WhatsApp."
    );
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-span-2 md:col-span-1">
        <label htmlFor="subject" className="mb-2 block text-base md:text-xl">
          Asunto
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Asunto"
          required
          maxLength={80}
          value={values.subject}
          onBlur={() => markTouched("subject")}
          onChange={(event) => updateField("subject", event.target.value)}
          className={fieldClass(Boolean(getError("subject")))}
          aria-invalid={Boolean(getError("subject"))}
          aria-describedby={getError("subject") ? "subject-error" : undefined}
        />
        <FieldError id="subject-error" message={getError("subject")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label htmlFor="fullName" className="mb-2 block text-base md:text-xl">
          Nombres y apellidos
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Nombres y apellidos"
          required
          maxLength={100}
          value={values.fullName}
          onBlur={() => markTouched("fullName")}
          onChange={(event) => updateField("fullName", event.target.value)}
          className={fieldClass(Boolean(getError("fullName")))}
          aria-invalid={Boolean(getError("fullName"))}
          aria-describedby={getError("fullName") ? "fullName-error" : undefined}
        />
        <FieldError id="fullName-error" message={getError("fullName")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label htmlFor="email" className="mb-2 block text-base md:text-xl">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="ejemplo@email.com"
          required
          value={values.email}
          onBlur={() => markTouched("email")}
          onChange={(event) => updateField("email", event.target.value)}
          className={fieldClass(Boolean(getError("email")))}
          aria-invalid={Boolean(getError("email"))}
          aria-describedby={getError("email") ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={getError("email")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-base md:text-xl">
          Número telefónico
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center rounded-l-lg border-r border-gray-300 bg-gray-100 px-3 text-sm text-gray-700">
            +51
          </span>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="999 999 999"
            required
            maxLength={9}
            value={values.phone}
            onBlur={() => markTouched("phone")}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClass(Boolean(getError("phone")), "pl-16")}
            aria-invalid={Boolean(getError("phone"))}
            aria-describedby={getError("phone") ? "phone-error" : undefined}
          />
        </div>
        <FieldError id="phone-error" message={getError("phone")} />
      </div>

      <div className="col-span-2">
        <label htmlFor="message" className="mb-2 block text-base md:text-xl">
          Mensaje
        </label>
        <div className="relative">
          <textarea
            id="message"
            placeholder="Escribe aquí tu comentario o consulta ..."
            required
            rows={5}
            maxLength={300}
            value={values.message}
            onBlur={() => markTouched("message")}
            onChange={(event) =>
              updateField("message", event.target.value.slice(0, 300))
            }
            className={fieldClass(Boolean(getError("message")), "pb-8 text-base md:text-lg")}
            aria-invalid={Boolean(getError("message"))}
            aria-describedby={
              getError("message") ? "message-error" : "message-counter"
            }
          />
          <span
            id="message-counter"
            className="pointer-events-none absolute bottom-3 right-3 text-xs text-gray-600"
            aria-live="polite"
          >
            {values.message.length}/300
          </span>
        </div>
        <FieldError id="message-error" message={getError("message")} />
      </div>

      <div className="col-span-2 py-4 md:py-8">
        <button
          type="submit"
          className="mx-auto flex w-56 items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 md:w-64 lg:w-72 xl:w-96"
        >
          <BsSend className="mr-2 h-5 w-7" aria-hidden="true" />
          Enviar
        </button>
        {feedback && (
          <p
            className="mx-auto mt-4 max-w-2xl rounded-lg border border-lime-300 bg-lime-50 p-4 text-center text-sm font-medium text-lime-900"
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
};
