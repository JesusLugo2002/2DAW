# Actividad 2. WCAG y WAI-ARIA

# Contenidos

- [Ejercicio 1. Imagen sin texto alternativo](#ejercicio-1-imagen-sin-texto-alternativo)
  - [Solución](#solución)
- [Ejercicio 2. Formulario sin etiquetas y mensajes de error](#ejercicio-2-formulario-sin-etiquetas-y-mensajes-de-error)
  - [Solución](#solución-1)
- [Ejercicio 3. Botón que no es accesible para lectores de pantalla](#ejercicio-3-botón-que-no-es-accesible-para-lectores-de-pantalla)
  - [Solución](#solución-2)
- [Ejercicio 4. Navegación sin estructura semántica](#ejercicio-4-navegación-sin-estructura-semántica)
  - [Solución](#solución-3)
- [Ejercicio 5. Tabla sin encabezados](#ejercicio-5-tabla-sin-encabezados)
  - [Solución](#solución-4)
- [Ejercicio 6. Contenido dinámico sin notificación](#ejercicio-6-contenido-dinámico-sin-notificación)
  - [Solución](#solución-5)
- [Ejercicio 7. Contraste bajo](#ejercicio-7-contraste-bajo)
  - [Solución](#solución-6)
- [Ejercicio 8. Lista desplegable sin indicar su estado](#ejercicio-8-lista-desplegable-sin-indicar-su-estado)
  - [Solución](#solución-7)
- [Ejercicio 9. Página con contenido multimedia](#ejercicio-9-página-con-contenido-multimedia)
  - [Solución](#solución-8)
- [Ejercicio 10. Página dinámica sin accesibilidad](#ejercicio-10-página-dinámica-sin-accesibilidad)
  - [Solución](#solución-9)
- [Ejercicio 11. Página web de un producto](#ejercicio-11-página-web-de-un-producto)
  - [Solución](#solución-10)
- [Ejercicio 12. Blog con múltiples secciones](#ejercicio-12-blog-con-múltiples-secciones)
  - [Solución](#solución-11)
- [Ejercicio 13. Formulario de inscripción](#ejercicio-13-formulario-de-inscripción)
- [Ejercicio 14. Tabla de datos compleja](#ejercicio-14-tabla-de-datos-compleja)
- [Ejercicio 15. Menú interactivo](#ejercicio-15-menú-interactivo)


## Ejercicio 1. Imagen sin texto alternativo
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Galería de Fotos</title>
  </head>
  <body>
    <h1>Galería de Fotos</h1>
    <img src="playa.jpg">
    <img src="montana.jpg">
  </body>
</html>
```

### Solución

La solución consiste en añadir el atributo `alt` a las imágenes para añadir texto alternativo, el cual se mostrará si la imagen no llega a mostrarse.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Galería de Fotos</title>
  </head>
  <body>
    <h1>Galería de Fotos</h1>
    <img src="playa.jpg" alt="playa">
    <img src="montana.jpg" alt="montaña">
  </body>
</html>
```

## Ejercicio 2. Formulario sin etiquetas y mensajes de error
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Registro</title>
</head>
<body>
  <h1>Formulario de Registro</h1>
  <form>
    <input type="text" placeholder="Nombre">
    <input type="email" placeholder="Correo electrónico">
    <button>Enviar</button>
  </form>
</body>
</html>
```

### Solución

Primeramente hay que añadir etiquetas asignando `<label>` a cada `<input>` mediante atributos `id`, y para el control de errores, bastaría con añadir un `<span>` con el mensaje de error que se relacionaría con el `<input type="email">` mediante un atributo `aria-describedby`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Registro</title>
</head>
<body>
  <h1>Formulario de Registro</h1>
  <form>
    <label for="name">Nombre:</label>
    <input type="text" id="name" placeholder="Nombre">
    <label for="email">Nombre:</label>
    <input type="email" id="email" placeholder="Correo electrónico" aria-describedby="email-help">
    <span id="email-help">Inserte una dirección de correo válida (example@example.com)</span>
    <button>Enviar</button>
  </form>
</body>
</html>
```

## Ejercicio 3. Botón que no es accesible para lectores de pantalla
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Botón</title>
</head>
<body>
  <h1>Interacción</h1>
  <div onclick="alert('¡Botón presionado!')" style="border: 1px solid; padding: 10px; width: 100px; text-align: center; cursor: pointer;">
    Presionar
  </div>
</body>
</html>
```

### Solución

Para que los lectores de pantalla accedan al botón, es necesario un atributo `aria-label` que lo identifique.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Botón</title>
</head>
<body>
  <h1>Interacción</h1>
  <div onclick="alert('¡Botón presionado!')" style="border: 1px solid; padding: 10px; width: 100px; text-align: center; cursor: pointer;" aria-label="Presionar botón" role="button">
    Presionar
  </div>
</body>
</html>
```

## Ejercicio 4. Navegación sin estructura semántica
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Navegación</title>
</head>
<body>
  <div>
    <span>Inicio</span>
    <span>Servicios</span>
    <span>Contacto</span>
  </div>
</body>
</html>
```

### Solución

Implementar etiquetas semánticas como `<header>` y `<nav>` así como también corregir la estructura de la lista de opciones, cambiando la etiqueta `<span>` y añadiendo atributos como `role="navigation"` y `aria-label`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Navegación</title>
</head>
<body>
  <header>
    <nav role="navigation" aria-label="Menú de navegación">
      <a href="...">Inicio</a>
      <a href="...">Servicios</a>
      <a href="...">Contacto</a>
    </nav>
  </header>
</body>
</html>
```

## Ejercicio 5. Tabla sin encabezados
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Tabla</title>
</head>
<body>
  <h1>Lista de Precios</h1>
  <table>
    <tr>
      <td>Producto 1</td>
      <td>10 USD</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>20 USD</td>
    </tr>
  </table>
</body>
</html>
```

### Solución

Añadir encabezados con una nueva fila (`<tr>`) y destacando las columnas con `<th>` en vez de `<td>`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Tabla</title>
</head>
<body>
  <h1>Lista de Precios</h1>
  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Producto 1</td>
        <td>10 USD</td>
      </tr>
      <tr>
        <td>Producto 2</td>
        <td>20 USD</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

## Ejercicio 6. Contenido dinámico sin notificación
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarNotificacion() {
      document.getElementById('notificacion').innerText = 'Cambio guardado';
    }
  </script>
</head>
<body>
  <button onclick="mostrarNotificacion()">Guardar</button>
  <div id="notificacion"></div>
</body>
</html>
```

### Solución

Indicar que el contenido de `#notificacion` será dinámico con el atributo `aria-live="polite"`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarNotificacion() {
      document.getElementById('notificacion').innerText = 'Cambio guardado';
    }
  </script>
</head>
<body>
  <button onclick="mostrarNotificacion()">Guardar</button>
  <div aria-live="polite" id="notificacion"></div>
</body>
</html>
```

## Ejercicio 7. Contraste bajo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Texto</title>
  <style>
    body {
      background-color: #f0f0f0;
      color: #a0a0a0;
    }
  </style>
</head>
<body>
  <h1>Texto difícil de leer</h1>
  <p>Este texto tiene un contraste muy bajo con el fondo.</p>
</body>
</html>
```

### Solución

Cambiar el color del texto para que haya un mejor contraste con el fondo: el color se puede obtener mediante la utilización de herramientas externas. En este caso, se hizo uso de [Contrast Checker](https://webaim.org/resources/contrastchecker/) y dio el siguiente resultado.

<div align=center>
  <img src="./img/contrast-checker.png" alt="Contrast Checker bad result"/>
</div>

En este caso, se cambia el color del texto a uno aceptado por los estándares.

<div align=center>
  <img src="./img/contrast-checker-good.png" alt="Contrast Checker good result"/>
</div>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Texto</title>
  <style>
    body {
      background-color: #f0f0f0;
      color: #1A23D1;
    }
  </style>
</head>
<body>
  <h1>Texto difícil de leer</h1>
  <p>Este texto tiene un contraste muy bajo con el fondo.</p>
</body>
</html>
```

## Ejercicio 8. Lista desplegable sin indicar su estado
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú</h1>
  <div class="menu">
    Opciones
    <div class="submenu">
      <p>Opción 1</p>
      <p>Opción 2</p>
    </div>
  </div>
</body>
</html>
```

### Solución

Utilizar el atributo `aria-expanded` para indicar el estado de una lista desplegable.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú</h1>
  <div class="menu">
    Opciones
    <div class="submenu" aria-expanded="false">
      <a href="...">Opción 1</a>
      <a href="...">Opción 2</a>
    </div>
  </div>
</body>
</html>
```

## Ejercicio 9. Página con contenido multimedia
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Video Educativo</title>
</head>
<body>
  <h1>Cómo cocinar pasta</h1>
  <video controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
</html>
```

### Solución

Añadir una opción de subtitulado con una etiqueta `<track>`.
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Video Educativo</title>
</head>
<body>
  <h1>Cómo cocinar pasta</h1>
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español"/>
  </video>
</body>
</html>
```


## Ejercicio 10. Página dinámica sin accesibilidad
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarMensaje() {
      document.getElementById('mensaje').innerText = '¡Nueva notificación!';
    }
  </script>
</head>
<body>
  <h1>Página de Notificaciones</h1>
  <button onclick="mostrarMensaje()">Mostrar Notificación</button>
  <div id="mensaje"></div>
</body>
</html>
```

### Solución 

A este ejemplo se le puede añadir varios atributos ARIA como `aria-pressed` y `aria-live`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarMensaje() {
      document.getElementById('mensaje').innerText = '¡Nueva notificación!';
    }
  </script>
</head>
<body>
  <h1>Página de Notificaciones</h1>
  <button onclick="mostrarMensaje()" aria-pressed="false">Mostrar Notificación</button>
  <div id="mensaje" aria-live="polite"></div>
</body>
</html>
```

## Ejercicio 11. Página web de un producto
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Zapatos Deportivos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .precio {
      font-size: 20px;
      color: red;
    }
    .boton {
      background-color: blue;
      color: white;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div>
    <h1>Zapatos Deportivos</h1>
    <div>
      <img src="zapatos.jpg">
      <p>Los mejores zapatos para correr.</p>
      <p class="precio">Precio: $50</p>
    </div>
    <div class="boton" onclick="alert('Producto añadido al carrito')">Añadir al carrito</div>
  </div>
</body>
</html>
```

### Solución

Aqui hay una serie de errores que se pueden solucionar, como la falta de texto alternativo, la empleabilidad del atributo `role` y la utilización de `aria-label`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Zapatos Deportivos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .precio {
      font-size: 20px;
      color: red;
    }
    .boton {
      background-color: blue;
      color: white;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div>
    <h1>Zapatos Deportivos</h1>
    <div>
      <img src="zapatos.jpg" alt="Zapatos deportivos">
      <p aria-label="Descripción de zapatos">Los mejores zapatos para correr.</p>
      <p aria-label="Precio de zapatos" class="precio">Precio: $50</p>
    </div>
    <div class="boton" onclick="alert('Producto añadido al carrito')" role="button">Añadir al carrito</div>
  </div>
</body>
</html>
```

## Ejercicio 12. Blog con múltiples secciones
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Mi Blog</title>
</head>
<body>
  <div>
    <div>
      <span>Inicio</span> | <span>Sobre mí</span> | <span>Contacto</span>
    </div>
    <div>
      <h2>Artículo Reciente</h2>
      <p>Este es el contenido del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#">Leer más</a>
    </div>
    <div>
      <h2>Otro Artículo</h2>
      <p>Contenido del segundo artículo. Lorem ipsum dolor sit amet.</p>
      <a href="#">Leer más</a>
    </div>
  </div>
</body>
</html>
```

### Solución

La utilización de etiquetas semánticas para segmentar la página web como `<main>`, `<nav>` o `<footer>`. También podría mejorarse mucho el menú de navegación y usar `<article>` para segmentar los artículos.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Mi Blog</title>
</head>
<body>
  <header>
    <nav role="navigation" aria-label="Menú principal">
      <a href="...">Inicio</a> | <a href="...">Sobre mí</a> | <a href="...">Contacto</a>
    </nav>
  </header>
  <main>
    <h1>Artículos</h1>
    <article>
      <h2>Artículo Reciente</h2>
      <p>Este es el contenido del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#">Leer más</a>
    </article>
    <article>
      <h2>Otro Artículo</h2>
      <p>Contenido del segundo artículo. Lorem ipsum dolor sit amet.</p>
      <a href="#">Leer más</a>
    </article>
  </main>
</body>
</html>
```

## Ejercicio 13. Formulario de inscripción 
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Formulario de Inscripción</title>
</head>
<body>
  <h1>Formulario de Inscripción</h1>
  <form>
    <div>
      <input type="text" placeholder="Nombre completo">
    </div>
    <div>
      <input type="email" placeholder="Correo electrónico">
    </div>
    <div>
      <select>
        <option>Seleccionar país</option>
        <option>México</option>
        <option>España</option>
        <option>Colombia</option>
      </select>
    </div>
    <div>
      <button>Enviar</button>
    </div>
  </form>
</body>
</html>
```

## Ejercicio 14. Tabla de datos compleja
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Reporte de Ventas</title>
</head>
<body>
  <h1>Reporte Mensual de Ventas</h1>
  <table border="1">
    <tr>
      <td>Producto</td>
      <td>Enero</td>
      <td>Febrero</td>
      <td>Marzo</td>
    </tr>
    <tr>
      <td>Zapatos</td>
      <td>100</td>
      <td>150</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Camisas</td>
      <td>200</td>
      <td>250</td>
      <td>300</td>
    </tr>
  </table>
</body>
</html>
```

## Ejercicio 15. Menú interactivo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú Interactivo</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú de Opciones</h1>
  <div class="menu">
    <p>Opciones</p>
    <div class="submenu">
      <p>Opción 1</p>
      <p>Opción 2</p>
      <p>Opción 3</p>
    </div>
  </div>
</body>
</html>
```
