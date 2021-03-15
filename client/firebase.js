import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDIhspeuzq3lvFZkpr4vH8g8qI18ElS7Y",
    authDomain: "socialmediaapplication-c5759.firebaseapp.com",
    projectId: "socialmediaapplication-c5759",
    storageBucket: "socialmediaapplication-c5759.appspot.com",
    messagingSenderId: "606022679926",
    appId: "1:606022679926:web:520bab886e62a9c355ce57",
    measurementId: "G-9V2TS9NQT6"
};

export const fb = firebase.initializeApp(firebaseConfig);
