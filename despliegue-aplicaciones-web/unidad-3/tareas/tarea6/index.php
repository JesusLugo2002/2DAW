<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Form</title>
</head>
<body>
    <h1>Formulario de operación SQL</h1>
    <h2>Tabla del trabajo</h2>
    <div id="result-table"></div>
   <form action="get.php" method="post">
    <h3>¿Qué operación desea realizar?:</h3>
    <div id="sql-query-selector">
        <input type="radio" name="sql-query-type" id="sql-insert"> Insertar datos <br>
        <input type="radio" name="sql-query-type" id="sql-update"> Actualizar datos <br>
        <input type="radio" name="sql-query-type" id="sql-delete"> Eliminar datos <br>
    </div>
    <div id="sql-query-input"></div><br>
    <input type="submit" value="Enviar">
   </form>
   <script type="module" src="js/script.js"></script>
</body>
</html>