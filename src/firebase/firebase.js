// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn61ETz7wjSZ7k59E6I9Sdt1DkVCeQawI",
  authDomain: "perezapp-b6557.firebaseapp.com",
  projectId: "perezapp-b6557",
  storageBucket: "perezapp-b6557.appspot.com",
  messagingSenderId: "369047901197",
  appId: "1:369047901197:web:40679e294d9756de0df144",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
