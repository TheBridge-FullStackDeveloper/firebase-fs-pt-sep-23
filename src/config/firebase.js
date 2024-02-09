import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx__i7rRuEjRywj8CefHbGAmQ74xkLXGM",
  authDomain: "animals-app-7d80c.firebaseapp.com",
  projectId: "animals-app-7d80c",
  storageBucket: "animals-app-7d80c.appspot.com",
  messagingSenderId: "300651479695",
  appId: "1:300651479695:web:a51a532e0356d7504366fa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  storage,
}