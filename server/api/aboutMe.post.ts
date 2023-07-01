import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
    const { password } = await readBody(event);
    console.log(password);

    const res = await firestore.collection("users").add({
        treeFilter: generateFilter(),
        groundColor: generateRGB(),
        color: generateRGB(),
        num: Math.floor(Math.random() * 5) + 1,
        password,
    });
    console.log(res.id);
    return res.id;
});

const generateRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const generateFilter = () => {
    return `invert(${Math.floor(Math.random() * 99)}%) sepia(${Math.floor(
        Math.random() * 100
    )}%) saturate(${Math.floor(Math.random() * 1000)}%) hue-rotate(${Math.floor(
        Math.random() * 360
    )}deg) brightness(${Math.floor(
        Math.random() * 250
    )}%) contrast(${Math.floor(Math.random() * 50)}%)`;
};
