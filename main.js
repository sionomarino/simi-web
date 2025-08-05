import { supabase } from './supabase-config.js';

async function actualizarDatos() {
  const { data, error } = await supabase
    .from("emmother_data")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(1);  // ✅ nos aseguramos que venga solo una fila

  if (error || !data || data.length === 0) {
    console.error("Error al leer datos de Emmother:", error?.message || "No hay datos");
    return;
  }

  const em = data[0];

  document.getElementById("voltaje").innerText = em.voltaje?.toFixed(1) ?? "--";
  document.getElementById("corriente").innerText = em.corriente?.toFixed(2) ?? "--";
  document.getElementById("potencia").innerText = em.potencia?.toFixed(0) ?? "--";
  document.getElementById("energia").innerText = em.energia?.toFixed(3) ?? "--";
  document.getElementById("costo").innerText = em.costo?.toFixed(2) ?? "--";
}

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

setInterval(actualizarDatos, 5000);
actualizarDatos();

window.cambiarEstado = cambiarEstado;
