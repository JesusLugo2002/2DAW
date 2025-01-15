import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

export const useChampionStore = defineStore('champion', {
  state: () => ({
    currentChampion: ref(null),
    experience: ref(0),
    stats: reactive({
      hp: 0,
      mp: 0,
      lvl: 1
    }),
  }),
  getters: {},
  actions: {
    increaseExp(): void {
      this.experience += 10
    },
    decreaseExp(): void {
      this.experience -= 10
    },
  },
  computed: {
    power() {
      return (this.stats.hp + this.stats.mp) * this.stats.lvl
    }
  }
})

export const useChampionStore = defineStore('champion', () => {
const currentChampion = ref(null)
const experience = ref(0)

const stats = reactive({
hp: 0,
mp: 0,
lvl: 1
})

function increaseExp(value: int) {
experience.value += 10;
}

function decreaseExp(value: int) {
experience.value -= 10;
}

const power = computed(() => {
return (stats.hp + stats.mp) * stats.lvl
}

# Pending watch(experience) to level up

return {
currentChampion,
experience,
stats,
increaseExp,
decreaseExp,
power
}

})
