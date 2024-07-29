import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCmT23_WmKWyr2OsmdeT5JsjIWbZiIb_4o",
  authDomain: "motormania-a.firebaseapp.com",
  databaseURL: "https://motormania-a-default-rtdb.firebaseio.com",
  projectId: "motormania-a",
  storageBucket: "motormania-a.appspot.com",
  messagingSenderId: "505531901736",
  appId: "1:505531901736:web:8caf43abb3d9ef9864121d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }