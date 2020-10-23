import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCZH8iWNb8eB6V1syB6YuanY2kiCv8hkE",
    authDomain: "etoot-jimmy-stephen.firebaseapp.com",
    databaseURL: "https://etoot-jimmy-stephen.firebaseio.com",
    projectId: "etoot-jimmy-stephen",
    storageBucket: "etoot-jimmy-stephen.appspot.com",
    messagingSenderId: "561548588632",
    appId: "1:561548588632:web:5575a8110c73a7c3603c2d",
    measurementId: "G-926FHVE67E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
