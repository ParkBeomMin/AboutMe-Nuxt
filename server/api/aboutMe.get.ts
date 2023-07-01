import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
    console.log("aboutme get");
    const { id } = getQuery(event);

    let aboutList = [];
    let color = "rgb(0,0,0)";
    let groundColor = "rgb(0,0,0)";
    let num = "1";
    let type = "sprout";

    if (id == "new") {
        const ref = await firestore.collection("abouts");
        const snapshot = await ref.get();
        console.log(snapshot.docs.map((doc) => doc.data()));
        aboutList = snapshot.docs.map((doc) => doc.data());
    } else {
        const ref = await firestore.collection("users").doc(id as string);
        const doc = await ref.get();

        const aboutCol = await firestore
            .collection("users")
            .doc(id as string)
            .collection("about");
        const snapshot = await aboutCol.get();
        aboutList = snapshot.docs.map((doc) => doc.data());
        const { color, num, groundColor } = doc.data() as any;
    }
    if (aboutList.length > 10) {
        type = "growing";
    } else if (aboutList.length > 50) {
        type = "tree";
    }
    return {
        color,
        num,
        groundColor,
        type,
        aboutList,
    };
});
