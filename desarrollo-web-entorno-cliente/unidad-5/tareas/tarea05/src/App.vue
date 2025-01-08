<script setup>
  import { reactive } from 'vue';
  import ClueList from './components/ClueList.vue';
  import CrimeScene from './components/CrimeScene.vue';

  const clues = reactive([
    {name: "Huellas", priority: "90"},
    {name: "Vaso roto", priority: "30"},
    {name: "Sobre sospechoso", priority: "80"}
  ])
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <CrimeScene>Descubierto por la hija de la victima que corrió directamente al teléfono para llamar a la policía.</CrimeScene>
        <ClueList :clueList="clues"/>
      </div>
      <div class="col">
        <h1>Interrogatorio</h1>
      </div>
    </div>
  </div>
</template>
