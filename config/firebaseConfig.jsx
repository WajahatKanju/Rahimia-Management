import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxnMr-3kZySCqVMjSgMsWXLa_6f5dOqCM",
  authDomain: "rahimia-management.firebaseapp.com",
  projectId: "rahimia-management",
  storageBucket: "rahimia-management.appspot.com",
  messagingSenderId: "749793964909",
  appId: "1:749793964909:web:e865f3b428888a67162064",
  measurementId: "G-2438BH1NP9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
