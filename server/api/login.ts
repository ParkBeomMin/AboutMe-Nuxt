import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
    const { id, password } = await readBody(event);

    const ref = await firestore.collection("users").doc(id);
    const doc = await ref.get();
    const data = doc.data();
    if (data?.password === password) {
        return true;
    }
    return false;
});
