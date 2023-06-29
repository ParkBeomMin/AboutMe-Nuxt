<template>
    <LayerContainer title="개발자 밥 사주기🍚">
        <div class="moneybox">
                <LayerMoneyBtn v-for="(m, i) in moneyList" :key="`money-${i}`" />
        </div>
    </LayerContainer>
</template>

<script setup lang="ts">
const moneyList = reactive([])
</script>