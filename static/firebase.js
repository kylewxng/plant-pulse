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

const auth = getAuth(firebaseApp);
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginSubmit");
    if (loginButton) {
        loginButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            loginEmailPassword();
        });
    }

    const signupButton = document.getElementById("signupSubmit");
    if(signupButton){
        signupButton.addEventListener("click", (event) => {
            event.preventDefault();
            createAccount();
        });
    }

    // const logoutButton = document.getElementById("logoutButton");
    // if(logoutButton){
    //     logoutButton.addEventListener("click", (event) => {
    //         event.preventDefault();
    //         logout();
    //     });
    // }
});

const loginEmailPassword = async () => {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPass").value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        const user = userCredential.user;

        if (!user.emailVerified) {
            alert("Please verify your email before logging in.");
            await signOut(auth);
            return;
        }else{
            console.log("User logged in:", user);
        }
    } catch (error) {
        console.error("Error logging in:", error.message);
        alert("Login Error: " + error.message);
    }
};


const createAccount = async () => {
    const signupEmail = document.getElementById("signupEmail").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();
    const signupPassword = document.getElementById("signupPass").value;
    if(signupEmail==confirmEmail){
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
            console.log("User Created:", userCredential.user);

            await sendEmailVerification(userCredential.user);
            alert("Verification email sent! Please check your inbox before logging in.");
            await signOut(auth);
            window.location.replace("/login"); 

            console.log("User Created (Verification Pending):", user);
        } catch (error) {
            console.error("Error Creating User:", error.message);
        }
    }else{
        alert("Emails do not match!");
    }
}

const logout = async () => {
    await signOut(auth);
}

let firstLoad = true; 
const monitorAuthState = () => {
    onAuthStateChanged(auth, (user) => {
        console.log("Auth state changed:", user);

        const currentPage = window.location.pathname;

        if (user) {
            console.log("User is logged in:", user);

            if (!user.emailVerified) {
                signOut(auth);
                window.location.replace("/login");
                return;
            }

            // If user is on login page but already logged in, redirect to home
            if (currentPage === "/login") {
                window.location.replace("/");
            }
        } else {
            console.log("User is logged out.");

            // If user is not logged in and not already on login page, redirect them
            if (currentPage !== "/login") {
                if (!firstLoad) alert("You have logged out!");
                window.location.replace("/login");
            }
        }

        firstLoad = false;
    });
};


monitorAuthState();