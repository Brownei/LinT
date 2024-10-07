import { FirebaseError, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKECT,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});
export const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();


export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleAuthProvider);
}

export async function signInWthCredentials(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function createAccountWithCredentials(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function firebaseErrorBypass(email, password) {
  const response = await createAccountWithCredentials(email, password)
  return response.user;
}
