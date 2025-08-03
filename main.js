import { supabase } from "./supabase-config.js";

// 🔄 ACTUALIZAR DATOS DE EMMOTHER
async function actualizarDatos() {
  const { data, error } = await supabase
    .from("emmother")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error al leer datos de Emmother:", error);
    return;
  }

  document.getElementById("voltaje").innerText = data.voltaje?.toFixed(1) ?? "--";
  document.getElementById("corriente").innerText = data.corriente?.toFixed(2) ?? "--";
  document.getElementById("potencia").innerText = data.potencia?.toFixed(0) ?? "--";
  document.getElementById("energia").innerText = data.energia?.toFixed(3) ?? "--";
  document.getElementById("costo").innerText = data.costo?.toFixed(2) ?? "--";
}

// 🔘 CONTROL DE EMSON
async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);

  if (!error) {
    document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
  } else {
    console.error("Error al cambiar estado de Emson:", error);
  }
}

// Actualización automática cada 5 segundos
setInterval(actualizarDatos, 5000);
actualizarDatos();

// Exponer función al HTML global
window.cambiarEstado = cambiarEstado;
