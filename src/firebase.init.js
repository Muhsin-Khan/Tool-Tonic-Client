// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxOw4nboUY_4hgb1WlIcnTBzJ-FgtIs24",
  authDomain: "tool-tonic.firebaseapp.com",
  projectId: "tool-tonic",
  storageBucket: "tool-tonic.appspot.com",
  messagingSenderId: "15409721225",
  appId: "1:15409721225:web:36ae25f7af52cda6a33b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;