// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwl5v5hhQd-O_o_hlqkhkh0H9sEVsq6JM",
  authDomain: "mobile-gadget-shop.firebaseapp.com",
  projectId: "mobile-gadget-shop",
  storageBucket: "mobile-gadget-shop.appspot.com",
  messagingSenderId: "230564399168",
  appId: "1:230564399168:web:e27e8344cf0804e52a77a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;