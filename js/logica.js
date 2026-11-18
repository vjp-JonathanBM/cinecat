import { Pelicula } from "./peliculas.js";

/**
 * Muestra por consola cada elemento de la lista.
 * @param {Array} items - Lista de elementos a mostrar.
 * @returns {void} No devuelve nada.
 */
function showItems(items) {
  items.forEach(v => console.log(v));
}

/**
 * Filtra las películas cuyo año está dentro de un rango (ambos incluidos).
 * @param {Array} items - Lista de películas.
 * @param {number} desde - Año mínimo.
 * @param {number} hasta - Año máximo.
 * @returns {Array} Nuevo array con las películas dentro del rango.
 */
function filterByYear(items, desde, hasta) {
  return items.filter(v => v.anno >= desde && v.anno <= hasta);
}

/**
 * Cuenta cuántas películas hay de un género y lo muestra por consola.
 * @param {Array} items - Lista de películas.
 * @param {string} genre - Género a contar (debe coincidir exactamente).
 * @returns {void} No devuelve nada, solo imprime el resultado.
 */
export function countByCategory(items, genre) {
  const count = items.filter(v => v.genero === genre).length;
  console.log(count, "peliculas encontradas del genero:", genre);
}

/**
 * Busca películas cuyo título contenga el texto indicado,
 * sin distinguir mayúsculas de minúsculas.
 * @param {Array} items - Lista de películas.
 * @param {string} text - Texto a buscar dentro del título.
 * @returns {Array} Nuevo array con las películas encontradas.
 */
export function buscarPorTexto(items, text) {
  const textMinus = text.toLowerCase();
  return items.filter(v => v.titulo.toLowerCase().includes(textMinus));
}

/**
 * Añade una película a la lista asignándole un id nuevo
 * (el mayor id existente + 1). No modifica el objeto original,
 * guarda una copia con el id asignado.
 * @param {Array} items - Lista de películas donde se añade.
 * @param {Object} item - Película a añadir (sin id).
 * @returns {number} El id asignado a la nueva película.
 */
export function annadir(items, item) {
  let maxId = 0;
  items.forEach(v => {
    if (v.id > maxId) maxId = v.id;
  });

  const nuevoId = maxId + 1;
  const nuevaPelicula = new Pelicula(item);
  nuevaPelicula._id = nuevoId;
  items.push(nuevaPelicula);
  return nuevoId;
}

/**
 * Elimina de la lista la película con el id indicado.
 * @param {Array} items - Lista de películas.
 * @param {number} id - Id de la película a eliminar.
 * @returns {boolean} true si se eliminó, false si no existe ese id.
 */
export function eliminarPorId(items, id) {
  const index = items.findIndex(v => v.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
}

/**
 * Muestra las estadisticas generales de las peliculas junto con 
 * la duracion mas larga.
 * @param {Array} lista - Lista de elementos a mostrar.
 * @returns {void} No retorna nada.
 */
export function estadisticas(lista) {
  if (lista.length === 0) {
    return null;
  }

  let suma = 0;
  let maximo = lista[0];

  for (const film of lista) {
    suma += film.duracion;

    if (film.duracion > maximo.duracion) {
      maximo = film;
    }
  }

  const media = suma / lista.length;

  return {
    total: lista.length,
    duracionTotal: suma,
    media: media.toFixed(1),
    maximo: `${maximo.titulo} (${maximo.duracion} min)`
  };
}

// Devuelve la clase CSS correspondiente al género.
export function obtenerClaseGenero(genero) {
  switch (genero.toLowerCase()) {
    case "acción":
      return "tarjeta-accion";

    case "comedia":
      return "tarjeta-comedia";

    case "terror":
      return "tarjeta-terror";

    case "romance":
      return "tarjeta-romance";

    case "drama":
      return "tarjeta-drama";

    case "ciencia ficción":
      return "tarjeta-ciencia-ficcion";

    case "animación":
      return "tarjeta-animacion";

    case "deportes":
      return "tarjeta-deportes";

    case "crimen":
      return "tarjeta-crimen";

    case "aventura":
      return "tarjeta-aventura";

    default:
      return "";
  }
}

// Convierte una fecha de texto en un objeto Date.
function crearFecha(texto) {
  return new Date(texto + "T00:00");
}

// Muestra la fecha en un formato legible.
export function fechaLegible(texto) {
  return crearFecha(texto).toLocaleDateString("es-ES",
    { day: "numeric", month: "long", year: "numeric" });
}

// Comprueba los años que han pasado desde la fecha que le pasamos
export function annosDesde(texto) {
  const fecha = crearFecha(texto);
  const hoy = new Date();

  let annos = hoy.getFullYear() - fecha.getFullYear();

  const aniversario = new Date(hoy.getFullYear(), fecha.getMonth(), fecha.getDate());

  if (hoy < aniversario) annos--;

  return annos;
}

//Extrae los datos del formulario
export function extraerFormulario() {
  const nuevaPelicula = {
    titulo: document.querySelector("#nuevoTitulo").value,
    director: document.querySelector("#nuevoDirector").value,
    duracion: Number(document.querySelector("#nuevaDuracion").value),
    genero: document.querySelector("#nuevoGenero").value,
    estreno: document.querySelector("#nuevoEstreno").value,
    anno: Number(document.querySelector("#nuevoEstreno").value.slice(0, 4))
  };
  return nuevaPelicula;
}

// Ordena una copia sin modificar la lista original.
export function ordenar(lista, criterio) {
  const copia = [...lista];
  if (criterio === "titulo") {
    copia.sort((a, b) =>
      a.titulo.localeCompare(b.titulo));
  } else if (criterio === "duracion") {
    copia.sort((a, b) => a.duracion - b.duracion);
  }
  else if (criterio === "estreno") {
    copia.sort((a, b) => crearFecha(b.estreno) - crearFecha(a.estreno));
  }
  return copia;
}