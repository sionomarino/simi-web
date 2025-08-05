import { supabase } from "./supabase-config.js";

// Función para cargar el último dato insertado en la tabla emmother_data
async function actualizarDatos() {
  try {
    const { data, error } = await supabase
      .from("emmother_data")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(1)
      .maybeSingle(); // ⚠ Esta línea evita el error de "multiple rows"

    if (error) {
      console.error("❌ Error al leer datos de Emmother:", error.message);
      return;
    }

    if (!data) {
      console.warn("⚠ No se encontraron datos en la tabla emmother_data.");
      return;
    }

    // Actualizar HTML
    document.getElementById("voltaje").innerText = data.voltaje?.toFixed(1) ?? "--";
    document.getElementById("corriente").innerText = data.corriente?.toFixed(2) ?? "--";
    document.getElementById("potencia").innerText = data.potencia?.toFixed(0) ?? "--";
    document.getElementById("energia").innerText = data.energia?.toFixed(3) ?? "--";
    document.getElementById("costo").innerText = data.costo?.toFixed(2) ?? "--";
  } catch (e) {
    console.error("🚨 Excepción al leer datos:", e);
  }
}

// Llamar cada 5 segundos
setInterval(actualizarDatos, 5000);
actualizarDatos();

// Control de EMSON (ON/OFF)
async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);

  if (error) {
    console.error("❌ Error al cambiar estado EMSON:", error.message);
  } else {
    document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
  }
}

// Exponer función al HTML globalmente
window.cambiarEstado = cambiarEstado;
