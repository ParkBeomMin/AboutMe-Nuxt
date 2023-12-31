import { firestore } from '../utils/firebase';

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);

    let aboutList = [];
    let color = 'rgb(0,0,0)';
    let groundColor = 'rgb(0,0,0)';
    let num = '1';
    let type = 'sprout';

    if (id == 'new') {
        const ref = await firestore.collection('abouts');
        const snapshot = await ref.get();
        aboutList = snapshot.docs.map((doc) => doc.data());
    } else {
        const ref = await firestore.collection('users').doc(id as string);
        const doc = await ref.get();

        const aboutCol = await firestore
            .collection('users')
            .doc(id as string)
            .collection('about');
        const snapshot = await aboutCol.get();
        aboutList = snapshot.docs.map((doc) => doc.data());
        const ds = doc.data() as any;
        color = ds.color;
        groundColor = ds.groundColor;
        num = ds.num;
    }
    if (aboutList.length > 10) {
        type = 'growing';
    }
    if (aboutList.length > 50) {
        type = 'tree';
    }
    return {
        color,
        num,
        groundColor,
        type,
        aboutList,
    };
});
