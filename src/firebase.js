import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFkGIvUMb28yELKtbn5lbQz32safzGgyg",
  authDomain: "instagram-clone-6e1fe.firebaseapp.com",
  databaseURL: "https://instagram-clone-6e1fe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagram-clone-6e1fe",
  storageBucket: "instagram-clone-6e1fe.appspot.com",
  messagingSenderId: "1062098942483",
  appId: "1:1062098942483:web:d2d483b77c3657caaa5de6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth , storage};