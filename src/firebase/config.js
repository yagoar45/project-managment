import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Firebase config aqui embaixo
const firebaseConfig = {
  apiKey: "AIzaSyAt1XrbtKoYfLB8kgd3ODtkyjigJa9SQJY",
  authDomain: "getitdone-78356.firebaseapp.com",
  projectId: "getitdone-78356",
  storageBucket: "getitdone-78356.appspot.com",
  messagingSenderId: "154639361320",
  appId: "1:154639361320:web:8579ed39d94bafcc0e1c1d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
