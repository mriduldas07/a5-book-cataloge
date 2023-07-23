// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv6C7Whf_7n6UaA_ekBabNl5eu0ZXJ1I0",
  authDomain: "book-hut-42627.firebaseapp.com",
  projectId: "book-hut-42627",
  storageBucket: "book-hut-42627.appspot.com",
  messagingSenderId: "95368077431",
  appId: "1:95368077431:web:574aac32946536a79a2672",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
