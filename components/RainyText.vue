<template>
    <div class="text-container">
        <span v-for="(about, i) in aboutList" :key="`about-${i}`" class="falling-text"></span>
    </div>
</template>

<script setup lang="ts">
const aboutList = reactive([]);
</script>
