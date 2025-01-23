<template>
  <h1>{{ title }}</h1>
  <div class="main">
    <div class="creds">
      <div
        style="width: 400px; height: 130px; margin-top: 20px; font-size: larger"
      >
        <span>Nombre: {{ user.name }}</span> <br />
        <span>Edad: {{ user.age }}</span>
      </div>
      <div class="form">
        <label> Introduce el nombre </label>
        <input
          type="text"
          v-model="user.search"
          style="font-size: 20px"
          placeholder="Introduce el nombre"
          @change="getAge"
        />
        <button type="button" @click="getAge">Adivina la edad</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "App Adivina la edad",
  },
});

const user = reactive({ name: "", age: "", search: "" });

const getAge = async () => {
  if (!user.search) return; // Evitar consultas vacías
  try {
    const response = await fetch(`https://api.agify.io/?name=${user.search}`);
    const data = await response.json();
    user.age = data.age || "Desconocida";
    user.name = data.name || "No encontrado";
    user.search = ""; // Limpieza del campo de entrada
  } catch (error) {
    console.error("Error al obtener la edad:", error);
  }
};
</script>
