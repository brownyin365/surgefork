// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbEzgiYg5xT3TW2cBgApuDJoPLhLTa-WI",
  authDomain: "surgefork.firebaseapp.com",
  projectId: "surgefork",
  storageBucket: "surgefork.appspot.com",
  messagingSenderId: "944501203404",
  appId: "1:944501203404:web:b724368a5d1ccb66c87d69",
  measurementId: "G-7C2ZRLMJV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);