// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkqP0c3GwPhAVSN-X7yGD0slYTUkp7zHk",
  authDomain: "kdij-ea39a.firebaseapp.com",
  projectId: "kdij-ea39a",
  storageBucket: "kdij-ea39a.appspot.com",
  messagingSenderId: "415302691077",
  appId: "1:415302691077:web:ca1350e23999ca28ddef6c",
  measurementId: "G-91WLPWLB8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



/*
for login button|||
                VVV 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */
