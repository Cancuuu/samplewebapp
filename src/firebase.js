import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_SI-sY9FlUNcJEEaik-iCqsW-zZ5Nbfk",
  authDomain: "samplewebapp-ec634.firebaseapp.com",
  databaseURL: "https://samplewebapp-ec634.firebaseio.com",
  projectId: "samplewebapp-ec634",
  storageBucket: "samplewebapp-ec634.appspot.com",
  messagingSenderId: "495324226286",
  appId: "1:495324226286:web:7cbff137e3f38b469189ff",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
