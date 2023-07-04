<template>
    <LayerContainer @close="setIsShowAdLayer({ isShow: false })">
        <ins
            class="kakao_ad_area"
            style="display: none"
            data-ad-unit="DAN-2AsGSBANSChk42YM"
            data-ad-width="250"
            data-ad-height="250"
        ></ins>
    </LayerContainer>
</template>

<script setup lang="ts">
const { setIsShowAdLayer } = useAdLayer();
useHead({
    script: [
        {
            src: "//t1.daumcdn.net/kas/static/ba.min.js",
            tagPosition: "head",
            type: "text/javascript",
            async: true,
        },
    ],
});
</script>

<style scoped>
@import "~/assets/css/LayerAd.css";
</style>
