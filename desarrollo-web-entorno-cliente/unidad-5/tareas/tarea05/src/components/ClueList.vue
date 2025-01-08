<script setup>
    import Clue from './Clue.vue';

    const props = defineProps(
        ["clueList"]
    )
</script>

<template>
    <h2 class="my-3">Las pistas encontradas son...</h2>
    <div>
        <Clue v-for="(clue, index) in clueList" :clueName="clue.name" :cluePriority="clue.priority" :id="index" v-slot="{priority}">
            <p class="fw-bold text-success">Importancia: {{ priority }}/100</p>
        </Clue>
    </div>
</template>