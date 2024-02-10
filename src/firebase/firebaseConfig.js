import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC4p7flvjPIwJcST-xnBkYGgVVTAAuuwgY",
  authDomain: "motormania-web-c632e.firebaseapp.com",
  databaseURL: "https://motormania-web-c632e-default-rtdb.firebaseio.com",
  projectId: "motormania-web-c632e",
  storageBucket: "motormania-web-c632e.appspot.com",
  messagingSenderId: "724429406950",
  appId: "1:724429406950:web:20753353eaab5cb5563127"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }