import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQ5riSbu1inp4m6PDXoFHCojpey7bm7QI",
  authDomain: "react-app-new-2ac09.firebaseapp.com",
  projectId: "react-app-new-2ac09",
  storageBucket: "react-app-new-2ac09.appspot.com",
  messagingSenderId: "656780266258",
  appId: "1:656780266258:web:51b3deb72e97d2dbffc1cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}