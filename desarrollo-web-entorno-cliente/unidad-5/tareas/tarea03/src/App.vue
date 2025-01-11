<script setup>
import { ref, reactive, computed } from 'vue';

// Lista reactiva de tareas
const tasks = ref([])
const filteredTasks = ref(tasks.value)

// Agregar una nueva tarea
const addTask = () => {
  const newTaskName = document.getElementById('task-name');
  const newTaskDeadline = document.getElementById('task-deadline');

  if (newTaskName.value.trim() && newTaskDeadline.value) {
    const newTask = reactive({
      name: newTaskName.value,
      deadline: newTaskDeadline.value,
      completed: false,
    })
    tasks.value.push(newTask);
    newTaskName.value = '';
    newTaskDeadline.value = '';
  }
};

const toggleFilter = (filter) => {
  console.log(filter)
  switch (filter) {
    case 'completed':
      filteredTasks.value = tasks.value.filter((task) => task.completed)
      break;
    case 'pending':
      filteredTasks.value = tasks.value.filter((task) => !task.completed)
      break;
    case 'all':
      filteredTasks.value = tasks.value
      break;
    default:
      break;
  }
}

// Cambiar el estado de completado de una tarea
const toggleComplete = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

// Eliminar una tarea de la lista
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// Contar tareas pendientes
const pendingTasksCount = computed(() => tasks.value.filter((task) => !task.completed).length);
</script>

<template>
  <h1>Lista de Tareas</h1>
  <button @click="toggleFilter('all')">Todas las tareas</button>
  <button @click="toggleFilter('pending')">Tareas pendientes</button>
  <button @click="toggleFilter('completed')">Tareas completadas</button>

  <form @submit.prevent="addTask">
    <input id="task-name" type="text" placeholder="Nombre de la tarea" required/>
    <input id="task-deadline" type="date" required/>
    <input value="Crear tarea" type="submit"/>
  </form>

  <ul>
    <li v-for="(task, index) in filteredTasks">
      <span :class="{ completed: task.completed }">{{ task.name }} - Fecha límite: {{ task.deadline }}</span>
      <button @click="toggleComplete(index)">
        {{ task.completed ? 'Desmarcar' : 'Completar' }}
      </button>
      <button @click="deleteTask(index)">Eliminar</button>
    </li>
  </ul>

  <p>Total de tareas pendientes: {{ pendingTasksCount }}</p>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>