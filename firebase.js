import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALt982zhqHkWB_CS9uoTFuB5qfdNGTmhs",
  authDomain: "docs-with-tailwindcss.firebaseapp.com",
  projectId: "docs-with-tailwindcss",
  storageBucket: "docs-with-tailwindcss.appspot.com",
  messagingSenderId: "106411832203",
  appId: "1:106411832203:web:1b2326c8cff0b2547af58e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
