<template>
    <Header />
    <AboutMe />
    <RainyText />
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { getAboutMeData } = useAboutMe();
onMounted(async () => {
    await getAboutMeData({ id: id as string });
});
</script>

<style scoped>
@import "~/assets/css/AboutMe.css";
</style>
