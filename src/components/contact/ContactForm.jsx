"use client";

import { useMemo, useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { BsSend } from "react-icons/bs";

const initialValues = {
  subject: "",
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

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
  const errors = useMemo(() => validateForm(values), [values]);

  const getError = (field) =>
    touched[field] || submitted ? errors[field] : undefined;

  const updateField = (field, value) => {
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
      return;
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="subject"
            value="Asunto"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="subject"
          type="text"
          placeholder="Asunto"
          required
          maxLength={80}
          value={values.subject}
          onBlur={() => markTouched("subject")}
          onChange={(event) => updateField("subject", event.target.value)}
          color={getError("subject") ? "failure" : undefined}
          aria-describedby={getError("subject") ? "subject-error" : undefined}
        />
        <FieldError id="subject-error" message={getError("subject")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="fullName"
            value="Nombres y apellidos"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="fullName"
          type="text"
          placeholder="Nombres y apellidos"
          required
          maxLength={100}
          value={values.fullName}
          onBlur={() => markTouched("fullName")}
          onChange={(event) => updateField("fullName", event.target.value)}
          color={getError("fullName") ? "failure" : undefined}
          aria-describedby={getError("fullName") ? "fullName-error" : undefined}
        />
        <FieldError id="fullName-error" message={getError("fullName")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Correo electrónico"
            className="text-base md:text-xl"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="ejemplo@email.com"
          required
          value={values.email}
          onBlur={() => markTouched("email")}
          onChange={(event) => updateField("email", event.target.value)}
          color={getError("email") ? "failure" : undefined}
          aria-describedby={getError("email") ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={getError("email")} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="mb-2 block">
          <Label
            htmlFor="phone"
            value="Número telefónico"
            className="text-base md:text-xl"
          />
        </div>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center border-r border-gray-300 bg-gray-100 px-3 text-sm text-gray-700">
            +51
          </span>
          <TextInput
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
            color={getError("phone") ? "failure" : undefined}
            aria-describedby={getError("phone") ? "phone-error" : undefined}
            className="pl-14"
          />
        </div>
        <FieldError id="phone-error" message={getError("phone")} />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label
            htmlFor="message"
            value="Mensaje"
            className="text-base md:text-xl"
          />
        </div>
        <div className="relative">
          <Textarea
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
            color={getError("message") ? "failure" : undefined}
            aria-describedby={
              getError("message") ? "message-error" : "message-counter"
            }
            className="pb-7 text-base md:text-lg"
          />
          <span
            id="message-counter"
            className="pointer-events-none absolute bottom-2 right-3 text-xs text-gray-600"
            aria-live="polite"
          >
            {values.message.length}/300
          </span>
        </div>
        <FieldError id="message-error" message={getError("message")} />
      </div>

      <div className="col-span-2 py-4 md:py-8">
        <Button
          type="submit"
          color="success"
          size="lg"
          className="mx-auto h-15 w-56 md:h-auto md:w-64 lg:w-72 xl:w-96"
        >
          <BsSend className="mr-2 h-5 w-7" />
          Enviar
        </Button>
      </div>
    </form>
  );
};
