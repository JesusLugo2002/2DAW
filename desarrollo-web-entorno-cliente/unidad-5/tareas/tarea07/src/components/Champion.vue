<script setup lang="ts">
const props = defineProps(['champ', 'index'])
</script>

<template>
  <div :id="'champion-' + index" class="card">
    <img :src="champ.image" class="card-img-top" :alt="champ.name" />
    <div class="card-body">
      <h5 class="card-title text-center">{{ champ.name }} Lvl. {{ champ.lvl }}</h5>
      <p class="card-text">
        <div class="row">
            <div class="col text-center">Vida: {{ champ.hp }}</div>
            <div class="col text-center">Maná: {{ champ.mp }}</div>
        </div>
        <div class="row mt-3">
            Exp: {{ champ.exp }}
        </div>
        <div class="row">
            Power: {{ champ.power }}
        </div>
      </p>
    </div>
  </div>
</template>
