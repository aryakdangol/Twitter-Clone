import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCAVjaMmVAHM48UUubwJfmHCp_mw7nH9b4",
    authDomain: "twitter-clone-f1cdf.firebaseapp.com",
    projectId: "twitter-clone-f1cdf",
    storageBucket: "twitter-clone-f1cdf.appspot.com",
    messagingSenderId: "648722911057",
    appId: "1:648722911057:web:5f43ceacea82f3f280cd70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;