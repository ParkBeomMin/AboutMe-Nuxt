<template>
    <div class="wrap">
        <div class="sky"></div>
        <component class="about-me" :is="`${aboutMeData.type}`" />
        <svg-sprout class="about-me" />
        <div class="ground"></div>
    </div>
</template>

<script setup lang="ts">
import sprout from "~/components/Svg/Sprout.vue";
const { aboutMeData } = useAboutMe();
</script>

<style>
@import "~/assets/css/AboutMe.css";
</style>
