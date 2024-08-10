import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCzoaVoG1x-Pk5QZgC0d0CSyx6vn3zexVQ",
  authDomain: "motormania-m.firebaseapp.com",
  databaseURL: "https://motormania-m-default-rtdb.firebaseio.com",
  projectId: "motormania-m",
  storageBucket: "motormania-m.appspot.com",
  messagingSenderId: "951196547523",
  appId: "1:951196547523:web:88c54c13f96e87766b6576"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }