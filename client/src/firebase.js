// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cd2c0.firebaseapp.com",
  projectId: "mern-estate-cd2c0",
  storageBucket: "mern-estate-cd2c0.appspot.com",
  messagingSenderId: "507440309832",
  appId: "1:507440309832:web:23b15939242ad65b11da7d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
