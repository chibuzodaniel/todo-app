// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBE--pMuMCKAP6Bv0PFXe1ewsJucvBajc",
  authDomain: "todo-91b89.firebaseapp.com",
  projectId: "todo-91b89",
  storageBucket: "todo-91b89.appspot.com",
  messagingSenderId: "581045745597",
  appId: "1:581045745597:web:0b37c8e2071046be5a44d4",
  measurementId: "G-FDJYT9VDYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)