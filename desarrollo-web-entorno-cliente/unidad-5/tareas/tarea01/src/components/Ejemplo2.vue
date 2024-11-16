<script setup>
    const text = 'Me gusta la pizza, el burrito, la ensalada de ternera Thai, la sopa Pou y el Tagin.';
</script>

<template>
    <div id="ejer2">
        <h1>Ejercicio 02</h1>
        <div v-if="text.includes('pizza')">
            <p>El texto incluye la palabra 'pizza'.</p>
            <img src="https://th.bing.com/th/id/OIP.GH7PX0Qmblyoy51nVLax1AHaGO?rs=1&pid=ImgDetMain"/>
        </div>

        <div v-else-if="text.includes('burrito')">
            <p>El texto incluye la pala burrito 'burrito', pero no 'pizza'.</p>
            <img src="https://static.vecteezy.com/system/resources/previews/021/705/045/original/burrito-food-in-pixel-art-style-vector.jpg"/>
        </div>

        <p v-else>
            Las palabras 'pizza' o 'burrito' no se encuentran en el texto.
        </p>
    </div>
</template>

<style scoped>
    #ejer2 {
        padding: 10px;
        background-color: lightgreen;
    }
    img {
        width: 10vw;
    }
</style>