
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnShKPKieY-ozV82CqAH4pzN87aYCf41U",
    authDomain: "studyeasy-icsi518-team-10.firebaseapp.com",
    projectId: "studyeasy-icsi518-team-10",
    storageBucket: "studyeasy-icsi518-team-10.appspot.com",
    messagingSenderId: "483261484677",
    appId: "1:483261484677:web:87736716c56d80f064a3ec",
    measurementId: "G-2K6F0QSQVQ"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage=getStorage(app);