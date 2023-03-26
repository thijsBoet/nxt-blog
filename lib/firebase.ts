import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDbAEQ16fzYSUoblzNMELoAMD2qQCADNfM',
	authDomain: 'nxt-blog-adb16.firebaseapp.com',
	projectId: 'nxt-blog-adb16',
	storageBucket: 'nxt-blog-adb16.appspot.com',
	messagingSenderId: '913658391105',
	appId: '1:913658391105:web:ffab57f17d85240cb9b4c0',
	measurementId: 'G-M350K3D8P0',
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
