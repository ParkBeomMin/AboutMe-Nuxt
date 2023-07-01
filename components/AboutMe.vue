<template>
    <div class="wrap">
        <div class="sky"></div>
        <SvgSprout
            v-if="aboutMeData.type == 'sprout'"
            :color="aboutMeData.color"
            class="about-me"
        />
        <SvgGrowing
            v-else-if="aboutMeData.type == 'growing'"
            :num="aboutMeData.num"
            :color="aboutMeData.color"
            class="about-me"
        />
        <SvgTree
            v-else-if="aboutMeData.type == 'tree'"
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
