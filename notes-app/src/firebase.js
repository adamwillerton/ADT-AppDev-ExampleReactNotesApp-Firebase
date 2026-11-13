import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
// Paste the values Firebase gave you in Step 2
const firebaseConfig = {
  apiKey: "AIzaSyDhH7y1tBASJkeDeZCTdCD7hsk_0fW5qvo",
  authDomain: "adamstestproj.firebaseapp.com",
  projectId: "adamstestproj",
  storageBucket: "adamstestproj.firebasestorage.app",
  messagingSenderId: "353636336967",
  appId: "1:353636336967:web:97d6c24037303a6849f862"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
