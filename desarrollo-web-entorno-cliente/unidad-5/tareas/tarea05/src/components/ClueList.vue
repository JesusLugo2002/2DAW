<script setup>
    import Clue from './Clue.vue';

    const props = defineProps(
        ["clueList"]
    )
</script>

<template>
    <h2 class="mt-3">Las pistas encontradas son...</h2>
    <form>
        <Clue v-for="(clue, index) in clueList" :clueName="clue.name" :cluePriority="clue.priority" :key="index"></Clue>
    </form>
</template>