import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDcl6TTjqtwFJhIVex0kDlGlRyXnYAGAoI",
  authDomain: "cross-ana.firebaseapp.com",
  projectId: "cross-ana",
  storageBucket: "cross-ana.appspot.com",
  messagingSenderId: "347569811924",
  appId: "1:347569811924:web:ef190544daba64f182a641",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
