// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyDBBNU6RkrjxU2_-JXzxhLZERtHvmy_jMs",
//     authDomain: "react-firebase-auth-f6516.firebaseapp.com",
//     projectId: "react-firebase-auth-f6516",
//     storageBucket: "react-firebase-auth-f6516.appspot.com",
//     messagingSenderId: "1062462035962",
//     appId: "1:1062462035962:web:966e98df86610dc9c5f643"
// };

// const firebaseDB = firebase.initializeApp(firebaseConfig);

// const db = firebaseDB.database().ref();
// const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.googleAuthProvider();
// const facebookAuthProvider = new firebase.auth.facebookAuthProvider();

// export { auth, googleAuthProvider, facebookAuthProvider, db };

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE5oi_1yrU0PLTroXzDHlt1auJg4peTLI",
  authDomain: "react-new-e44d5.firebaseapp.com",
  projectId: "react-new-e44d5",
  storageBucket: "react-new-e44d5.appspot.com",
  messagingSenderId: "536844933386",
  appId: "1:536844933386:web:e5ad88893ea740024202f3",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { auth, googleAuthProvider, facebookAuthProvider, db };
