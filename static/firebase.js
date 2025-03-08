import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    signOut,
    sendEmailVerification,
} from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJoqbItPGEzTbMA_sovO13dbmSYxV6Z28",
    authDomain: "plant-pulse-c6385.firebaseapp.com",
    projectId: "plant-pulse-c6385",
    storageBucket: "plant-pulse-c6385.firebasestorage.app",
    messagingSenderId: "797968629781",
    appId: "1:797968629781:web:70e91d5cae6734eeee0e1c",
    measurementId: "G-43PHYM01Z8"
  });