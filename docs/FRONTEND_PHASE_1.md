# Munayco frontend — Fase 1

## Configuración local

Requisitos:

- Node.js 24, según `.nvmrc` (el proyecto acepta Node.js 18.17 o superior).
- Backend Munayco disponible en `http://localhost:8080/balh/munayco`.

Desde la carpeta del frontend:

```powershell
npm.cmd ci
Copy-Item .env.example .env.local
npm.cmd run dev
```

La variable pública debe apuntar al contexto real del backend:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/balh/munayco
```

Validación:

```powershell
npm.cmd run lint
npm.cmd run build
```

## Integración implementada

El cliente API centralizado usa `fetch` nativo y valida tanto el estado HTTP como el campo `code` de la envoltura:

```json
{
  "code": 200,
  "message": "...",
  "data": {}
}
```

El catálogo público utiliza temporalmente el fixture local:

```text
src/data/pizzas.json
```

La función `fetchItemsFromApi()` conserva la integración preparada para volver a consumir:

```text
GET /api/v1/itemType
```

Los registros se filtran por `active === true` y se utilizan los campos `itemsTypeId`, `code`, `itemType`, `name`, `image`, `size`, `ingredients` y `prices`.

Las llamadas protegidas agregan `Authorization: Bearer <accessToken>` usando temporalmente `localStorage` con la clave `auth-token`. Una respuesta 401 elimina el token y emite el evento `munayco:auth-expired`; una respuesta 403 se entrega al componente como error tipado.

## Datos estáticos y transición

- `src/data/pizzas.json` es la fuente temporal del catálogo y la portada mientras se actualiza la base de datos.
- Los registros del fixture se normalizan a `active` para mantener el mismo contrato que el DTO público.
- `src/data/locales.json` se utiliza como fixture público en la Fase 2 de sucursales.
- Carta, banners e información institucional continúan estáticos porque no existe un endpoint real equivalente verificado.

## Fuera de esta fase

Carrito, checkout, pedidos, pagos, WhatsApp, backoffice y consumo de DTOs futuros sin controlador real.
