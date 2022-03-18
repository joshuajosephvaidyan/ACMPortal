import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZFpUARzWAdgKfHlbGGJlw7A_RjkYWHmQ",
    authDomain: "acmportal-988d2.firebaseapp.com",
    projectId: "acmportal-988d2",
    storageBucket: "acmportal-988d2.appspot.com",
    messagingSenderId: "882386838673",
    appId: "1:882386838673:web:ee918ea1bea33231a94b30"
};

firebase.initializeApp(firebaseConfig);
export default firebase;