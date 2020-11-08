// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdcpiJ7sYk8WfgrIKg7sGk9c17uErd9Kg",
  authDomain: "rapinas-da-mata.firebaseapp.com",
  databaseURL: "https://rapinas-da-mata.firebaseio.com",
  projectId: "rapinas-da-mata",
  storageBucket: "rapinas-da-mata.appspot.com",
  messagingSenderId: "161690057517",
  appId: "1:161690057517:web:caba021f2ebc9e3014b1a4"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);