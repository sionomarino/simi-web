// main.js
import { supabase } from "./supabase-config.js";

// Carga inicial
async function cargarDatos() {
  const { data, error } = await supabase
    .from("emmother_data")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(1);

  if (data && data.length) {
    const { voltaje, corriente, potencia, energia, costo } = data[0];
    document.getElementById("voltaje").innerText = voltaje.toFixed(1);
    document.getElementById("corriente").innerText = corriente.toFixed(2);
    document.getElementById("potencia").innerText = potencia.toFixed(0);
    document.getElementById("energia").innerText = energia.toFixed(3);
    document.getElementById("costo").innerText = costo.toFixed(2);
  }
}

async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);
  if (!error) {
    document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
  }
}

setInterval(cargarDatos, 5000);
cargarDatos();
