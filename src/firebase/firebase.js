// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
const firebaseConfig = {
  apiKey: "AIzaSyAODd1auz-MIdTwVmkc9iaOVZ2VAlphMFM",
  authDomain: "web-app-72a03.firebaseapp.com",
  projectId: "web-app-72a03",
  storageBucket: "web-app-72a03.appspot.com",
  messagingSenderId: "686345832372",
  appId: "686345832372:web:0d8f0d217e4eb920e354e1",
  measurementId: "G-9QNYHW6KGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
