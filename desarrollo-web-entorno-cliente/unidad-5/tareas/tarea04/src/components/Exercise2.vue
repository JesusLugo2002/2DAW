<script setup>
    import { ref } from 'vue';
    import Balloon from './includes/Balloon.vue';

    const balloonCount = ref(1)
    const showingMessage = ref(false)

    const switchMessage = () => {
        showingMessage.value = !showingMessage.value
    }
</script>

<template>
    <div class="container">
        <h1 class="mb-4">La casa flotante de los globos rojos</h1>
        <div class="text-center">
            <h3 class="text-secondary">¡Elige la cantidad de globos!</h3>
            <input type="range" id="balloon-slider" min="1" max="20" v-model.number="balloonCount" class="form-range">
            <h3 class="text-secondary">Hay {{ balloonCount }} globos.</h3>
        </div>
        
        
        <div class="d-flex justify-content-center align-items-center flex-column">
            <div id="balloon-container" class="d-flex justify-content-center flex-wrap w-50 mt-5">
                <Balloon v-for="num in balloonCount" :key="num"/>
            </div>
            <button v-if="balloonCount >= 10" class="btn btn-danger mt-5" @click="switchMessage">¿Mensaje?</button>
            <h5 v-if="showingMessage" class="text-danger mt-5">¡Todos flotan aquí!</h5>
        </div>
    </div>
</template>