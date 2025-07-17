import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { firebaseConfig } from './firebase-config.js';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Mostrar datos en tiempo real (Emmother)
onValue(ref(db, 'emmother'), (snapshot) => {
  const data = snapshot.val();
  document.getElementById("voltaje").innerText = data.voltaje ?? '--';
  document.getElementById("corriente").innerText = data.corriente ?? '--';
  document.getElementById("potencia").innerText = data.potencia ?? '--';
  document.getElementById("energia").innerText = data.energia ?? '--';
});

// Control de Emson
document.getElementById("btnEncender").addEventListener("click", () => {
  set(ref(db, 'emson/control'), "on");
});

document.getElementById("btnApagar").addEventListener("click", () => {
  set(ref(db, 'emson/control'), "off");
});

// Navegación entre secciones
window.showSection = function (id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
};
