<script setup lang="ts">
const props = defineProps(['championStore'])
</script>

<template>
  <p class="text-center h3">
    The selected champion is
    <span class="text-success">{{ championStore.currentChampion.name }}</span>
  </p>
  <div class="row d-flex justify-content-around">
    <button class="col-4 btn btn-danger fw-bold" @click="championStore.decreaseExp">
      - Experience
    </button>
    <button class="col-4 btn btn-primary fw-bold" @click="championStore.increaseExp">
      + Experience
    </button>
  </div>
</template>
