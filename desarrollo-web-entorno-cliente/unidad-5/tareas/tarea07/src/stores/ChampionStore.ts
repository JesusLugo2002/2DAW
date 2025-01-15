import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

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

watch(experience, (newExperience) => {
if (newExperience >= 100) {
stats.lvl++;
experience.value = 0
}
})

return {
currentChampion,
experience,
stats,
increaseExp,
decreaseExp,
power
}

})
