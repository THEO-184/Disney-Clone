import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD8V7LfDY863DtJOEjAWxoWExcR4KX9lvA",
	authDomain: "disneyplus-30313.firebaseapp.com",
	projectId: "disneyplus-30313",
	storageBucket: "disneyplus-30313.appspot.com",
	messagingSenderId: "263109904648",
	appId: "1:263109904648:web:d2bde599712eba61dc04bd",
	measurementId: "G-BXVWBPFS3F",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);
export { auth, provider, storage };
export default db;