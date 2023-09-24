// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDHU0pZNvPqKqgLWNXTyfzlNw_xt-mDbBQ",
  authDomain: "hackathon2023-48cc2.firebaseapp.com",
  projectId: "hackathon2023-48cc2",
  storageBucket: "hackathon2023-48cc2.appspot.com",
  messagingSenderId: "633303492858",
  appId: "1:633303492858:web:1c06c442307e24a0dd8143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const functions = getFunctions();