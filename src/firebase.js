// import { initializeApp } from "firebase/app";

import firebase from "firebase";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDp3sEQjko9buwI6pUBTYBg_t9AH3H01SE",
  authDomain: "linkedin-build-web.firebaseapp.com",
  projectId: "linkedin-build-web",
  storageBucket: "linkedin-build-web.appspot.com",
  messagingSenderId: "753978214136",
  appId: "1:753978214136:web:f6d134d7e53647ba9b5d0d",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore;

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
