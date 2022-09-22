import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVRyrQTq8ir3KJezEG5z6bwXnQfdcFigE", //puedo ponerlo en un env dsp
  authDomain: "chat-e4988.firebaseapp.com",
  projectId: "chat-e4988",
  storageBucket: "chat-e4988.appspot.com",
  messagingSenderId: "140381402163",
  appId: "1:140381402163:web:cfc52b9969bb60d1601f46",
  measurementId: "G-H9HDHSM9CB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
