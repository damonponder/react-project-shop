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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

const myAsyncFunction = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log(firstUser);
    const postResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users' + firstUser
);
    const posts = await postResponse.json();
    console.log(posts);
}

const myAsyncResponse = async () => {

}