import * as firebase from "firebase/app"
import 'firebase/compat/auth'
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyA-1Zv2sS3bvZzP3Rka_NVOVtt3bFiAtLKg",
    authDomain: "react-and-firebase-c461f.firebaseapp.com",
    projectId: "react-and-firebase-c461f",
    storageBucket: "react-and-firebase-c461f.appspot.com",
    messagingSenderId: "442670630463",
    appId: "1:442670630463:web:9505c1dd6b58143ab25a8a",
    measurementId: "G-JGPRYV80TJ"
};
const firebases = initializeApp(config)
const auth = getAuth()

export default firebases