// script.js o main.js

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { firebaseConfig } from "./firebase-config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🟡 Monitoreo (EMMOTHER)
const voltajeSpan = document.getElementById("voltaje");
const corrienteSpan = document.getElementById("corriente");
const potenciaSpan = document.getElementById("potencia");
const energiaSpan = document.getElementById("energia");
const costoSpan = document.getElementById("costo");

// Escuchar datos del Emmother
onValue(ref(db, "Emmother"), (snapshot) => {
  const data = snapshot.val();
  if (!data) return;
  voltajeSpan.textContent = data.voltaje ?? "--";
  corrienteSpan.textContent = data.corriente ?? "--";
  potenciaSpan.textContent = data.potencia ?? "--";
  energiaSpan.textContent = data.energia ?? "--";
  
  // Calcular costo estimado (ejemplo: $50 por kWh)
  const precioPorKwh = 50;
  const costo = (data.energia ?? 0) * precioPorKwh;
  costoSpan.textContent = costo.toFixed(2);
});

// 🔌 Control (EMSON)
const estadoSpan = document.getElementById("estado");

// Escuchar estado actual del relé
onValue(ref(db, "Emson/estado"), (snapshot) => {
  const estado = snapshot.val();
  estadoSpan.textContent = estado ? "Encendido" : "Apagado";
});

// Función para cambiar el estado del relé
window.cambiarEstado = function (nuevoEstado) {
  set(ref(db, "Emson/estado"), nuevoEstado);
};
