// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.env.VITE_APIKEY,
authDomain:import.env.VITE_AUTHDOMAIN,
projectId:import.env.VITE_PROJECTID,
storageBucket:import.env.VITE_STORAGEBUCKET,
messagingSenderId:import.env.VITE_MESSAGINGSENDERID,
appId:import.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;