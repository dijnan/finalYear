import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByd0IvPMbdQEdBsbf9-RPddC5Z7DsNf3A",
  authDomain: "recipe-khadijah.firebaseapp.com",
  projectId: "recipe-khadijah",
  storageBucket: "recipe-khadijah.appspot.com",
  messagingSenderId: "207822860300",
  appId: "1:207822860300:web:ee3400c7f6a14153e73e29",
  measurementId: "G-FNNZVR1VGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
