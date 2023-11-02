// src/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';  // Importation de AsyncStorage

//Importationde Firestore
import { getFirestore } from "firebase/firestore";

import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID, 
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID

};




let app;
let auth;
let db;

try {
  console.log("Tentative d'initialisation de Firebase... 🤞");
  app = initializeApp(firebaseConfig);
  console.log("Firebase a été initialisé avec succès ! 🎉");
} catch (error) {
  console.log("Erreur lors de l'initialisation de Firebase 😢: ", error);
}

if (!auth) {
  try {
    console.log("Tentative d'initialisation du service d'authentification Firebase... 🛡️");
    auth = initializeAuth(app, {
              persistence: getReactNativePersistence(ReactNativeAsyncStorage),
            });
    console.log("Le service d'authentification est prêt à l'emploi ! 🚀");
  } catch (error) {
    console.log("Erreur lors de l'initialisation du service d'authentification 😢: ", error);
  }
}

if (!db) {
  try {
    console.log("Tentative d'initialisation de Firestore... 📝");
    db = getFirestore(app);
    console.log("Firestore a été initialisé avec succès ! 🎉");
  } catch (error) {
    console.log("Erreur lors de l'initialisation de Firestore 😢: ", error);
  }
}



