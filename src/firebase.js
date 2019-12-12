import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBrmot1Ib6nO-WWwFAhju0mXMuqSVSxnX8",
  authDomain: "react-chatbox-530c4.firebaseapp.com",
  databaseURL: "https://react-chatbox-530c4.firebaseio.com",
  projectId: "react-chatbox-530c4",
  storageBucket: "react-chatbox-530c4.appspot.com",
  messagingSenderId: "312314368901",
  appId: "1:312314368901:web:26d6f64cf6e152a09e2aec",
  measurementId: "G-1344QB0DX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();

