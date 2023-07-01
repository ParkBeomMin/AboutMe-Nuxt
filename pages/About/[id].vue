<template>
    <div class="wrap">
        <h1>나는 어떤 사람이야?</h1>
        <form class="input-box" @submit="submit">
            <input type="text" name="about" id="about" v-model="aboutData" />
            <button class="about-send-btn">
                <SvgSend />
            </button>
        </form>
        <nuxt-link class="go-new" to="/"> 새싹 만들러가기🌱</nuxt-link>
        <a href="javascript:void(0)" class="go-my" @click="showMyAbout({ id })">
            내 새싹 보러가기💚
        </a>
    </div>
</template>

<script setup lang="ts">
const { aboutData, sendAbout, showMyAbout } = useAbout();
const route = useRoute();
const id = route.params.id;
const submit = (e: FormDataEvent) => {
    e.preventDefault();
    sendAbout({ id: id as string });
};
</script>

<style scoped>
@import "~/assets/css/About.css";
</style>
