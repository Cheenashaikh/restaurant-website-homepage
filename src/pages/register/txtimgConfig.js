import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgQAOrbbs6HSjZAb8ytz5Ny300D0XyTGc",
  authDomain: "txtimage-28314.firebaseapp.com",
  projectId: "txtimage-28314",
  storageBucket: "txtimage-28314.appspot.com",
  messagingSenderId: "608916604670",
  appId: "1:608916604670:web:8d21f564bfa528d471c7af",
};


const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export { imgDB, txtDB };


