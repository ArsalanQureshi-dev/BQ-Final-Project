// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from  'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzh1C-J_2aFq_e34TXU_e_ZNGqyMtt6Fs",
  authDomain: "admipanal.firebaseapp.com",
  projectId: "admipanal",
  storageBucket: "admipanal.appspot.com",
  messagingSenderId: "919477864507",
  appId: "1:919477864507:web:bae0bd1af87c4d5e8cf41e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)