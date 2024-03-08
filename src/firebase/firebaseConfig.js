import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsK342g5L5I3AXKBEczoeZFksk2Kq67FQ",
  authDomain: "motormania-az.firebaseapp.com",
  databaseURL: "https://motormania-az-default-rtdb.firebaseio.com",
  projectId: "motormania-az",
  storageBucket: "motormania-az.appspot.com",
  messagingSenderId: "1072264523538",
  appId: "1:1072264523538:web:459110a81f145ddcdb0dcb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }