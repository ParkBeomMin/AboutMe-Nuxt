// https://fireship.io/lessons/nuxt-3-firebase/ 참고
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const app = initializeApp({
    credential: cert("./service-account.json"),
});

export const firestore = getFirestore();
