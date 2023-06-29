<template>
    <div class="new-container">
        <button class="create-btn" @click="create">나의 새싹 만들기</button>
        <span class="info">친구들의 관심을 모아 새싹을 자라나게 해주세요!<br />새싹 -> 중간 -> 트리 형태로 자라납니다<br />나무의 형태, 색상은 모두 랜덤으로 생성됩니다.</span>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const create = () => {
    router.push('/about/test');
};
</script>

<style scoped>
@import '~/assets/css/New.css';
</style>
