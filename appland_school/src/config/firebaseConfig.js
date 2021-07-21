import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVXDrk_H2D1RmbSLlFBJX-hk-FrtvWP8A",
    authDomain: "applandschool.firebaseapp.com",
    projectId: "applandschool",
    storageBucket: "applandschool.appspot.com",
    messagingSenderId: "457472493686",
    appId: "1:457472493686:web:8a01a39c7b9cd0236bf757",
    measurementId: "G-Y77M31DTZ8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}