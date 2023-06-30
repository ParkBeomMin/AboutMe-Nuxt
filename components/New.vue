<template>
    <div class="new-container">
        <button class="create-btn" @click="create">나의 새싹 만들기</button>
        <span class="info">
            친구들의 관심을 모아 새싹을 자라나게 해주세요!<br />
            새싹 -> 중간 -> 트리 형태로 자라납니다<br />
            나무의 형태, 색상은 모두 랜덤으로 생성됩니다.
        </span>
    </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import copy from "copy-to-clipboard";

const router = useRouter();
const { setIsShowPasswordLayer } = usePassWordLayer();
const create = () => {
    setIsShowPasswordLayer({
        isShow: true,
        callback: async ({ password }: { password: string }) => {
            const { data } = await useFetch("/api/aboutMe", {
                method: "post",
                body: {
                    password,
                },
            });
            Swal.fire({
                html: "나의 새싹이 생성되었습니다.<br>클립보드에 복사된 링크로<br>친구들에게 공유해보세요!",
            }).then((v) => {
                if (v.value || v.dismiss) {
                    router.push(`/about/${data.value}`);
                }
            });
        },
    });
};
</script>

<style scoped>
@import "~/assets/css/New.css";
</style>
