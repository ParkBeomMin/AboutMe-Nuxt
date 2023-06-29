export const useAbout = () => {
    const aboutData = useState("about", () => "");

    const sendAbout = () => {
        console.log(aboutData.value);
        aboutData.value = "";
    };

    const showMyAbout = () => {
        const { setIsShowPasswordLayer } = usePassWordLayer();
        setIsShowPasswordLayer({
            isShow: true,
            callback: () => {
                const router = useRouter();
                router.push("/me/test");
            },
        });
    };

    return {
        aboutData,
        sendAbout,
        showMyAbout,
    };
};
