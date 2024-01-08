// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm_sjNHrKZdbtztnpUFnQ7QfVLQlsOB_0",
  authDomain: "all-mini-apps.firebaseapp.com",
  projectId: "all-mini-apps",
  storageBucket: "all-mini-apps.appspot.com",
  messagingSenderId: "707208945176",
  appId: "1:707208945176:web:e5a115ad74aee2a5b82d6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
