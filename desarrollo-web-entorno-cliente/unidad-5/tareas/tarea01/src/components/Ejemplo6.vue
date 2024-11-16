<script setup>
    import { ref } from 'vue';

    let text = ref('');
    function changeText() {
        text.value = 'Hello world!'
    }
</script>

<template>
    <div id="ejer6">
        <h1>Ejercicio 06</h1>
        <p>Click en la caja de abajo:</p>
        <div id="clickDiv" v-on:click="changeText()">
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
    #ejer6 {
        padding: 10px;
        background-color: lightgreen;
    }
    #clickDiv {
        width: 250px;
        height: 80px;
        border: 1px dashed black;
    }
</style>