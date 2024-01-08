import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDiZLlU9y3P-9U5CpA4e2ptj6lUWkMkkak",
  authDomain: "motormania-web.firebaseapp.com",
  databaseURL: "https://motormania-web-default-rtdb.firebaseio.com",
  projectId: "motormania-web",
  storageBucket: "motormania-web.appspot.com",
  messagingSenderId: "607136787462",
  appId: "1:607136787462:web:1f96cfdb7d7ce5c32be787"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }