// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  enableIndexedDbPersistence,
} from "firebase/firestore";

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
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
    console.error(
      "Multiple tabs open, persistence can only be enabled in one tab at a a time."
    );
  } else if (err.code === "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
    console.error(
      "The current browser does not support all of the features required to enable persistence"
    );
  }
});
interface main_text {
  about_me: string;
  my_projects: string;
  my_resume: string;
}
interface about_me_text {
  text: string;
}
interface projects_type {
  projects: project[];
}
interface project {
  id: number;
  category: string;
  description: string;
  name: string;
  links: link[];
}
interface link {
  name: string;
  url: string;
}

export const getTextData = async (lang: string) => {
  let collectionRef = collection(db, "english-version");
  if (lang === "PL") collectionRef = collection(db, "polish-version");
  const docRef_main_text = doc(db, collectionRef.path, "main_text");
  const docRef_about_me = doc(db, collectionRef.path, "about_me_text");
  const docRef_projects = doc(db, collectionRef.path, "projects");
  const main_text = {
    about_me: "",
    my_projects: "",
    my_resume: "",
  };
  const about_me_text = {
    text: "",
  };
  const projects: project[] = [];
  await getDoc(docRef_main_text).then((doc) => {
    if (doc.exists()) {
      const data: main_text = doc.data() as main_text;
      main_text.about_me = data.about_me;
      main_text.my_projects = data.my_projects;
      main_text.my_resume = data.my_resume;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });
  await getDoc(docRef_about_me).then((doc) => {
    if (doc.exists()) {
      const data: about_me_text = doc.data() as about_me_text;
      about_me_text.text = data.text;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });
  await getDoc(docRef_projects).then((doc) => {
    if (doc.exists()) {
      const data: projects_type = doc.data() as projects_type;
      data.projects.forEach((project) => projects.push(project));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });
  return {
    main_text,
    about_me_text,
    projects,
  };
};
