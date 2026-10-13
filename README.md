# El Galpón — Sitio web de la cervecería

Sitio web multipágina de **El Galpón**, una cervecería en Palermo (C.A.B.A.) que nació en un asado entre amigas. Presenta las cervezas, las comidas y bebidas, los eventos, los espacios del local y los datos de contacto.

Proyecto desarrollado como parte del curso de Desarrollo Web de Coderhouse. Fue creciendo a lo largo de las clases: HTML y CSS, Bootstrap, arquitectura SCSS, animaciones y diseño responsive, y por último optimización de **SEO on-page y accesibilidad**.

## Páginas

| Página | Archivo | Contenido |
| --- | --- | --- |
| Inicio | `index.html` | Carrusel de promociones, cervezas, comidas y bebidas sin alcohol |
| Galería | `pages/galeria.html` | Las cervezas de El Galpón, con estilo y graduación alcohólica |
| Nosotras | `pages/nosotras.html` | La historia del proyecto |
| Eventos | `pages/eventos.html` | Próximos eventos y espacios del local (jardín, patio cubierto y salón) |
| Contacto | `pages/contacto.html` | Formulario de contacto, dirección y mapa |

## Tecnologías

- **HTML5** semántico
- **CSS3** con **Sass (SCSS)**, organizado en parciales
- **Bootstrap 5.3.8** (barra de navegación y carrusel), cargado por CDN
- **AOS 2.3.4** para las animaciones al hacer scroll, cargado por CDN
- **JavaScript** mínimo (`js/main.js`) para iniciar AOS
- **Google Fonts**: Lobster y Roboto

## Estructura del proyecto

```
├── index.html
├── pages/            # galeria, nosotras, eventos y contacto
├── css/              # style.css (generado por Sass) y su mapa
├── scss/
│   ├── main.scss     # archivo de entrada: importa todos los parciales con @use
│   ├── utilities/    # variables, mixins y extend
│   ├── base/         # estilos base y tipografía
│   ├── layout/       # header, nav, main, galería y footer
│   └── components/   # tarjetas, formularios, botones y carrusel
├── js/main.js
├── img/              # imágenes con nombres descriptivos
└── package.json
```

## Cómo correrlo

No hace falta instalar nada para ver el sitio: abrí `index.html` en el navegador (necesita conexión a internet para cargar Bootstrap, AOS y las fuentes).

Para modificar los estilos hay que tener [Node.js](https://nodejs.org) instalado y compilar los SCSS:

```bash
npm install        # instala Sass
npm run sass       # compila scss/main.scss a css/style.css
npm run watch      # recompila automáticamente al guardar cambios
```

No se edita `css/style.css` a mano: se genera a partir de los archivos de `scss/`.

## SEO on-page

- Cada página tiene un `<title>` único y una `meta description` acorde a su contenido.
- Las palabras clave (cervecería, cerveza artesanal, Palermo, eventos, etc.) están en los títulos, el `<h1>`, los `<h2>` y los textos, sin repeticiones forzadas.
- Un solo `<h1>` por página y jerarquía de encabezados ordenada (`h1` → `h2`).
- Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `blockquote`, `address` y `footer`.
- Nombres de archivo descriptivos en las imágenes, por ejemplo `cerveza-black-ipa.jpg` o `promo-miercoles-2x1-ipa.jpg`.

## Accesibilidad

- Todas las imágenes tienen un texto `alt` que describe lo que realmente se ve.
- Colores con contraste suficiente (WCAG AA) entre texto y fondo.
- Menú de navegación con `aria-label` y `aria-current="page"` en la página actual.
- Botones del carrusel con textos en español para lectores de pantalla.
- Mapa con `title` y formulario con etiquetas asociadas a cada campo.
- Enlaces externos con `rel="noopener noreferrer"`.
- Las animaciones se desactivan cuando el usuario tiene activada la opción "reducir movimiento" del sistema.
- Verificado con [axe-core](https://github.com/dequelabs/axe-core): 0 problemas en las 5 páginas.

## Diseño responsive

Se diseñó con enfoque *mobile first*, con puntos de corte en 768 px (tablet) y 1024 px (escritorio).

## Autora

Carolina Salgado — [@mcarolinasalgado-3](https://github.com/mcarolinasalgado-3)
