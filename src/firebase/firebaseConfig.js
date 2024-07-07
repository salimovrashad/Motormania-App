import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCVkihoyA8fFftDQ1SYoxk75mXXOgVQFyA",
  authDomain: "motormania-b0b5b.firebaseapp.com",
  databaseURL: "https://motormania-b0b5b-default-rtdb.firebaseio.com",
  projectId: "motormania-b0b5b",
  storageBucket: "motormania-b0b5b.appspot.com",
  messagingSenderId: "453564061781",
  appId: "1:453564061781:web:6e27c5bd7d84f3837a1cdc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }