import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBgASkqCABkJg4i64CWFuUlHq53Ls7f-T8",
    authDomain: "motormania-app.firebaseapp.com",
    databaseURL: "https://motormania-app-default-rtdb.firebaseio.com",
    projectId: "motormania-app",
    storageBucket: "motormania-app.appspot.com",
    messagingSenderId: "404746140058",
    appId: "1:404746140058:web:d98d1ca7411551238e2223"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }