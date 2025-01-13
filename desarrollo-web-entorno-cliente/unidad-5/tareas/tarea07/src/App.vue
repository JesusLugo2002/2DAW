<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useChampionStore } from './stores/ChampionStore'
import Champion from './components/Champion.vue'

const champions = ref([])
const currentChampion = useChampionStore()

async function fetchChampionsData() {
  try {
    const response = await fetch('./champions.json')
    if (!response.ok) {
      throw new Error('Error with network response fetching data')
    }
    champions.value = await response.json()
  } catch (error) {
    console.error('Error obteniendo datos de champions.json: ', error)
  }
}

function selectChampion(champ: any) {
  currentChampion.name = champ.name
}

onMounted(() => {
  fetchChampionsData()
})
</script>

<template>
  <div class="container">
    <div id="champion-selector" class="row row-cols-5">
      <Champion
        v-for="(champ, index) in champions"
        :champ="champ"
        :index="index"
        @click="selectChampion(champ)"
      />
    </div>
  </div>
</template>

<style scoped>
#champion-selector {
  position: absolute;
  width: 60vw;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
