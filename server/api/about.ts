import { firestore } from "../utils/firebase";
import { generateRGB } from "../utils/generate";

export default defineEventHandler(async (event) => {
    const { id, content } = await readBody(event);

    const res = await firestore
        .collection("users")
        .doc(id)
        .collection("about")
        .add({
            color: generateRGB(),
            content,
        });
    await firestore.collection("abouts").add({
        color: generateRGB(),
        content,
    });
    return res.id;
});
