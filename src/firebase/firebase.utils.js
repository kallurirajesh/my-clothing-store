import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4k2INZ19SM5Nu8OS4agyAz8y_hEY-PsY",
    authDomain: "my-shopping-app-358fa.firebaseapp.com",
    databaseURL: "https://my-shopping-app-358fa.firebaseio.com",
    projectId: "my-shopping-app-358fa",
    storageBucket: "",
    messagingSenderId: "862454211148",
    appId: "1:862454211148:web:a47c516060daeba20ccae9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additinalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            })
        }catch(error){

        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;