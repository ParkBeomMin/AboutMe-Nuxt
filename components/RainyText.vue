<template>
    <div class="text-container">
        <span
            v-for="(about, i) in aboutMeData.aboutList"
            :key="`about-${i}`"
            class="falling-text"
            >{{ about.content }}</span
        >
    </div>
</template>

<script setup lang="ts">
const { aboutMeData } = useAboutMe();
</script>
