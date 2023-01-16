import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgLHqRWN-FCRr-lmyLaAG0bSIYr4YFqNQ",
    authDomain: "countries-app-auth.firebaseapp.com",
    projectId: "countries-app-auth",
    storageBucket: "countries-app-auth.appspot.com",
    messagingSenderId: "26520457873",
    appId: "1:26520457873:web:f586319063f1604b67e530"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();