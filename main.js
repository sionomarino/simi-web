import { db, ref, onValue, set } from './firebase-config.js';

const voltSpan = document.getElementById("voltaje");
const corrSpan = document.getElementById("corriente");
const potSpan  = document.getElementById("potencia");
const enerSpan = document.getElementById("energia");
const costSpan = document.getElementById("costo");
const estadoSpan = document.getElementById("estado");

// Monitoreo - datos del Emmother
onValue(ref(db, "emmother"), (snapshot) => {
  const data = snapshot.val();
  voltSpan.innerText = data?.voltaje ?? "--";
  corrSpan.innerText = data?.corriente ?? "--";
  potSpan.innerText  = data?.potencia ?? "--";
  enerSpan.innerText = data?.energia ?? "--";
  costSpan.innerText = data?.costo ?? "--";
});

// Control - Emson
onValue(ref(db, "emson/estado"), (snapshot) => {
  const estado = snapshot.val();
  estadoSpan.innerText = estado ? "Encendido" : "Apagado";
});

document.getElementById("btn-encender").addEventListener("click", () => {
  set(ref(db, "emson/estado"), true);
});
document.getElementById("btn-apagar").addEventListener("click", () => {
  set(ref(db, "emson/estado"), false);
});
