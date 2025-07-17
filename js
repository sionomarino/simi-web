import { db } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Referencias a los datos
const voltRef = ref(db, 'emmother/voltaje');
const ampRef = ref(db, 'emmother/corriente');
const wattRef = ref(db, 'emmother/potencia');
const energyRef = ref(db, 'emmother/energia');
const costRef = ref(db, 'emmother/costo');

// Función para actualizar los valores en pantalla
function actualizarDato(refDB, elementoID, unidad = "", decimales = 2) {
  onValue(refDB, (snapshot) => {
    const val = snapshot.val();
    document.getElementById(elementoID).innerText = val !== null ? val.toFixed(decimales) + " " + unidad : "--";
  });
}

// Llamadas para cada campo
actualizarDato(voltRef, 'voltaje', 'V', 1);
actualizarDato(ampRef, 'corriente', 'A', 2);
actualizarDato(wattRef, 'potencia', 'W', 0);
actualizarDato(energyRef, 'energia', 'kWh', 3);
actualizarDato(costRef, 'costo', '$', 2);
