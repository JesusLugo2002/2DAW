# Método de Paso de Variables de formularios. GET y POST

Esta actividad está pensada para prácticar los distintos métodos para pasar información en PHP y HTML; el método __GET__ y el método __POST__.

## Contenido
- [Diferencias entre GET y POST](#diferencias-entre-get-y-post)
- [Ejemplo realizado en clase](#ejemplo-realizado-en-clase)
        - [Creación del formulario](#creación-del-formulario)
        - [Creación del get_post.php](#creación-del-get_postphp)
- [Envío de información entre ficheros PHP](#envío-de-información-entre-ficheros-php)

## Diferencias entre GET y POST

La principal diferencia entre ambos métodos es el destinatario en la transmisión de datos: __el método GET se usa para recibirlos por parte del servidor, como en consultas, mientras que el método POST se usa para enviarlos, como en formularios de registro__.

## Ejemplo realizado en clase

Mirando el video de Webinar proporcionado, hemos realizado un formulario sencillo para enviar un nombre utilizando el método POST.

### Creación del formulario

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="get_post.php" method="post">
        Nombre: <input type="text" name="user">
        <br>
        <input type="submit" name="Enviar" value="Enviar">
    </form>
</body>
</html>
```

### Creación del get_post.php

```php
<?php
    /* Método GET
    echo "<pre>";
    print_r($_GET);
    echo "<br>";
    print_r($_GET['user']); */

    // Método POST
    echo "<pre>";
    print_r($_POST);
    echo "<br>";
    print_r($_POST['user']);
?>
```

Con este código, hemos creado un formulario funcional en el que podemos pasar información al servidor mediante el fichero PHP.

## Envío de información entre ficheros PHP