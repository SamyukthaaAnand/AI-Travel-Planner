// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbQ3JPXEHjIcuu0xuRGS-Gutb65ljcu1k",
  authDomain: "ai-travel-planner-5e167.firebaseapp.com",
  projectId: "ai-travel-planner-5e167",
  storageBucket: "ai-travel-planner-5e167.appspot.com",
  messagingSenderId: "976902121892",
  appId: "1:976902121892:web:9d67463b33af16bd657931",
  measurementId: "G-1M9YS4JF6Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);