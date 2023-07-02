<template>
    <main id="page-content">
        <NuxtPage />
        <LayerPassword v-if="passwordLayerData.isShow" />
        <LayerMoney v-if="moneyLayerData.isShow" />
    </main>
</template>

<script setup lang="ts">
const { passwordLayerData } = usePassWordLayer();
const { moneyLayerData } = useMoneyLayer();
useHead({
    title: "AboutMe",
    meta: [
        {
            name: "description",
            content:
                "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
        },
    ],
});
useSeoMeta({
    title: "AboutMe",
    ogTitle: "AboutMe",
    description:
        "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
    ogDescription:
        "친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!",
    ogImage:
        "https://about-me-tree.web.app/assets/images/sprout.3d595a3260f1a1ed70c22930ea3f2876.svg",
});
</script>

<style>
body,
#page-content {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
}
</style>
