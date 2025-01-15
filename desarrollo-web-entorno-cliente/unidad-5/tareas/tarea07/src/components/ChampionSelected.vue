<script setup lang="ts">
import { useChampionStore } from '@/stores/ChampionStore';

const currentChampion = useChampionStore()

</script>

<template>
    <p class="text-center h3">The selected champion is <span class="text-success">{{ currentChampion.name }}</span></p>
    <div class="row d-flex justify-content-around">
        <button class="col-4 btn btn-danger fw-bold" @click="currentChampion.decreaseExp">- Experience</button>
        <button class="col-4 btn btn-primary fw-bold" @click="currentChampion.increaseExp">+ Experience</button>
    </div>
</template>