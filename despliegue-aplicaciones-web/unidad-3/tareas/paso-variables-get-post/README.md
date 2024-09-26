# Método de Paso de Variables de formularios. GET y POST

Esta actividad está pensada para prácticar los distintos métodos para pasar información en PHP y HTML; el método __GET__ y el método __POST__.

## Contenido
- [Diferencias entre GET y POST](#diferencias-entre-get-y-post)
        - [¿Cuándo usar GET](#cuándo-usar-get)
        - [¿Cuándo usar POST](#cuándo-usar-post)
- [Envío de información entre ficheros PHP](#envío-de-información-entre-ficheros-php)

## Diferencias entre GET y POST

Ambos métodos sirven para transferir información en formatos de _arrays_ entre ficheros. Estos _arrays_ contienen parejas de clave y valor que contienen los datos como nombres y valores obtenidos de formularios rellenados por el usuario. La principal diferencia entre ambos métodos es la forma en la que se transfiere la información: __con GET transferimos los datos a través de la URL mientras que con POST lo hacemos a través del método HTTP__.

### ¿Cuándo usar GET?

La información enviada con GET es __visible para todos__ a través de la URL, además de que la cantidad de información es limitada a 2000 caracteres. Sin embargo, al aparecer la información en URL, esta puede ser _guardada_ como _bookmark_ y puede resultar útil en muchos casos como en la optimización del SEO. El método GET __NUNCA debería ser usado para información confidencial__ como contraseñas.

### ¿Cuándo usar POST?

La información enviada con POST es __invisible para todos__ y no tiene límites en cuanto a la cantidad de datos; además el método POST a menudo ofrece funcionalidades avanzadas relacionadas con la subida de ficheros externos. Sin embargo, la información como variables no son mostradas en el URL por lo que no pueden ser guardadas como _bookmark_. Este método es el más recomendado para crear formularios por su seguridad.

## Ejemplo con GET

A continuación se mostrará un formulario simple en HTML en el que se pedirá nombre y edad de una persona y se mostraría con PHP posteriormente.

### Formulario en HTML

```html
<html>
        <body>
                <h3>Formulario con método GET</h3>
                <form action="get.php" method="GET">
                        Nombre: <input type="text" name="name"><br>
                        Edad: <input type="number" name="age"><br>
                        <input type="submit" value="Enviar">
                </form>
        </body>
</html>
```

### Código procesador en PHP

```php
<html>
        <body>
                Bienvenido <?php echo $_GET["name"]; ?><br>
                Tienes <?php echo $_GET["age"]; ?> años.
        </body>
</html>
```

## Ejemplo con POST

## Envío de información entre ficheros PHP