import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
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
var provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

// collection ref
const colRef = collection(db, "movies");

// get collection Data

const storage = getStorage(firebaseApp);
export { auth, provider, storage, colRef };
export default db;
