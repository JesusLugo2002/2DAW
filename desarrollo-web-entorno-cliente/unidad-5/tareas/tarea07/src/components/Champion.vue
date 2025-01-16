<script setup lang="ts">
const props = defineProps(['champ', 'index'])
</script>

<template>
  <div :id="'champion-' + index" class="card">
    <img :src="champ.image" class="card-img-top" :alt="champ.name" />
    <div class="card-body">
      <h5 class="card-title text-center">{{ champ.name }} Lvl. {{ champ.lvl }}</h5>
      <div class="card-text">
        <div class="row">
          <div class="col text-center bg-danger fw-bold text-white">HP: {{ champ.hp }}</div>
          <div class="col text-center fw-bold text-white bg-primary">MP: {{ champ.mp }}</div>
        </div>
        <div class="row mt-3 fw-bold text-white bg-success px-3">Exp: {{ champ.exp }}</div>
        <div class="row fw-bold bg-warning px-3">Power: {{ champ.power }}</div>
      </div>
    </div>
  </div>
</template>
