import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBaubFkj6-FMFrRztb-gPH1mtfTPISJ-2c",
  authDomain: "pharmcy-5cff7.firebaseapp.com",
  projectId: "pharmcy-5cff7",
  storageBucket: "pharmcy-5cff7.appspot.com",
  messagingSenderId: "325504427935",
  appId: "1:325504427935:web:9fecb47c8a4e1e1c6bffaa",
  measurementId: "G-MHTPT3LHK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;