# Comparación de carta y catálogo temporal

Fuentes revisadas:

- `public/images/menu/carta.jpg`
- `src/data/pizzas.json`

## Resultado de pizzas

La carta y el fixture contienen las mismas **19 pizzas**. No hay una pizza adicional que deba agregarse por nombre o por su tabla de precios.

`pizzas.json` incluye: De la Casa, Calabresa, Jamón, Tocino, Chorizo, Mixta, Mixta Especial, 4 Estaciones, Hawaiana, Pepperoni, Champiñones, Napolitana, Verduras, Aceituna, Pollo, D' Filete, Al Gusto, Frutas y Calzone.

Los vectores de precios coinciden con la carta. Los valores `0` del fixture representan presentaciones no ofertadas y no deben mostrarse como precio `S/ 0.00` cuando se refine la interfaz.

`Pizza Bombón` aparece como texto de presentación de la carta, no como una pizza independiente.

## Productos complementarios incorporados como fixtures

| Categoría sugerida | Producto de la carta | Precio visible |
| --- | --- | --- |
| Lasaña | De Carne | S/ 25.00 |
| Lasaña | Vegetariana | S/ 24.00 |
| Aperitivo | Pan al Ajo | S/ 1.00 |
| Aperitivo | Pan Napolitana Especial | S/ 3.00 |
| Bebida | Vino Borgoña | S/ 20.00 |
| Bebida | Vino Mistela | S/ 20.00 |
| Bebida | Vino de Higo | S/ 20.00 |
| Bebida | Vino Perfecto Amor | S/ 22.00 |
| Bebida | Vino Rosé | S/ 20.00 |
| Bebida | Sangría | S/ 20.00 |

Los productos se han añadido en los fixtures independientes `src/data/lasagnas.json`, `src/data/aperitivos.json` y `src/data/bebidas.json`. Ya se muestran en el catálogo público, con filtros por categoría.

Cada producto del catálogo cuenta con una fotografía original en `public/images/catalog/`. Los activos se exportaron en 1440 × 960 px, formato horizontal 3:2, y las tarjetas preservan esa proporción de manera responsive.

Para bebidas, los vinos se registran con presentación `Botella`, tal como fue indicado, y Sangría con presentación `Jarra`. No se crea un precio ficticio para la presentación no publicada.

## Ajustes de ingredientes y ortografía

El fixture de pizzas se corrigió contra la carta: se retiraron ingredientes no publicados de De la Casa, Calabresa y Hawaiana; se corrigieron Salsa de tomate, pimiento, plátano y los ingredientes de Verduras, Aceituna y Al Gusto.

También se normalizaron nombres en la UI: `Pepperoni` y `Calzone`. La carta impresa utiliza las variantes `Peperoni` y `Calsone`.

## Validaciones pendientes antes de actualizar datos

- Confirmar presentaciones disponibles cuando hoy se usa `0` como marcador de ausencia.
- Definir imágenes propias para lasañas, aperitivos y bebidas antes de mostrarlos en el catálogo público.
