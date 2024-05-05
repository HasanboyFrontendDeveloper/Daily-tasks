import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0KpGOJiAV6qAyUStKI1Iv4fLb8UaiZbo",
  authDomain: "daily-tasks-500ae.firebaseapp.com",
  projectId: "daily-tasks-500ae",
  storageBucket: "daily-tasks-500ae.appspot.com",
  messagingSenderId: "622319538518",
  appId: "1:622319538518:web:82a0fe3f71f641e0ffc6f7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };
