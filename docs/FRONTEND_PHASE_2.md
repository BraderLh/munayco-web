# Munayco frontend — Fase 2

## Sucursales públicas con fixture local

Mientras la base de datos y el contrato final de sucursales se actualizan, la pantalla pública usa:

```text
src/data/locales.json
```

El fixture se valida y se adapta a la forma visual del DTO futuro:

- `image` se expone como `imageUrl` para la tarjeta.
- `status: 1` se normaliza a `active: true`.
- Se conservan dirección, coordenadas, teléfonos y horario sin inventar campos.

La página pública no monta formularios ni acciones administrativas. Las funciones protegidas de creación, actualización y eliminación permanecen disponibles en el servicio para una futura pantalla de backoffice, pero no se exponen en esta ruta.

## Estados y accesibilidad

Las sucursales reutilizan los estados de carga, error, vacío y reintento de la Fase 1. Las tarjetas incluyen títulos semánticos, textos alternativos, botones accesibles y un título descriptivo para el mapa.

## Pendiente

Cuando exista información insertada y estable en el backend, se podrá cambiar el loader del listado a `getBranches()` sin modificar la tarjeta ni la página pública.
