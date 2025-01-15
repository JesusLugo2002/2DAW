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
