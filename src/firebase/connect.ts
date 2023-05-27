// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  initializeFirestore,
  memoryLocalCache,
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyClnDZ7q1LyZ6MBgVv8aVhGyYZXXEeAEdM",

  authDomain: "portfoliowebsite-81b53.firebaseapp.com",

  projectId: "portfoliowebsite-81b53",

  storageBucket: "portfoliowebsite-81b53.appspot.com",

  messagingSenderId: "820099049403",

  appId: "1:820099049403:web:1ccabe0043e669f83f469e",

  measurementId: "G-KYCNY2N15K"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

initializeFirestore(app, {localCache: memoryLocalCache()});

export const db = getFirestore(app);


// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === "failed-precondition") {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//     console.error(
//       "Multiple tabs open, persistence can only be enabled in one tab at a a time."
//     );
//   } else if (err.code === "unimplemented") {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//     console.error(
//       "The current browser does not support all of the features required to enable persistence"
//     );
//   }
// });


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
  order: number;
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

