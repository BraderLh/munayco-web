import { formatPen } from "@/utils/currency";

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");

export function createWhatsAppUrl(message = "") {
  if (!whatsappPhone) {
    return null;
  }

  const query = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${whatsappPhone}${query}`;
}

export function createCartMessage(items, total) {
  const productLines = items.flatMap((item, index) => [
    `${index + 1}. ${item.quantity} x ${item.itemType} ${item.name}`,
    `   Presentación: ${item.size}`,
    `   Precio unitario: ${formatPen(item.price)}`,
    `   Subtotal: ${formatPen(item.price * item.quantity)}`,
  ]);

  return [
    "Hola Munayco, quisiera solicitar los siguientes productos:",
    "",
    ...productLines,
    "",
    `Total referencial: ${formatPen(total)}`,
    "",
    "Por favor, confirmen la disponibilidad y los datos de entrega.",
  ].join("\n");
}
