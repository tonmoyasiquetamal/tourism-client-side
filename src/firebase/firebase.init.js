import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initializing Firebase App
const initializingAuthentication = () => {
    initializeApp(firebaseConfig);
};
export default initializingAuthentication;
