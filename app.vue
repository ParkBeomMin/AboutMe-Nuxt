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
