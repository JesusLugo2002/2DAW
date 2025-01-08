<script setup>
    const props = defineProps(
        ["id", "clueName", "cluePriority"]
    )
</script>

<template>
    <div class="input-group my-1">
        <div class="input-group-text">
            <input type="checkbox" class="form-check-input" :name="clueName" :id="id">
        </div>
        <label :for="clueName" class="form-control" data-bs-toggle="collapse" :data-bs-target="'#' + id + '-CollapseText'">{{ id + 1 }}. {{ clueName }}</label>
    </div>    
    <div class="collapse" :id="id + '-CollapseText'">
        <div class="card card-body">
            <slot :priority="cluePriority"></slot>
        </div>
    </div>
</template>