// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ71ZGMr5orfcDFHLPN2HhEuyhAy5ecOg",
  authDomain: "educational-training-event.firebaseapp.com",
  projectId: "educational-training-event",
  storageBucket: "educational-training-event.appspot.com",
  messagingSenderId: "268729200914",
  appId: "1:268729200914:web:1a0021fb5fe126ab5943cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;