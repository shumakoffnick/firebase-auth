import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADsfunweaOayUOC9i0Ecz91o25SJl6qcg",
  authDomain: "authproject-40828.firebaseapp.com",
  projectId: "authproject-40828",
  storageBucket: "authproject-40828.appspot.com",
  messagingSenderId: "36380918098",
  appId: "1:36380918098:web:86fdf84188adbe61f43a8b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
