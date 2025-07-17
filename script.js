import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Mostrar datos en la sección de monitoreo
const voltageEl = document.getElementById("voltage");
const currentEl = document.getElementById("current");
const powerEl = document.getElementById("power");
const energyEl = document.getElementById("energy");

const emmotherRef = ref(database, 'emmother');
onValue(emmotherRef, (snapshot) => {
  const data = snapshot.val();
  voltageEl.textContent = ${data.voltage} V;
  currentEl.textContent = ${data.current} A;
  powerEl.textContent = ${data.power} W;
  energyEl.textContent = ${data.energy} kWh;
});

// Controlar el relé del EMSON
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");

btnOn.addEventListener("click", () => {
  set(ref(database, 'emson'), { relay: 1 });
});

btnOff.addEventListener("click", () => {
  set(ref(database, 'emson'), { relay: 0 });
});
