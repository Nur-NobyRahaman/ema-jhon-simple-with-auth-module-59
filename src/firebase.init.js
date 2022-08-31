// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Nm6imHM7rKBE0tAT8L4NlZK3qPfD69M",
  authDomain: "ema-jhon-53-main.firebaseapp.com",
  projectId: "ema-jhon-53-main",
  storageBucket: "ema-jhon-53-main.appspot.com",
  messagingSenderId: "1000382333928",
  appId: "1:1000382333928:web:d45567dbc5bbec1b451a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;