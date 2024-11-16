<script setup>
    import { ref } from 'vue';

    let count = ref(0);
    function addMoose(value) {
        count.value += value
    }
</script>

<template>
    <div id="ejer7">
        <h1>Ejercicio 07</h1>
        <img src="https://th.bing.com/th/id/OIP.GH7PX0Qmblyoy51nVLax1AHaGO?rs=1&pid=ImgDetMain">
        <p>{{ "Moose count: " + count }}</p>
        <button v-on:click="addMoose(1)">+1</button>
        <button v-on:click="addMoose(5)">+5</button>
        <button v-on:click="addMoose(-1)">-1</button>
    </div>
</template>

<style scoped>
    #ejer7 {
        padding: 10px;
        background-color: lightgreen;
    }
    img {
        width: 300px;
    }
    button {
      margin: 10px;
      padding: 5px 10px;
    }
</style>