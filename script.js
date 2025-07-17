import { db } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

function actualizarDato(id, valor, decimales = 2) {
  const elemento = document.getElementById(id);
  if (elemento && valor !== undefined) {
    elemento.textContent = parseFloat(valor).toFixed(decimales);
  }
}

// Emmother (medición total del hogar)
const refEmmother = ref(db, 'emmother/');
onValue(refEmmother, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    actualizarDato("voltaje", data.voltaje, 1);
    actualizarDato("corriente", data.corriente, 2);
    actualizarDato("potencia", data.potencia, 0);
    actualizarDato("energia", data.energia, 3);
    actualizarDato("costo", data.costo, 2);
  }
});
