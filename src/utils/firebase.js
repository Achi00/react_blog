// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArAmIiw2ht2VKfzL6TJ0KjgNYEAl22bj8",
  authDomain: "react-blog-4b867.firebaseapp.com",
  projectId: "react-blog-4b867",
  storageBucket: "react-blog-4b867.appspot.com",
  messagingSenderId: "624314295040",
  appId: "1:624314295040:web:c7ce561474e977835409e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
