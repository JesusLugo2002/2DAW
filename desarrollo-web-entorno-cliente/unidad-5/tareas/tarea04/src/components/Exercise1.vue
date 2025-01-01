<script setup>
import { ref } from 'vue';

const pennywiseList = ref([
    { name: 'Dorsey Corcoran', image: '/img/pennywise-1.avif', alias: '' },
    { name: 'Georgie Denborough', image: '/img/pennywise-2.avif', alias: '' },
    { name: 'Werewolf', image: '/img/pennywise-3.avif', alias: '' },
    { name: 'The Creature from the Black Lagoon', image: '/img/pennywise-4.avif', alias: '' },
]);

const selected = ref(null);
const showAliasForm = ref(false);

const selectPennywise = (pennywise) => {
    selected.value = pennywise;
    showAliasForm.value = true;
}

const saveAlias = (pennywise) => {
    pennywise.alias = document.getElementById('alias').value;
    alert(`Alias guardado para ${pennywise.name}`)
}
</script>

<template>
    <h1>¡Elige tu versión de Pennywise favorito!</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4 my-3">
        <div v-for="pennywise in pennywiseList" :key="pennywise.name" v-on:click="selectPennywise(pennywise)">
            <div class="col">
                <div class="card p-3" :class="{ 'border-danger' : selected === pennywise }">
                    <img :src="pennywise.image" class="card-img-top" :alt="pennywise.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ pennywise.name }}</h5>
                        <h5 v-if="pennywise.alias.length > 0" class="text-secondary">Alias: {{ pennywise.alias }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showAliasForm">
        <h4>¡Has seleccionado a <span class="text-danger">{{ selected.name }}</span> como tu versión favorita de Pennywise!</h4>
        <form @submit.prevent="saveAlias(selected)" class="my-3">
            <div class="form-group">
                <label for="alias" class="mb-1">¡Añade o cambia un alias para el Pennywise!</label>
                <input type="text" id="alias" class="form-control" placeholder="Escribe tu alias" required/>
            </div>
            <button type="submit" class="btn btn-danger mt-2">Guardar Alias</button>
        </form>
    </div>
</template>