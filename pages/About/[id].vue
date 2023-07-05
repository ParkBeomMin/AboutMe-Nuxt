<template>
    <div class="wrap">
        <h1>나는 어떤 사람이야?</h1>
        <form class="input-box" @submit="submit">
            <input type="text" name="about" id="about" v-model="aboutData" />
            <button class="about-send-btn">
                <SvgSend />
            </button>
        </form>
        <span class="info">ex) 마음이 따듯해. 예뻐. 냉정해. 극I...<br />친구를 떠올렸을 때 생각나는 말을 적어주세요.</span>
        <nuxt-link class="go-new" to="/"> 새싹 만들러가기🌱</nuxt-link>
        <a href="javascript:void(0)" class="go-my" @click="showMyAbout({ id })"> 내 새싹 보러가기💚 </a>
        <ins class="kakao_ad_area" style="display: none" data-ad-unit="DAN-2AsGSBANSChk42YM" data-ad-width="250" data-ad-height="250"></ins>
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
useHead({
    script: [
        {
            src: '//t1.daumcdn.net/kas/static/ba.min.js',
            tagPosition: 'head',
            type: 'text/javascript',
            async: true,
        },
    ],
});
</script>

<style scoped>
@import '~/assets/css/About.css';
</style>
