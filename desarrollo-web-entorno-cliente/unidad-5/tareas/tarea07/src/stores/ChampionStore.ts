import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

export const useChampionStore = defineStore('champion', () => {
  const currentChampion = reactive({})
  const experience = ref(0)

  const stats = reactive({
    hp: 0,
    mp: 0,
    lvl: 1,
  })

  function increaseExp(value: number) {
    if (currentChampion) {
      experience.value += value
    }
  }

  function decreaseExp(value: number) {
    experience.value -= value
  }

  const power = computed(() => {
    return (stats.hp + stats.mp) * stats.lvl
  })

  watch(experience, (newExperience) => {
    if (newExperience < 0) {
      alert('The minimum experience points is zero!')
      experience.value = 0
    }
    if (newExperience >= 100) {
      alert('The champion leveled up!')
      stats.lvl++
      experience.value = 0
    }
  })

  return { currentChampion, experience, stats, increaseExp, decreaseExp, power }
})
