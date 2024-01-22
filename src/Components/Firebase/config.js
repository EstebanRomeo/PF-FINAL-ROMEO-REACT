import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyD_l7hpGE6MVMbLEmD4wqPsVObRFHlwa4Y",
  authDomain: "pf-romeo.firebaseapp.com",
  projectId: "pf-romeo",
  storageBucket: "pf-romeo.appspot.com",
  messagingSenderId: "118827711276",
  appId: "1:118827711276:web:9315984f76779840418a89",
  measurementId: "G-M591NKN2BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const db = getFirestore(app);