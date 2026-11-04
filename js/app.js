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
function countByCategory(items, genre) {
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
function buscarPorTexto(items, text) {
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
function annadir(items, item) {
  let maxId = 0;
  items.forEach(v => {
    if (v.id > maxId) maxId = v.id;
  });

  const nuevoId = maxId + 1;
  items.push({ ...item, id: nuevoId });
  return nuevoId;
}

/**
 * Elimina de la lista la película con el id indicado.
 * @param {Array} items - Lista de películas.
 * @param {number} id - Id de la película a eliminar.
 * @returns {boolean} true si se eliminó, false si no existe ese id.
 */
function eliminarPorId(items, id) {
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
function estadisticas(lista) {
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

function pintarEstadisticas(lista) {
  const resultado = estadisticas(lista);
  const elemento = document.querySelector("#estadisticas");

  if (resultado === null) {
    elemento.textContent = "No hay películas para mostrar.";
    return;
  }

  elemento.textContent = `Películas: ${resultado.total} | Duración total: ${resultado.duracionTotal} min | Duración media: ${resultado.media} min | La más larga: ${resultado.maximo}`;
}

function pintar(list) {
  const article = document.querySelector("#listado");
  article.replaceChildren();
  for (const film of list) {
    article.append(crearTarjeta(film));
  }
}


function obtenerClaseGenero(genero) {
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


function crearTarjeta(elemento) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  tarjeta.classList.add(obtenerClaseGenero(elemento.genero));

  const titulo = document.createElement("h3");
  titulo.textContent = elemento.titulo;

  const parrafo = document.createElement("p");

  parrafo.textContent =
    "Id: " + elemento.id +
    "Genero: " + elemento.genero +
    "Año: " + elemento.anno +
    "Duracion: " + elemento.duracion +
    "Director: " + elemento.director;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(parrafo);

  return tarjeta;
}

function ordenar(lista, criterio) {
  let listaAux = [...lista];
  switch (criterio) {
    case "id":
      listaAux.sort((a, b) => a.id - b.id);
      break;
    case "titulo":
      listaAux.sort((a, b) => a.titulo.localCompare(b.tilulo));
      break;
    case "director":
      listaAux.sort((a, b) => a.director.localCompare(b.director));
      break;
    case "anno":
      listaAux.sort((a, b) => a.anno - b.anno);
      break;
    case "genero":
      listaAux.sort((a, b) => a.genero.localCompare(b.genero));
      break;
    case "duracion":
      listaAux.sort((a, b) => a.duracion - b.duracion);
      break;
    default:
      console.error("Criterio incorrecto.");
      break;
  }
  return listaAux;
}

function actualizar() {
  let listaAux = buscarPorTexto(peliculas1, this.textoBuscado);
  listaAux = ordenar(listaAux, this.criterio)
  pintar(listaAux);
}

// Añadir atributo estreno con tipo fecha dd-mm-aaaa o algun formato similar, mirar en las diapositivas
const peliculas1 = [
  {
    id: 1,
    titulo: "Titanic",
    director: "James Cameron",
    anno: 1997,
    genero: "Romance",
    duracion: 195
  },
  {
    id: 2,
    titulo: "Avatar",
    director: "James Cameron",
    anno: 2009,
    genero: "Ciencia ficción",
    duracion: 162
  },
  {
    id: 3,
    titulo: "Origen",
    director: "Christopher Nolan",
    anno: 2010,
    genero: "Ciencia ficción",
    duracion: 148
  },
  {
    id: 4,
    titulo: "Gladiator",
    director: "Ridley Scott",
    anno: 2000,
    genero: "Acción",
    duracion: 155
  },
  {
    id: 5,
    titulo: "El padrino",
    director: "Francis Ford Coppola",
    anno: 1972,
    genero: "Drama",
    duracion: 175
  },
  {
    id: 6,
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anno: 2014,
    genero: "Ciencia ficción",
    duracion: 169
  },
  {
    id: 7,
    titulo: "Joker",
    director: "Todd Phillips",
    anno: 2019,
    genero: "Drama",
    duracion: 122
  },
  {
    id: 8,
    titulo: "Toy Story",
    director: "John Lasseter",
    anno: 1995,
    genero: "Animación",
    duracion: 81
  },
  {
    id: 9,
    titulo: "Tiburón",
    director: "Steven Spielberg",
    anno: 1975,
    genero: "Terror",
    duracion: 124
  },
  {
    id: 10,
    titulo: "Rocky",
    director: "John G. Avildsen",
    anno: 1976,
    genero: "Deportes",
    duracion: 119
  }
];
const peliculas2 = [
  {
    id: 11,
    titulo: "Matrix",
    director: "Lana y Lilly Wachowski",
    anno: 1999,
    genero: "Ciencia ficción",
    duracion: 136
  },
  {
    id: 12,
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    anno: 1994,
    genero: "Drama",
    duracion: 142
  },
  {
    id: 13,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anno: 1994,
    genero: "Crimen",
    duracion: 154
  },
  {
    id: 14,
    titulo: "Los Vengadores",
    director: "Joss Whedon",
    anno: 2012,
    genero: "Acción",
    duracion: 143
  },
  {
    id: 15,
    titulo: "Coco",
    director: "Lee Unkrich",
    anno: 2017,
    genero: "Animación",
    duracion: 105
  },
  {
    id: 16,
    titulo: "Jurassic Park",
    director: "Steven Spielberg",
    anno: 1993,
    genero: "Aventura",
    duracion: 127
  },
  {
    id: 17,
    titulo: "Star Wars",
    director: "George Lucas",
    anno: 1977,
    genero: "Ciencia ficción",
    duracion: 121
  },
  {
    id: 18,
    titulo: "El rey león",
    director: "Roger Allers",
    anno: 1994,
    genero: "Animación",
    duracion: 88
  },
  {
    id: 19,
    titulo: "Regreso al futuro",
    director: "Robert Zemeckis",
    anno: 1985,
    genero: "Aventura",
    duracion: 116
  },
  {
    id: 20,
    titulo: "Piratas del Caribe",
    director: "Gore Verbinski",
    anno: 2003,
    genero: "Aventura",
    duracion: 143
  }
];
//TODO: Tengo que hacer los eventos de la sesion 11 B3
let textoBuscado = "";
let criterio = "ninguno";

/* showItems(peliculas1);
showItems(peliculas2); */

/* const filmsYear = filterByYear(peliculas1, 2000, 2010);
showItems(filmsYear);

countByCategory(peliculas1, "Ciencia ficción"); */


/* buscarPorTexto(peliculas1, "Avatar").forEach(v => console.log(v));

const item = {
  id: 11,
  titulo: "Matrix",
  director: "Lana y Lilly Wachowski",
  anno: 1999,
  genero: "Ciencia ficción",
  duracion: 136
};
annadir(peliculas1, item);
showItems(peliculas1);
console.log(eliminarPorId(peliculas1, 11)); */

//estadisticas(peliculas1);

pintar(peliculas1);
//04-11-2026

function guardarCookie(nombre, valor, dias) {
  const segundos = dias * 24 * 60 * 60;
  const texto = encodeURIComponent(valor); 
  document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
} 
function leerCookie(nombre) { 
  const partes = document.cookie.split("; ");
  for (const parte of partes) { const [clave, valor] = parte.split("=");
    if (clave === nombre) { 
      return decodeURIComponent(valor);
    } 
  } 
  return null;
}

function elegirOrden (nuevo) { 
  criterio = nuevo; 
  guardarCookie("orden", criterio, 30); 
  actualizar(); 
  document.querySelector("#ordenNombre") 
    .addEventListener("click", () => elegirOrden("nombre"));
    document.querySelector("#ordenTiempo") 
      .addEventListener("click", () => elegirOrden("tiempo"));
}

/* criterio = leerCookie("orden") ?? "ninguno"; 
actualizar(); */