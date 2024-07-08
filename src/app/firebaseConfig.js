import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoQ_fBxAc786QuqMWIPQTyBRNughwTU-s",
  authDomain: "ip-website-70929.firebaseapp.com",
  projectId: "ip-website-70929",
  storageBucket: "ip-website-70929.appspot.com",
  messagingSenderId: "760260868942",
  appId: "1:760260868942:web:a78e711850d0ba417d7c1f",
  measurementId: "G-SPMV5YCDR1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
