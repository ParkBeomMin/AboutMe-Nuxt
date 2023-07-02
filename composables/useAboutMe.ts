export const useAboutMe = () => {
    const aboutMeData = useState<{
        num: Number;
        color: string;
        groundColor: string;
        type: string;
        aboutList?: Array<any>;
    }>("aboutMe", () => ({
        num: 1,
        color: "rgb(0,0,0)",
        groundColor: "rgb(0,0,0)",
        type: "sprout",
    }));

    const getAboutMeData = async ({ id }: { id: string }) => {
        aboutMeData.value.aboutList = [];
        await nextTick();
        const { data } = await useFetch(`/api/aboutMe?id=${id}`);
        if (data.value) {
            aboutMeData.value = data.value as any;
        }
    };

    return { aboutMeData, getAboutMeData };
};
