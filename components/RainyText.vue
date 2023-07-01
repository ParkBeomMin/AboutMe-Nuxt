<template>
    <div class="text-container">
        <span
            v-for="(about, i) in aboutMeData.aboutList"
            :key="`about-${i}`"
            class="falling-text"
            :style="`left: ${Math.random() * 100}%; animation-duration: ${
                Math.random() * 10 + 4
            }s; color: ${about.color}`"
            >{{ about.content }}</span
        >
    </div>
</template>

<script setup lang="ts">
const { aboutMeData } = useAboutMe();
</script>
