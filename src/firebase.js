import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfv3dTFyHPtTGMjBjJIeQCawYC6wZX4qc",
  authDomain: "homero-y-arlet.firebaseapp.com",
  projectId: "homero-y-arlet",
  storageBucket: "homero-y-arlet.firebasestorage.app",
  messagingSenderId: "469331497114",
  appId: "1:469331497114:web:7642ad3209fd4449aa4f23",
  measurementId: "G-GNBTKBGWNN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
