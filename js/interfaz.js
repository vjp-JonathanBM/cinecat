import { buscarPorTexto } from "./logica.js";
import { annadir } from "./logica.js";
import { estadisticas } from "./logica.js";
import { obtenerClaseGenero } from "./logica.js";
import { fechaLegible } from "./logica.js";
import { annosDesde } from "./logica.js";
import { extraerFormulario } from "./logica.js";
import { ordenar } from "./logica.js";

import { datosPeliculas } from "./datos.js";
import { Pelicula } from "./peliculas.js";

const listaPeliculas = []
let textoBuscado = "";
let criterio = "ninguno";
export let resumen = "Mostrando";
const ANNOS_RECIENTE = 5;

function annadirPeliculaPorFormulario() {

  const titulo = document.querySelector("#nuevoTitulo").value;

  const patron = /^[a-zA-ZÁÉÍÓÚÜáéíóúüñÑ0-9 :.,'!?-]{2,50}$/;

  if (!patron.test(titulo)) {
    alert("El título debe tener entre 2 y 50 caracteres y no contener símbolos.");
    return;
  }

  const nuevaPelicula = extraerFormulario();

  const formularioValidado = validarFormulario(nuevaPelicula);

  if (!formularioValidado) return;

  const objetoPelicula = crearPelicula(nuevaPelicula);

  if(objetoPelicula === -1) {
    throw 
  }

  const nuevoId = annadir(listaPeliculas, nuevaPelicula);

  if (nuevoId !== false) {
    alert("Película añadida correctamente");

    limpiarFormulario();
    console.log(nuevaPelicula);
    actualizar();
  }

}

// Guarda una cookie.
function guardarCookie(nombre, valor, dias) {
  const segundos = dias * 24 * 60 * 60;
  const texto = encodeURIComponent(valor);
  document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
}

//Lee una cookie
function leerCookie(nombre) {
  const partes = document.cookie.split("; ");
  for (const parte of partes) {
    const [clave, valor] = parte.split("=");
    if (clave === nombre) {
      return decodeURIComponent(valor);
    }
  }
  return null;
}

// Ir añadiendo ifs segun quiera meter mas validaciones
function validarFormulario(nuevaPelicula) {
  if (nuevaPelicula.estreno === "") {
    alert("Selecciona una fecha de estreno.");
    return false;
  }
  return true;
}

//Limpia el formulario
function limpiarFormulario() {
  document.querySelector("#nuevoTitulo").value = "";
  document.querySelector("#nuevoGenero").value = "";
  document.querySelector("#nuevoDirector").value = "";
  document.querySelector("#nuevaDuracion").value = "";
  document.querySelector("#nuevoEstreno").value = "";
}

// TODO: Falla si meto un genero que no existe, ya lo arreglare
// Crea una tarjeta HTML para una película.
function crearTarjeta(elemento) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  tarjeta.classList.add(obtenerClaseGenero(elemento.genero));

  const titulo = document.createElement("h3");
  titulo.textContent = elemento.titulo;

  const parrafo = document.createElement("p");

  parrafo.textContent = elemento.descripcion();

  const fecha = document.createElement("p");
  fecha.classList.add("fecha");
  fecha.textContent = fechaLegible(elemento.estreno);

  if (annosDesde(elemento.estreno) < ANNOS_RECIENTE) {
    tarjeta.classList.add("reciente");
  }

  tarjeta.append(titulo, parrafo, fecha);

  return tarjeta;

}

// Muestra las tarjetas de las películas.
function pintar(list) {
  const article = document.querySelector("#listado");
  article.replaceChildren();
  for (const film of list) {
    article.append(crearTarjeta(film));
  }
}

// Muestra el número de películas encontradas.
function pintarResumen(peliculasFiltradas) {
  const resumenP = document.querySelector(".resumen");

  if (peliculasFiltradas.length > 0) {
    resumenP.textContent = "Mostrando " + peliculasFiltradas.length + " de " + listaPeliculas.length;
  } else {
    resumenP.textContent = "No hay peliculas que contengan << " + textoBuscado + ">>.";
  }
}

// Muestra las estadísticas en la página.
function pintarEstadisticas(lista) {
  const resultado = estadisticas(lista);
  const elemento = document.querySelector("#estadisticas");

  if (resultado === null) {
    elemento.textContent = "No hay películas para mostrar.";
    return;
  }

  elemento.textContent = `Películas: ${resultado.total} | Duración total: ${resultado.duracionTotal} min | Duración media: ${resultado.media} min | La más larga: ${resultado.maximo}`;
}

// Aplica búsqueda y ordenación y actualiza la página.
function actualizar() {
  const encontradas = buscarPorTexto(listaPeliculas, textoBuscado);
  const ordenadas = ordenar(encontradas, criterio);

  pintar(ordenadas);
  pintarResumen(ordenadas);
  pintarEstadisticas(ordenadas);
}

// Cambia el criterio de ordenación y lo guarda en una cookie.
function elegirOrden(nuevo) {
  criterio = nuevo;

  guardarCookie("orden", criterio, 30);
  actualizar();
}

document.querySelector("#anadirPelicula")
.addEventListener("click", () =>
  annadirPeliculaPorFormulario());

buscador.addEventListener("input", () => {
  textoBuscado = buscador.value;
  actualizar();
});

document.querySelector("#ordenTitulo")
  .addEventListener("click", () => elegirOrden("titulo"));

document.querySelector("#ordenDuracion")
  .addEventListener("click", () => elegirOrden("duracion"));

document.querySelector("#ordenEstreno")
  .addEventListener("click", () => elegirOrden("estreno"));

for ( const datos of datosPeliculas ) {
  listaPeliculas.push(new Pelicula( datos ));
}

criterio = leerCookie("orden") ?? "ninguno";
actualizar();
