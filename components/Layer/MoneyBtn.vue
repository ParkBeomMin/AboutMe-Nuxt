<template>
    <button class="dev-money-btn" @click="onClick">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
const { text = '', url = '' } = defineProps({
    text: String,
    url: String,
});

const onClick = () => {
    window.location.href = url;
};
</script>
