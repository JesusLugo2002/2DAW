# Trabajando con Git y Markdown 3

#### Creo un directorio de trabajo llamado /bloggalpon/ en el directorio del usuario.

```sh
mkdir bloggalpon
```

#### Inicializar el repositorio vacío.

```sh
cd bloggalpon/ && git init
```

#### Crear el archivo index.html

```sh
touch index.html
```

#### Añadir la estructura básica de una web.

<div align=center>
    <img src="basic-structure.png">
</div>

#### Crear un commit indicando que se crea el esqueleto básico del index.html

```sh
git add . && git commit -m "Se crea el esqueleto básico del index.html"
```

#### Añadir el contenido al head, entre <head> y </head>.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Galpón</title>
</head>
```

#### Crear un commit indicando que se añade la cabecera del index.html

```sh
git add . && git commit -m "Se añade cabecera al index.html"
```

#### Añadir el contenido al body, entre <body> y </body>

```html
<body>
    <h1>Hola Mundo</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuNGTey9zT1Rw5RSJVwBB3RIJ-9q8LyjL5Q&s" alt="img">
</body>
```

#### Crear un commit indicando que se añade la estructura básica del body.

```sh
git add . && git commit -m "Se añade body al index.html"
```

#### Añadir el contenido de section, entre <section> y </section>

```html
<body>
    <h1>Hola Mundo</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuNGTey9zT1Rw5RSJVwBB3RIJ-9q8LyjL5Q&s" alt="img">
    <section>
        <h2>Posts</h2>
    </section>
</body>
```

#### Crear un commit indicando que se añade toda la estructura de la zona de posts.

```sh
git add . && git commit -m "Se añade estructura de la zona de posts"
```

#### Crear un archivo style.css.

```sh
mkdir css && touch css/style.css
``` 

#### Añadir la siguiente información.
#### Crear un commit indicando que se añaden las CSS de html y de body.
#### Añadir la siguiente información.
#### Crear un commit indicando que se añaden las CSS de varios elementos HTML5: header, section, article, aside y footer.
#### Añadir en el directorio raíz de proyecto el logotipo que aparecerá en la barra lateral izquierda: logo.png
#### Crear un commit indicando que se añade el logotipo de Galpón.
#### Añadir la siguiente información.
#### Crear un commit indicando que se añaden las CSS de section.
#### Añadir la siguiente información.
#### Crear un commit indicando que se añaden las CSS del footer.
#### Añadir la siguiente información.
#### Crear un commit indicando que se añaden las CSS del H1 y de los enlaces.
#### Crear una etiqueta de v1.0
#### Crear una rama “desarrollo”. En esta rama de desarrollo vamos a realizar varias tareas:

#### Crear un directorio de images y mover allí el logotipo logo.png.
#### Crear un commit indicando que se mueve el logotipo a la carpeta images.
#### Crear un directorio de CSS y mover allí las CSS style.css.
#### Crear un commit indicando que se mueve la CSS a la carpeta CSS.
#### Cambiar las referencias a la CSS en el index.htm y al logotipo logo.png en la CSS.
#### Crear un commit indicando que se cambian las referencias a las CSS y a las imágenes al reorganizarlas en directorios.

#### Crear una rama “bugfix” a partir de la “master” para resolver una serie de fallos.
 
#### Quitar los comentarios en las CSS de los dos punteados (empiezan por //border ).
#### Crear un commit indicando que introducen los punteados en la barra derecha y en el footer.
#### Introducir como título “Galpon”.
#### Crear un commit indicando que se introduce el título en la página.
#### Cambiar 2012 por 2014 en el footer. Quitar (c).
#### Crear un commit indicando que se realizan pequeños ajustes en el footer.
#### Crear una etiqueta de v1.1
#### Llevar estos cambios a la rama “master”.
#### Borrar la rama “bugfix”.
#### Llevar los cambios de la rama “desarrollo” a la rama “master”. Resolver los conflictos, si existen.
#### Crear una etiqueta de v1.2