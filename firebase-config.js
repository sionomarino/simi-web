import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6ez2tHn1EnZKm1rsZMVy17agEEi8DKS0",
  authDomain: "simi-base.firebaseapp.com",
  databaseURL: "https://simi-base-default-rtdb.firebaseio.com",
  projectId: "simi-base",
  storageBucket: "simi-base.appspot.com",
  messagingSenderId: "557267866326",
  appId: "1:557267866326:web:eb5fc20055635046eb2f77",
  measurementId: "G-G6B14VPJM1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
