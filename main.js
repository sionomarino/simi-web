// main.js
import { supabase } from "./supabase-config.js";

// === Función para cargar datos del EMOTHER ===
async function actualizarDatos() {
  const { data, error } = await supabase
    .from('emmother_data')
    .select('*')
    .eq('id', 1)
    .single();

  if (error) {
    console.error("Error al leer datos:", error);
    return;
  }

  document.getElementById("voltaje").innerText = data.voltaje?.toFixed(1) ?? "--";
  document.getElementById("corriente").innerText = data.corriente?.toFixed(2) ?? "--";
  document.getElementById("potencia").innerText = data.potencia?.toFixed(0) ?? "--";
  document.getElementById("energia").innerText = data.energia?.toFixed(3) ?? "--";
  document.getElementById("costo").innerText = data.costo?.toFixed(2) ?? "--";
}

// === Función para cambiar el estado del EMSON ===
async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);

  if (error) {
    console.error("Error al cambiar estado:", error);
    return;
  }

  document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
}

// === Función para leer el estado actual del EMSON ===
async function leerEstadoEmson() {
  const { data, error } = await supabase
    .from("emson_control")
    .select("estado")
    .eq("id", 1)
    .single();

  if (!error && data) {
    document.getElementById("estado").innerText = data.estado === "on" ? "Encendido" : "Apagado";
  }
}

// === Cargar datos al iniciar y refrescar ===
actualizarDatos();
leerEstadoEmson();
setInterval(() => {
  actualizarDatos();
  leerEstadoEmson();
}, 5000);

// === Exponer funciones al HTML ===
window.cambiarEstado = cambiarEstado;
