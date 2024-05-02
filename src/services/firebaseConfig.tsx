
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD8nmVcXWzmpNyWcVwN7Pe5yaF9FiOnwUc",
  authDomain: "autenticacao-pm-912ff.firebaseapp.com",
  projectId: "autenticacao-pm-912ff",
  storageBucket: "autenticacao-pm-912ff.appspot.com",
  messagingSenderId: "895928018641",
  appId: "1:895928018641:web:63f4397fec6e31234b47f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)