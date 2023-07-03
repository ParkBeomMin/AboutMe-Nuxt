import { firestore } from '../utils/firebase';

export default cachedEventHandler(
    async () => {
        const ref = await firestore.collection('users');
        const snapshot = await ref.get();
        const sitemap = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return [
            ...sitemap.map((p) => {
                return { loc: `https://aboutme2.web.app/me/${p.id}`, lastmod: p?.regDate };
            }),
            ...sitemap.map((p) => {
                return { loc: `https://aboutme2.web.app/about/${p.id}`, lastmod: p?.regDate };
            }),
        ];
    },
    {
        name: 'sitemap-dynamic-urls',
        maxAge: 60 * 10, // cache URLs for 10 minutes
    }
);
