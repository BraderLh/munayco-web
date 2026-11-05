# Carrito y solicitud por WhatsApp

El carrito funciona únicamente en el frontend y conserva temporalmente su contenido en `localStorage` con la clave `munayco-cart`.

## Configuración

Define en `.env.local` el número comercial con código de país, sin `+`, espacios ni guiones:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=51999999999
```

El valor de ejemplo no representa un número real. `.env.local` no debe versionarse.

## Flujo

1. El cliente selecciona una presentación con precio mayor que cero.
2. Agrega el producto al carrito.
3. Puede modificar cantidades o retirar productos desde el panel del carrito.
4. `Solicitar por WhatsApp` abre un mensaje plano con productos, presentaciones, cantidades, subtotales y total referencial.

Este flujo no registra pedidos en el backend, no valida stock, no calcula reparto y no procesa pagos. WhatsApp se utiliza únicamente para solicitar confirmación al negocio.
