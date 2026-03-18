import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app = getApps().length === 0 ? initializeApp() : getApp();
const db = getFirestore(app);

export { db };
