// Función #1 - Añadir misiones a lista
$("#agregar-tarea").click(function() {
    const new_task = $("#nueva-tarea").val()
    $("#lista-tareas").append(`<li>${new_task}</li>`);   
});