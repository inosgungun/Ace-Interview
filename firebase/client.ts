
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuUIAodd0EtUNqsXVYG3U5FpmwfpEdF80",
  authDomain: "aceinterview-f6825.firebaseapp.com",
  projectId: "aceinterview-f6825",
  storageBucket: "aceinterview-f6825.firebasestorage.app",
  messagingSenderId: "243090985631",
  appId: "1:243090985631:web:cadf6709a5f8c8216d08aa",
  measurementId: "G-XB9L9ZJBG2",
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);