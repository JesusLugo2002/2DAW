<script setup>
    import { computed, reactive, ref } from 'vue';
    import Event from './includes/Event.vue';

    const evilEvents = reactive([
        {title: 'Asesinato en la panadería', type: 'Muertes', description: 'Han asesinado a un panadero por vender pan duro.', additionalInfo: 'El pan de leche está de oferta.'},
        {title: 'Desaparece Mariah Carey', type: 'Desapariciones', description: 'Desde que terminó navidad no se ha sabido nada de ella.', additionalInfo: 'Un testigo dice que la vio comprando piña en el Mercadona.'},
        {title: 'La Llorona aparece', type: 'Fenómenos paranormales', description: 'Se puede escuchar por las noches, nuevamente, el llanto de un fantasma.', additionalInfo: '8 familias han sido víctimas de su estruendoso llanto'}
    ]);

    const inspectingEvent = ref(false);
    const selectedEvent = ref(null);
    const filterType = ref(null)
    console.log(filterType)

    const viewDetails = (event) => {
        selectedEvent.value = event;
        inspectingEvent.value = true;
    };

    const filterEvents = computed(() => {
        if (filterType.value) {
            return evilEvents.filter(event => event.type == filterType.value);
        }
        return evilEvents;
    });
</script>

<template>
    <h1>La maldición de Derry</h1>

    <div id="event-type-selector" class="my-3 d-flex justify-content-center">
        <div class="btn-group">
            <button class="btn btn-outline-danger" @click="filterType = null">Todos los eventos</button>
            <button class="btn btn-outline-danger" @click="filterType = 'Muertes'">Muertes</button>
            <button class="btn btn-outline-danger" @click="filterType = 'Desapariciones'">Desapariciones</button>
            <button class="btn btn-outline-danger" @click="filterType = 'Fenómenos paranormales'">Fenómenos paranormales</button>
        </div>
    </div>

    <ul class="list-group" id="event-list" v-if="inspectingEvent == false">
        <Event v-for="event in filterEvents" :title="event.title" :type="event.type" :description="event.description" @click="viewDetails(event)">
            {{ event.additionalInfo }}
        </Event>
    </ul>

    <section class="w-100 d-flex justify-content-center" id="event-detail" v-show="inspectingEvent === true">
        <div class="mt-5 border p-5" v-if="selectedEvent != null">
            <div class="d-flex justify-content-start align-items-center">
                <i class="bi bi-arrow-left-circle fs-3" @click="inspectingEvent = false, selectedEvent = null, filterType = null"></i> 
                <h3 class="mx-2">{{ selectedEvent.title }}</h3>
            </div>
            <p class="text-secondary">Tipo de evento: {{ selectedEvent.type }}</p>
            <p class="mt-2">{{ selectedEvent.description }}</p>
        </div>
    </section>
</template>

<style scoped>
    i {
        cursor: pointer;
    }
</style>