// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLVXANAMjPR6yIGEsw3WP6GDP8auWFTBc",
  authDomain: "react-blog-e029a.firebaseapp.com",
  projectId: "react-blog-e029a",
  storageBucket: "react-blog-e029a.appspot.com",
  messagingSenderId: "263411085081",
  appId: "1:263411085081:web:55c6dee8b3aafce1ff9f88",
  measurementId: "G-VK79LPDETW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();