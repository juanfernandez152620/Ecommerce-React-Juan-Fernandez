// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmP0bc7FKDCq50IlzWtQHa7jj2QEH6JWI",
  authDomain: "ecommerce-juanfer-63395.firebaseapp.com",
  projectId: "ecommerce-juanfer-63395",
  storageBucket: "ecommerce-juanfer-63395.firebasestorage.app",
  messagingSenderId: "34358790390",
  appId: "1:34358790390:web:5d6158f4eff707965d44d7",
  measurementId: "G-ED8W8K10NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export default db;