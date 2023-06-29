export const useAboutMe = () => {
    const aboutMeData = useState<{ num: Number }>("aboutMe", () => ({
        num: 1,
        aboutList: [{ content: "test" }],
        type: "sprout",
    }));

    return { aboutMeData };
};
