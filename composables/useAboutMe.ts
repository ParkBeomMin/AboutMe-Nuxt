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
        console.log(id);
        aboutMeData.value.aboutList = [];
        const { data } = await useFetch(`/api/aboutMe?id=${id}`);
        console.log(data.value);

        console.log(aboutMeData.value);
        if (data.value) {
            console.log(123);

            aboutMeData.value = data.value as any;
        }
        console.log(aboutMeData.value);
    };

    return { aboutMeData, getAboutMeData };
};
