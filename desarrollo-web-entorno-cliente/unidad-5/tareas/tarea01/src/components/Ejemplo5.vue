<script setup>
    import { ref } from 'vue';
    let colorVal = ref(50);
</script>

<template>
    <div id="ejer5">
        <h1>Ejercicio 05</h1>
        <p>Mueva el puntero del mouse sobre el cuadro a continuación para
        cambiar el color de fondo aleatoriamente con código de color hsl.</p>

        <div id="colorShape" v-on:mousemove="colorVal = Math.floor(Math.random()*360)" v-bind:style="{ backgroundColor: 'hsl('+colorVal+',80%,80%)' }"></div>

        <p><span>backgroundColor: hsl(<strong>{{ colorVal }}</strong>, 80%, 80%)</span></p>
    </div>
</template>

<style scoped>
    #ejer5 {
        padding: 10px;
        background-color: lightgreen;
    }

    #colorShape {
        width: 200px;
        height: 80px;
    }
</style>