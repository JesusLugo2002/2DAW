<script setup lang="ts">
const props = defineProps(['championStore'])
</script>

<template>
  <div class="card">
    <img :src="champ.image" class="card-img-top" :alt="champ.name" />
    <div class="card-body">
      <h5 class="card-title text-center">{{ champ.name }} Lvl. {{ champ.lvl }}</h5>
      <div class="card-text">
        <div class="row">
          <div class="col text-center">Vida: {{ champ.hp }}</div>
          <div class="col text-center">Maná: {{ champ.mp }}</div>
        </div>
        <div class="row mt-3">Exp: {{ champ.exp }}</div>
        <div class="row">Power: {{ champ.power }}</div>
      </div>
    </div>
  </div>

  <p class="text-center h3">
    The selected champion is
    <span class="text-success">{{ championStore.currentChampion.name }}</span>
  </p>
  <div class="row d-flex justify-content-around">
    <button class="col-4 btn btn-danger fw-bold" @click="championStore.decreaseExp(10)">
      - Experience
    </button>
    <button class="col-4 btn btn-primary fw-bold" @click="championStore.increaseExp(10)">
      + Experience
    </button>
  </div>
</template>
