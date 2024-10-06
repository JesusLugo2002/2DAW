<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Form</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <div>
            <h1 id="form-title">Formulario de operaciones SQL</h1>
            <label for="sql-query-type">¿Qué operación desea realizar?:</label>
            <select name="sql-query-type" id="sql-query-type">
                <option value="insert">Insertar registro</option>
                <option value="update">Actualizar registro</option>
                <option value="delete">Remover registro</option>
            </select>
            <div id="form-container">
                <form action="sql_post.php" method="post" id="insert-form">
                    <input type="hidden" name="insert">
                    <label for="name">Nombre: </label><input type="text" name="name" value="" required><br>
                    <label for="email">Email: </label><input type="email" name="email" value="" required><br>
                    <input type="submit" value="Enviar">
                </form>
                <form action="sql_post.php" method="post" id="update-form">
                    <input type="hidden" name="update">
                    <label for="uid">ID del registro: </label><input type="number" name="uid" min="0" value="" required><br>
                    <label for="name">Nombre: </label><input type="text" name="name" value=""><br>
                    <label for="email">Email: </label><input type="email" name="email" value=""><br>
                    <input type="submit" value="Enviar">
                </form>
                <form action="sql_post.php" method="post" id="delete-form">
                    <input type="hidden" name="delete">
                    <label for="uid">ID del registro: </label><input type="number" name="uid" min="0" value="" required><br>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>
        <div id="table-container">
            <h1>Tabla resultante</h1>
            <table id="result-table">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fecha de creación de usuario</th>
                </tr>
            </table>
        </div>
    </main>
   <script type="module" src="js/scripts.js" type="text/javascript"></script>
</body>
</html>