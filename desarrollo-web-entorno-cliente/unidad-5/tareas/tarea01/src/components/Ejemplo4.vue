<script setup>
    const manyFoods = [
        {name: 'Burrito', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'}
      ]
</script>

<template>
    <div id="ejer4">
        <h1>Ejercicio 04</h1>
        <p v-for="(x, index) in manyFoods">
          {{ index }}: "{{ x.name }}", url: "{{ x.url }}" <br>
        </p>
    </div>
</template>

<style scoped>
    #ejer4 {
        padding: 10px;
        background-color: lightgreen;
    }
</style>