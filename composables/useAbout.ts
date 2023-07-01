import Swal from "sweetalert2";

export const useAbout = () => {
    const aboutData = useState("about", () => "");

    const sendAbout = async ({ id }: { id: string }) => {
        const cookie = useCookie(`aboutme-${id}`, {
            default: () => "",
            maxAge: 24 * 60 * 60,
        });
        if (cookie.value === "done") {
            Swal.fire({
                html: "24시간에 한 번만 친구에게 마음을 전달할 수 있습니다.",
            });
            return;
        }
        if (!!aboutData.value) {
            await useFetch("/api/about", {
                method: "post",
                body: {
                    id,
                    content: aboutData.value,
                },
            });
            aboutData.value = "";
            cookie.value = "done";
            Swal.fire({
                html: "친구에게 잘 전달되었습니다.<br>나의 새싹도 만들어보세요",
            }).then((v) => {
                if (v.value) {
                    const router = useRouter();
                    router.push("/");
                }
            });
        }
    };

    const showMyAbout = ({ id }: { id: string }) => {
        const { setIsShowPasswordLayer } = usePassWordLayer();
        setIsShowPasswordLayer({
            isShow: true,
            callback: async ({
                password,
            }: {
                id: string;
                password: string;
            }) => {
                const isLogin = await login({ id, password });
                if (isLogin) {
                    const router = useRouter();
                    router.push(`/me/${id}`);
                } else {
                    Swal.fire({ html: "비밀번호를 잘못입력하였습니다." });
                }
            },
        });
    };

    const login = async ({
        id,
        password,
    }: {
        id: string;
        password: string;
    }) => {
        const { data } = await useFetch("/api/login", {
            method: "post",
            body: {
                id,
                password,
            },
        });

        return data.value;
    };

    return {
        aboutData,
        sendAbout,
        showMyAbout,
        login,
    };
};
