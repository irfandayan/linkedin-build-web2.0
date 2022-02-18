import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

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
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  storage,
};
export default db;
