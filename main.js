import { supabase } from './supabase-config.js';

// Actualiza los datos del monitoreo desde Emmother
async function actualizarDatos() {
  const { data, error } = await supabase
    .from("emmother_data")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(1);

  if (error || !data.length) {
    console.error("Error al leer datos de Emmother:", error);
    return;
  }

  const em = data[0];

  document.getElementById("voltaje").innerText = em.voltaje?.toFixed(1) ?? "--";
  document.getElementById("corriente").innerText = em.corriente?.toFixed(2) ?? "--";
  document.getElementById("potencia").innerText = em.potencia?.toFixed(0) ?? "--";
  document.getElementById("energia").innerText = em.energia?.toFixed(3) ?? "--";
  document.getElementById("costo").innerText = em.costo?.toFixed(2) ?? "--";
}

// Cambia el estado del Emson (control remoto)
async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);

  if (!error) {
    document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
  } else {
    console.error("Error al cambiar estado del EMSON:", error);
  }
}

// Consulta periódica
setInterval(actualizarDatos, 5000);
actualizarDatos();

// Exponer función para botones del HTML
window.cambiarEstado = cambiarEstado;
