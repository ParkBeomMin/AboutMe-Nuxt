<template>
    <div class="layer-container">
        <h3>{{ title }}</h3>
        <button class="close-btn" @click="close"><SvgClose /></button>
        <slot />
    </div>
</template>

<script setup lang="ts">
const { title = "" } = defineProps({
    title: String,
});

const emit = defineEmits<{ (e: "close"): void }>();

const close = () => {
    console.log("close");

    emit("close");
};
</script>

<style scoped>
@import "~/assets/css/Layer.css";
</style>
