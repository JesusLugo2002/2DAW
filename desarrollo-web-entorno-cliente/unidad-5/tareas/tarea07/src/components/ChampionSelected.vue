<script setup lang="ts">
const props = defineProps(['championStore'])
</script>

<template>
  <div class="d-flex justify-content-center flex-column align-items-center">
    <div class="card" style="width: 18rem">
      <img
        :src="championStore.currentChampion.image"
        class="card-img-top"
        :alt="championStore.currentChampion.name"
      />
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ championStore.currentChampion.name }} Lvl. {{ championStore.stats.lvl }}
        </h5>
        <div class="card-text">
          <div class="row">
            <div class="col text-center bg-danger text-white fw-bold">HP: {{ championStore.stats.hp }}</div>
            <div class="col text-center bg-primary text-white fw-bold">MP: {{ championStore.stats.mp }}</div>
          </div>
          <div class="row mt-3 bg-success text-white fw-bold px-3">Exp: {{ championStore.experience }}/100</div>
          <div class="row bg-warning fw-bold px-3">Power: {{ championStore.power }}</div>
        </div>
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
