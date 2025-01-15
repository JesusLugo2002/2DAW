<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useChampionStore } from './stores/ChampionStore'
import Champion from './components/Champion.vue'
import ChampionSelected from './components/ChampionSelected.vue'

interface Champion {
  name: string
  image: string
  exp: number
  hp: number
  mp: number
  lvl: number
  power: ComputedRef
}

const champions = ref<Champion[]>([])
const currentChampion = useChampionStore()

async function fetchChampionsData() {
  try {
    const response = await fetch('./champions.json')
    if (!response.ok) {
      throw new Error('Error with network response fetching data')
    }
    const data = await response.json()
    data.forEach((champ: Champion) => {
      const newChamp = reactive(champ)
      newChamp.power = computed(() => {
        return (champ.hp + champ.mp) * champ.lvl
      })
      champions.value.push(newChamp)
    });
  } catch (error) {
    console.error('Error obteniendo datos de champions.json: ', error)
  }
}

function selectChampion(champ: any) {
  currentChampion.name = champ.name
  currentChampion.exp = champ.exp
  currentChampion.lvl = champ.lvl
  currentChampion.power = champ.power
}

onMounted(() => {
  fetchChampionsData()
})
</script>

<template>
  <div class="container">
    <div id="champion-selector" class="row row-cols-5 mt-5">
      <Champion
        v-for="(champ, index) in champions"
        :champ="champ"
        :index="index"
        @click="selectChampion(champ)"
      />
    </div>
    <div id="champion-selected" class="row mt-3">
      <ChampionSelected v-if="currentChampion.name != ''" :name="currentChampion.name"/>
      <b class="text-center h3" v-else>Any champion are selected! Please choice one...</b>
    </div>
  </div>
</template>

<style scoped>

</style>
