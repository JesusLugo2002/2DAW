import { defineStore } from 'pinia'

export const useChampionStore = defineStore('champion', {
  state: () => ({
    name: '',
    stats: {
      exp: 0,
      hp: 0,
      mp: 0,
      power: 0,
    },
  }),
  getters: {},
  actions: {
    increasePower(): void {
      this.stats.power++
    },
    decreasePower(): void {
      this.stats.power--
    },
  },
})
