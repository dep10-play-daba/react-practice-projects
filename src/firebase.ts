import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUB3DzCXTkZKmE1lplbLLp8oP4yC-2VcQ",
    authDomain: "simple-task-app-da87f.firebaseapp.com",
    projectId: "simple-task-app-da87f",
    storageBucket: "simple-task-app-da87f.appspot.com",
    messagingSenderId: "179497107072",
    appId: "1:179497107072:web:27fca800a848ab25ea3065"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=app.firestore();