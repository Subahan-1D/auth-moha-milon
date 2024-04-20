// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLw-U-cVXzB1AI2-qMv9-iK-I7cnpNq98",
  authDomain: "auth-moha-milon-a666a.firebaseapp.com",
  projectId: "auth-moha-milon-a666a",
  storageBucket: "auth-moha-milon-a666a.appspot.com",
  messagingSenderId: "30143887877",
  appId: "1:30143887877:web:bbb78b34e0c7ac711bba6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;