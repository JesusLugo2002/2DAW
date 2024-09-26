<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET and POST</title>
</head>
<body>
    <h3>Formulario con método GET</h3>
    <form action="get.php" method="GET">
        Nombre: <input type="text" name="name"><br>
        Edad: <input type="number" name="age"><br>
        <input type="submit" value="Enviar">
    </form>

    <h3>Formulario con método POST</h3>
    <form action="post.php" method="POST">
        Nombre: <input type="text" name="name"><br>
        Contraseña: <input type="password" name="password"><br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>