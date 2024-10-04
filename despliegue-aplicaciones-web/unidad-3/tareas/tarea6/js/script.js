// Añadiendo interacción al apartado de selección de operación
const sqlInsertRadio = document.getElementById("sql-insert");
const sqlUpdateRadio = document.getElementById("sql-update");
const sqlDeleteRadio = document.getElementById("sql-delete");
const sqlInputContainer = document.getElementById("sql-query-input");

sqlInsertRadio.addEventListener('change', () => {
    sqlInputContainer.innerHTML = `
    <h4>Datos a insertar:</h4>
    Nombre: <input type="text" id="sql-input-name" required><br>
    Correo: <input type="text" id="sql-input-email" required><br>
    `;
});

sqlUpdateRadio.addEventListener('change', () => {
    sqlInputContainer.innerHTML = `
    <h4>Datos a actualizar:</h4>
    ID de registro: <input type="number" id="sql-input-id" min="0" required><br>
    Nombre: <input type="text" id="sql-input-name" required><br>
    Correo: <input type="text" id="sql-input-email" required><br>
    `;
});

sqlDeleteRadio.addEventListener('change', () => {
    sqlInputContainer.innerHTML = `
    <h4>Registro a eliminar:</h4>
    ID de registro: <input type="number" id="sql-input-id" min="0" required><br>
    `;
});
