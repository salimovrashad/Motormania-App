import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyARSIBuqKmD_ZcMVAAR_F9phU16ecQzyek",
    authDomain: "motormania-app-712a8.firebaseapp.com",
    databaseURL: "https://motormania-app-712a8-default-rtdb.firebaseio.com",
    projectId: "motormania-app-712a8",
    storageBucket: "motormania-app-712a8.appspot.com",
    messagingSenderId: "49862373250",
    appId: "1:49862373250:web:0c0ed5f6fd21deade1e99b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }