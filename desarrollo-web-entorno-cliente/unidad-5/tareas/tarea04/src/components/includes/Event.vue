<script setup>
    const props = defineProps({
        title: String,
        type: String,
        description: String
    });
</script>

<template>
    <li class="list-group-item list-group-item-action">
        <span class="fw-bold">{{ title }}</span>
        <div>{{ description }}</div>
        <div class="text-secondary"><slot></slot></div>
    </li>
</template>

<style scoped>
    li {
        cursor: pointer;
    }
</style>