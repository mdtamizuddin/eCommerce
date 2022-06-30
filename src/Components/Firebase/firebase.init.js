import { initializeApp, } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDse8e9zjpXzl95SKh5uE8I5m4W0hCPn50",
    authDomain: "projects-for-portfolio.firebaseapp.com",
    projectId: "projects-for-portfolio",
    storageBucket: "projects-for-portfolio.appspot.com",
    messagingSenderId: "1038691751763",
    appId: "1:1038691751763:web:a66c1f06f22bd46cf5b3a6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth