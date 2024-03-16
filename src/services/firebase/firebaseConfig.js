
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr6-DnYpmFWXj0o_CRZyNcmJneP6diG7g",
  authDomain: "e-commerce-pf-2584e.firebaseapp.com",
  projectId: "e-commerce-pf-2584e",
  storageBucket: "e-commerce-pf-2584e.appspot.com",
  messagingSenderId: "626333981425",
  appId: "1:626333981425:web:c414e9b088c10609036750"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);