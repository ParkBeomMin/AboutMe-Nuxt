<template>
    <div class="layer-container">
        <h3>{{ title }}</h3>
        <button class="close-btn"><SvgClose /></button>
        <slot />
    </div>
</template>

<script setup lang="ts">
const { text = ''} = defineProps({
    text: String,
});
</script>
