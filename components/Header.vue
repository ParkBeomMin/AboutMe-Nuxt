<template>
    <header>
        <button class="share-btn" @click="share"><SvgShare /></button>
        <button
            class="money-btn"
            @click="setIsShowMoneyLayer({ isShow: true })"
        >
            <SvgMoney />
        </button>
    </header>
</template>

<script setup>
import Swal from "sweetalert2";
import copy from "copy-to-clipboard";
const { setIsShowMoneyLayer } = useMoneyLayer();
const share = () => {
    const route = useRoute();
    const id = route.params.id;
    copy(`${window.location.host}/about/${id}`);
    Swal.fire({
        html: "클립보드에 복사된 링크로<br>친구들에게 공유해보세요!",
    });
};
</script>

<style scoped>
@import "~/assets/css/Header.css";
</style>
