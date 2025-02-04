// Replace with your actual Firebase config
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcmem_BUNysPl7mpsmfmrZO_37iIUhsJ8",
    authDomain: "a-react-web-app.firebaseapp.com",
    projectId: "a-react-web-app",
    storageBucket: "a-react-web-app.firebasestorage.app",
    messagingSenderId: "135318109663",
    appId: "1:135318109663:web:30c4fc5940e0cf5643186a",
    measurementId: "G-J90NK2DDQJ"
  };

const app = initializeApp(firebaseConfig);

export default app;
