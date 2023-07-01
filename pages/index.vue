<template>
    <New />
    <AboutMe />
    <RainyText />
</template>

<script setup lang="ts">
const { getAboutMeData } = useAboutMe();
onMounted(async () => {
    await getAboutMeData({ id: "new" });
});
</script>

<script setup></script>
