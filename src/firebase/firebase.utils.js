import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


let config = {
    apiKey: "AIzaSyAI5I--2g5ImFOPBqQC1wB3ng7PqB_HWaY",
    authDomain: "crown-clothingdb-aaa69.firebaseapp.com",
    projectId: "crown-clothingdb-aaa69",
    storageBucket: "crown-clothingdb-aaa69.appspot.com",
    messagingSenderId: "908673181008",
    appId: "1:908673181008:web:25c0bb339941959a513855",
    measurementId: "G-Z379KX4VEC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;