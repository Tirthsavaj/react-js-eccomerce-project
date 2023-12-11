// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD30-hy8SMrwLsRzzayNaa7ux_z1-F2XlQ",
  authDomain: "auth-f2bfc.firebaseapp.com",
  projectId: "auth-f2bfc",
  storageBucket: "auth-f2bfc.appspot.com",
  messagingSenderId: "1054924786994",
  appId: "1:1054924786994:web:db5413f94f363c1dba9b2b",
  measurementId: "G-HWR39T34KS"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider();
export default app;