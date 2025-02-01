
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdMyrOYWHlyZML3KcVa6NZOI1BAF5u-D4",
  authDomain: "beyond-chats-4cab5.firebaseapp.com",
  projectId: "beyond-chats-4cab5",
  storageBucket: "beyond-chats-4cab5.appspot.com",
  messagingSenderId: "1094094440709",
  appId: "1:1094094440709:web:1b07de5179f96dee0d4f6c",
  measurementId: "G-ZJP814K5WJ"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const googleProvider = new GoogleAuthProvider();

export { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  sendEmailVerification, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
};