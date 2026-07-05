import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAHbitGTU2XEi-sdwEGVDtJCtrXS68cvr8",
  authDomain: "adminlogin-65d7b.firebaseapp.com",
  projectId: "adminlogin-65d7b",
  storageBucket: "adminlogin-65d7b.firebasestorage.app",
  messagingSenderId: "1027739124625",
  appId: "1:1027739124625:web:1eff97c7f232ab4142d030"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)



export default app;