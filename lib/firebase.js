import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyDbAEQ16fzYSUoblzNMELoAMD2qQCADNfM',
	authDomain: 'nxt-blog-adb16.firebaseapp.com',
	projectId: 'nxt-blog-adb16',
	storageBucket: 'nxt-blog-adb16.appspot.com',
	messagingSenderId: '913658391105',
	appId: '1:913658391105:web:f757056240c8e5a3b9b4c0',
	measurementId: 'G-42CS27H3Z4',
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();