<template>
    <LayerContainer
        title="비밀번호"
        @close="setIsShowPasswordLayer({ isShow: false })"
    >
        <form class="pw-box" @submit="submit">
            <input
                type="password"
                name="password"
                id="password"
                class="pw-input"
            />
            <button class="pw-btn">완료</button>
        </form>
    </LayerContainer>
</template>

<script setup lang="ts">
const { passwordLayerData, setIsShowPasswordLayer } = usePassWordLayer();
const submit = (e: FormDataEvent) => {
    e.preventDefault();
    passwordLayerData.value.callback?.();
    setIsShowPasswordLayer({ isShow: false });
};
</script>

<style scoped>
@import "~/assets/css/LayerPassword.css";
</style>
