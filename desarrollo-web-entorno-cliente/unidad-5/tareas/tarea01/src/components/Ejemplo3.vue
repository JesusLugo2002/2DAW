<script setup>
    const showDiv = false;
</script>

<template>
    <div id="ejer3">
    <h1>Ejercicio 03</h1>
        <p>Establezca la propiedad de datos 'showDiv' en 'falso' y ejecute el código de nuevo. 
            Haga clic derecho en este elemento p verde, elija 'Inspeccionar' o 'Inspeccionar elemento' y 
            podrá ver que el elemento div con v-show todavía existe, es sólo la propiedad de 
            visualización CSS la que se se establece en 'ninguno' y el div con v-if se destruye.</p>
        <div v-show="showDiv">Div tag with v-show</div>
        <div v-if="showDiv">Div tag with v-if</div>
    </div>
</template>

<style>
    #ejer3 {
        padding: 10px;
        background-color: lightgreen;
    }
</style>