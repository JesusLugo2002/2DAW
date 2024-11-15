<script setup>
    const num = Math.floor((Math.random() * 6) + 1)
</script>

<template>
    <div id="ejer1">
        <h1>Ejercicio 01</h1>
        <h3>{{ message }}</h3>
        <p>Random number: {{ num }}</p>
    </div>
</template>

<style>
    #ejer1 {
        padding: 10px;
        background-color: lightgreen;
    }
</style>
