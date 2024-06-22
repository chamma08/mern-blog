// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-19722.firebaseapp.com",
  projectId: "mern-blog-19722",
  storageBucket: "mern-blog-19722.appspot.com",
  messagingSenderId: "653475371578",
  appId: "1:653475371578:web:c98901eb4563754d5c3303"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);