import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHk1M1Mw-Zppi3z6W4egO2z6OXupDjNX4",
  authDomain: "crypto-react-app.firebaseapp.com",
  projectId: "crypto-react-app",
  storageBucket: "crypto-react-app.appspot.com",
  messagingSenderId: "1013120717538",
  appId: "1:1013120717538:web:ccb572808b5a55815684bb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
