<template>
    <main id="page-content">
        <NuxtPage />
        <LayerPassword v-if="passwordLayerData.isShow" />
        <LayerMoney v-if="moneyLayerData.isShow" />
        <LayerKakaoAd v-if="adLayerData.isShow" />
    </main>
</template>

<script setup lang="ts">
const { passwordLayerData } = usePassWordLayer();
const { moneyLayerData } = useMoneyLayer();
const { adLayerData, setIsShowAdLayer } = useAdLayer();
useHead({
    title: 'AboutMe',
    meta: [
        {
            name: 'description',
            content: '친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!',
        },
    ],
    script: [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-XN490CVG9K',
            async: true,
            children: `(() => {
            window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());

                gtag('config', 'G-XN490CVG9K');
            })()`,
        },
    ],
});
useSeoMeta({
    title: 'AboutMe',
    ogTitle: 'AboutMe',
    description: '친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!',
    ogDescription: '친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!',
    ogImage: 'https://about-me-tree.web.app/assets/images/sprout.3d595a3260f1a1ed70c22930ea3f2876.svg',
});
const route = useRoute();

// watch(
//     route,
//     (value) => {
//         const isShow = !!Math.round(Math.random());
//         setIsShowAdLayer({ isShow });
//     },
//     { deep: true, immediate: true }
// );
// window.dataLayer = window.dataLayer || [];
// function gtag() {
//     dataLayer.push(arguments);
// }
// gtag('js', new Date());

// gtag('config', 'G-XN490CVG9K');
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
