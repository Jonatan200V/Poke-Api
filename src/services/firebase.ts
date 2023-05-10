// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-N2RmS5DO4dNWZyTy8-2Am0sxpW8ZfPc",
  authDomain: "pokemon-6102a.firebaseapp.com",
  projectId: "pokemon-6102a",
  storageBucket: "pokemon-6102a.appspot.com",
  messagingSenderId: "400505790439",
  appId: "1:400505790439:web:a381dd141500179e5c2742",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);
export const db = getFirestore(app);
export default app;
