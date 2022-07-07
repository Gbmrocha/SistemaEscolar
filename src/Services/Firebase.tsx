import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBeRJptgGA1zpdZ60_vryURO-qIJzb5zjc",
  authDomain: "sistemaescolar-96ca8.firebaseapp.com",
  projectId: "sistemaescolar-96ca8",
  storageBucket: "sistemaescolar-96ca8.appspot.com",
  messagingSenderId: "870315169868",
  appId: "1:870315169868:web:6f27d849c556d51b1dfce9"
});

const auth = getAuth();
const db = getFirestore(firebaseConfig);

export {auth, db};