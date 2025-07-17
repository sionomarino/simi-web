import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Tu config de Firebase
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

// Escuchar datos de Emmother
onValue(ref(db, "/Emmother"), (snapshot) => {
  const data = snapshot.val();
  document.getElementById("voltaje").innerText = data.voltaje?.toFixed(1);
  document.getElementById("corriente").innerText = data.corriente?.toFixed(2);
  document.getElementById("potencia").innerText = data.potencia?.toFixed(0);
  document.getElementById("energia").innerText = data.energia?.toFixed(3);
  document.getElementById("costo").innerText = data.costo?.toFixed(2);
});

// Control del Emson
const toggle = document.getElementById("toggleRelay");
toggle.addEventListener("change", () => {
  set(ref(db, "/Emson/estado"), toggle.checked);
});
