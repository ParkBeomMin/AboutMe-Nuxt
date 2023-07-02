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
                v-model="pwState.password"
            />
            <button class="pw-btn">완료</button>
        </form>
    </LayerContainer>
</template>

<script setup lang="ts">
const { passwordLayerData, setIsShowPasswordLayer } = usePassWordLayer();
const pwState = reactive({
    password: "",
});
const submit = (e: FormDataEvent) => {
    e.preventDefault();
    passwordLayerData.value.callback?.({ password: pwState.password });
    setIsShowPasswordLayer({ isShow: false });
};
</script>

<style scoped>
@import "~/assets/css/LayerPassword.css";
</style>
