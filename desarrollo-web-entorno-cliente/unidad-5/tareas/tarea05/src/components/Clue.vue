<script setup>
    const props = defineProps(
        ["clueName", "cluePriority"]
    )
</script>

<template>
    <div class="input-group my-1">
        <div class="input-group-text">
            <input type="checkbox" class="form-check-input" :name="clueName" :id="clueName + '-id'">
        </div>
        <label :for="clueName" class="form-control" data-bs-toggle="collapse" :data-bs-target="'#' + clueName + 'CollapseText'">{{ clueName }}</label>
    </div>    
    <div class="collapse" :id="clueName + 'CollapseText'">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </div>
</template>