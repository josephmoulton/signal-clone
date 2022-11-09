import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApFmJJyW1X4V6FT7OYsW51lIFN4zOlqXo",
  authDomain: "signal-clone-9a9b2.firebaseapp.com",
  projectId: "signal-clone-9a9b2",
  storageBucket: "signal-clone-9a9b2.appspot.com",
  messagingSenderId: "182737611546",
  appId: "1:182737611546:web:b9c435ff66869711e15aa3",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
