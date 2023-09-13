import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCLdLM97g6Y1beYyCGynduMz2Xw-SupkVA",
    authDomain: "motorcycle-web.firebaseapp.com",
    databaseURL: "https://motorcycle-web-default-rtdb.firebaseio.com",
    projectId: "motorcycle-web",
    storageBucket: "motorcycle-web.appspot.com",
    messagingSenderId: "810180774542",
    appId: "1:810180774542:web:b4f919a08401c7050f97df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }