<template>
    <div class="wrap">
        <div class="sky"></div>
        <SvgSprout
            v-if="aboutMeData.type"
            :color="aboutMeData.color"
            class="about-me"
        />
        <SvgGrowing
            :num="aboutMeData.num"
            :color="aboutMeData.color"
            class="about-me"
        />
        <SvgTree
            :num="aboutMeData.num"
            :color="aboutMeData.color"
            class="about-me"
        />
        <div class="ground"></div>
    </div>
</template>

<script setup lang="ts">
const { aboutMeData } = useAboutMe();
</script>

<style>
@import "~/assets/css/AboutMe.css";
</style>
