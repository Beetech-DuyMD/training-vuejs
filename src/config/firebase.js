import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ7HVfXGfv0bz6jQKmQFR_eaUnsxm_Ics",
  authDomain: "imoney-c268c.firebaseapp.com",
  projectId: "imoney-c268c",
  storageBucket: "imoney-c268c.appspot.com",
  messagingSenderId: "519701895671",
  appId: "1:519701895671:web:cf95abb52e0b8d5dceb6f2",
  measurementId: "G-7WEXX0VRTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStoreCore = getFirestore(app);
const projectAuth = getAuth(app);
export { fireStoreCore, projectAuth };
