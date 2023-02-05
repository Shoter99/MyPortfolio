// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  Firestore,
  FirestoreSettings,
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_APP_ID,

  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const docRef = doc(db, "english-version", "main_text");
const docSnap = getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
