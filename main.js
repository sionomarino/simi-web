// main.js
import { supabase } from "./supabase-config.js";

// Función para cargar los datos del Emmother desde Supabase\async function actualizarDatos() {
  const { data, error } = await supabase
    .from("emmother_data")
    .select("voltaje, corriente, potencia, energia, costo")
    .order("timestamp", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Error al obtener datos:", error);
    return;
  }

  if (data && data.length > 0) {
    const { voltaje, corriente, potencia, energia, costo } = data[0];
    document.getElementById("voltaje").innerText = voltaje.toFixed(1);
    document.getElementById("corriente").innerText = corriente.toFixed(2);
    document.getElementById("potencia").innerText = potencia.toFixed(0);
    document.getElementById("energia").innerText = energia.toFixed(3);
    document.getElementById("costo").innerText = costo.toFixed(2);
  }
}

// Función para cambiar el estado del Emson (encender/apagar)
async function cambiarEstado(encender) {
  const { error } = await supabase
    .from("emson_control")
    .update({ estado: encender ? "on" : "off" })
    .eq("id", 1);

  if (error) {
    console.error("Error al cambiar estado:", error);
  } else {
    document.getElementById("estado").innerText = encender ? "Encendido" : "Apagado";
  }
}

// Cargar los datos periódicamente
setInterval(actualizarDatos, 5000);
actualizarDatos();


Listo. El archivo main.js ahora está correctamente actualizado para:

Leer los datos de emmother_data desde Supabase.

Mostrar en pantalla voltaje, corriente, potencia, energía y costo.

Permitir encender/apagar el Emson desde la web, actualizando el valor de estado en Supabase.


Asegurate de tener:

Una tabla emmother_data con las columnas: voltaje, corriente, potencia, energia, costo, timestamp.

Una tabla emson_control con una fila con id=1 y una columna estado.


¿Querés que ahora te actualice también el HTML y el archivo de configuración (supabase-config.js) para asegurar que todo esté correctamente conectado?
