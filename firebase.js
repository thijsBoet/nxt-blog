// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbAEQ16fzYSUoblzNMELoAMD2qQCADNfM",
  authDomain: "nxt-blog-adb16.firebaseapp.com",
  projectId: "nxt-blog-adb16",
  storageBucket: "nxt-blog-adb16.appspot.com",
  messagingSenderId: "913658391105",
  appId: "1:913658391105:web:ffab57f17d85240cb9b4c0",
  measurementId: "G-M350K3D8P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);