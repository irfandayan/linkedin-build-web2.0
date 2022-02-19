import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";

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

// Authentication
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Firestore Database
const db = getFirestore(firebaseApp);

// Storage
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
