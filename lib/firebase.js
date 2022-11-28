import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDbAEQ16fzYSUoblzNMELoAMD2qQCADNfM',
	authDomain: 'nxt-blog-adb16.firebaseapp.com',
	projectId: 'nxt-blog-adb16',
	storageBucket: 'nxt-blog-adb16.appspot.com',
	messagingSenderId: '913658391105',
	appId: '1:913658391105:web:f757056240c8e5a3b9b4c0',
	measurementId: 'G-42CS27H3Z4',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
	const usersRef = firestore.collection('users');
	const query = usersRef.where('username', '==', username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
		createdAt: data.createdAt.toMillis(),
		updatedAt: data.updatedAt.toMillis(),
	};
}
