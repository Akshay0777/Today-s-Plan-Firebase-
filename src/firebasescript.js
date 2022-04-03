// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAG54JmtiYXAsRd5VzmR-inQY8m0Y5LSEw",
  authDomain: "today-plan-6e6cf.firebaseapp.com",
  projectId: "today-plan-6e6cf",
  storageBucket: "today-plan-6e6cf.appspot.com",
  messagingSenderId: "858130761334",
  appId: "1:858130761334:web:0dfcdc274b28542225c157",
  measurementId: "G-Y6Z33BH1XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);