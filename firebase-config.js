// firebase-config.js

// Importar desde Firebase versión modular (v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Configuración de tu proyecto Firebase
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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar base de datos
const db = getDatabase(app);

// Exportar para que lo uses en script.js
export { db, ref, onValue };
