"use client";

import { BsGeoAlt } from "react-icons/bs";
import { GiRotaryPhone, GiSmartphone } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ModalDialog } from "@/components/ui/ModalDialog";

function getMapUrl(location) {
  if (typeof location !== "string") {
    return null;
  }

  const [latitude, longitude] = location.split(",").map((value) => value.trim());

  if (!latitude || !longitude || !Number.isFinite(Number(latitude)) || !Number.isFinite(Number(longitude))) {
    return null;
  }

  return `https://maps.google.com/maps?q=${latitude},${longitude}&z=18`;
}

function getPhoneHref(value) {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

function formatClockTime(hour, minute = 0) {
  const normalizedHour = hour % 12 || 12;
  const period = hour >= 12 ? "p. m." : "a. m.";

  return `${normalizedHour}:${String(minute).padStart(2, "0")} ${period}`;
}

function formatOpeningHours(value) {
  if (typeof value !== "string") {
    return null;
  }

  const match = value.trim().match(
    /^(\d{1,2})(?::(\d{2}))?\s*[-–]\s*(\d{1,2})(?::(\d{2}))?$/
  );

  if (!match) {
    return value.trim();
  }

  const startHour = Number(match[1]);
  const startMinute = Number(match[2] || 0);
  let endHour = Number(match[3]);
  const endMinute = Number(match[4] || 0);

  // The fixture uses "10-08" for 10 a. m. to 8 p. m.; preserve
  // unambiguous 24-hour values received from a future backend.
  if (endHour < 12 && startHour >= 6 && endHour <= startHour) {
    endHour += 12;
  }

  return `${formatClockTime(startHour, startMinute)} – ${formatClockTime(
    endHour,
    endMinute
  )}`;
}

export const BranchOfficeCard = ({ branch }) => {
  const [openFrame, setOpenFrame] = useState(false);
  const mapUrl = useMemo(() => getMapUrl(branch.location), [branch.location]);
  const imageUrl = branch.imageUrl || branch.image;
  const address = branch.address || "Dirección no disponible";
  const telephoneHref = getPhoneHref(branch.telephone);
  const phoneHref = getPhoneHref(branch.phone);
  const openingHours = formatOpeningHours(branch.openingHours);

  const copyLocation = async () => {
    if (!mapUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(mapUrl);
      toast.success("Dirección copiada");
      setOpenFrame(false);
    } catch {
      toast.error("No se pudo copiar la dirección");
    }
  };

  return (
    <article className="flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-lime-600 bg-amber-50 p-5 shadow-md shadow-lime-500/40">
      {imageUrl ? (
        <Image
          alt={`Exterior de la sucursal en ${address}`}
          height={360}
          src={imageUrl}
          width={640}
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="h-52 w-full rounded-md object-cover sm:h-56"
        />
      ) : (
        <div className="flex h-52 items-center justify-center rounded-md bg-amber-100 text-center text-sm text-amber-800 sm:h-56">
          Imagen no disponible
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-lime-700">
            Sucursal Munayco
          </p>
          <div className="mt-1 flex items-start gap-3">
            <FaPizzaSlice
              className="mt-1 shrink-0 text-orange-500"
              size={24}
              aria-hidden="true"
            />
            <h2 className="text-xl font-semibold text-amber-900">
              {address}
            </h2>
          </div>
        </div>

        {(branch.telephone || branch.phone) && (
          <div className="grid gap-2 text-amber-900">
            {branch.telephone && telephoneHref && (
              <a
                href={telephoneHref}
                className="inline-flex w-fit items-center gap-2 rounded-md px-1 py-1 transition hover:bg-cyan-50 hover:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label={`Llamar al teléfono fijo ${branch.telephone}`}
              >
                <GiRotaryPhone className="text-cyan-700" size={22} aria-hidden="true" />
                <span>
                  <span className="mr-2 text-sm text-amber-700">Fijo</span>
                  {branch.telephone}
                </span>
              </a>
            )}
            {branch.phone && phoneHref && (
              <a
                href={phoneHref}
                className="inline-flex w-fit items-center gap-2 rounded-md px-1 py-1 transition hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label={`Llamar al celular ${branch.phone}`}
              >
                <GiSmartphone className="text-sky-700" size={22} aria-hidden="true" />
                <span>
                  <span className="mr-2 text-sm text-amber-700">Celular</span>
                  {branch.phone}
                </span>
              </a>
            )}
          </div>
        )}

        {openingHours && (
          <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-100 p-3 text-amber-900">
            <MdOutlineAccessTime className="shrink-0 text-violet-700" size={24} aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Horario de atención
              </p>
              <p className="font-semibold">{openingHours}</p>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {mapUrl ? (
            <button
              type="button"
              onClick={() => setOpenFrame(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300"
              aria-label={`Cómo llegar a ${address}`}
            >
              <BsGeoAlt size={22} aria-hidden="true" />
              Cómo llegar
            </button>
          ) : (
            <p className="text-sm text-amber-700">Ubicación no disponible</p>
          )}
        </div>
      </div>

      <ModalDialog
        isOpen={openFrame}
        onClose={() => setOpenFrame(false)}
        title="Mapa del local"
        footer={
          <div className="flex flex-col-reverse justify-between gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setOpenFrame(false)}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={copyLocation}
              className="rounded-lg bg-lime-700 px-5 py-2.5 font-semibold text-white transition hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300"
            >
              Copiar dirección
            </button>
          </div>
        }
      >
          {mapUrl && (
            <div className="w-full overflow-hidden rounded-lg border-2 border-orange-200">
              <iframe
                title={`Mapa de ${branch.address || "la sucursal"}`}
                width="100%"
                height="450"
                loading="lazy"
                className="h-[350px] rounded-lg md:h-[450px]"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`${mapUrl}&output=embed`}
              />
            </div>
          )}
      </ModalDialog>
    </article>
  );
};
