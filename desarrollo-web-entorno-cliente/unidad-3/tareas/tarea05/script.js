// Función #1 - Añadir misiones a lista
$("#agregar-tarea").click(function() {
    const new_task = $("#nueva-tarea").val()
    $("#lista-tareas").append(getTask(new_task));   
});

function getTask(name) {
    html = `
    <li>
        <p>${name}</p>
        <div style="display: flex;">
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        </div>
    </li>
    `
    return html
}