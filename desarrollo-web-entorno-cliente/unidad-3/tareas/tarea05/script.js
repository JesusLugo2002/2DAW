$(document).ready(function() {
    // Función para agregar tareas
    $("#agregar-tarea").click(function() {
        const new_task = $("#nueva-tarea").val()
        if (new_task != "") {
            $("#lista-tareas").append(getTask(new_task));   
            bindEvents()
        } else {
            alert("Nombre de la misión requerida!")
        }
    });

    // Función que retorna una nueva tarea a raiz de su nombre
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

    // Funcionalidad para los botones de Edit y Delete
    function bindEvents() {
        $(".delete-button").click(function() {
            $(this).parents("li").remove();
        });

        $(".edit-button").click(function() {
            const item = $(this).parents("li")
            $(".selected-edit").removeClass("selected-edit")
            $(item).addClass("selected-edit")
            toggleModal()
        });
    }

    // Funcionalidad del modal
    function toggleModal() {
        $("#blur-background").show();
        $("#toggle-modal").show();
        $("#toggle-modal #confirm-button").click(function() {
            if ($("#toggle-modal input").val() != "") {
                $(".selected-edit").find("p").text($("#toggle-modal input").val());
                $("#toggle-modal").hide();
                $("#blur-background").hide();
            } else {
                alert("Nombre de misión requerida!")
            }
        });
        $("#toggle-modal #cancel-button").click(function() {
            $("#toggle-modal").hide();
            $("#blur-background").hide();
        });
    }

    // Función "borrar todas las tareas"
    $("#limpiar-tareas").click(function() {
        $("#lista-tareas").empty()
    });
});
