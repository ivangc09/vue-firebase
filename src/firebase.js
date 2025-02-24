// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjF9F43elpUZv4ye91YGAP291DbEH0yQc",
    authDomain: "vue-firebase-8bf15.firebaseapp.com",
    projectId: "vue-firebase-8bf15",
    storageBucket: "vue-firebase-8bf15.firebasestorage.app",
    messagingSenderId: "455654427683",
    appId: "1:455654427683:web:33c572e15a4733c3a1b596",
    measurementId: "G-XWKPG99BMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };