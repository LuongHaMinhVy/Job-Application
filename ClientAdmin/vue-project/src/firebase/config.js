
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl-sWnKIkRYOLxuIZkYPO39Vj37ISPLSE",
  authDomain: "ptit-b51c0.firebaseapp.com",
  projectId: "ptit-b51c0",
  storageBucket: "ptit-b51c0.appspot.com",
  messagingSenderId: "1069516758706",
  appId: "1:1069516758706:web:bf25770ca9f9cea3a033ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app)
export const db = getFirestore(app); 
export default storage;
