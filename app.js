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
    console.warn("No hay peliculas");
    return;
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
  console.log(`Peliculas: ${lista.length}`);
  console.log(`Duracion total: ${suma} min`);
  console.log(`Duracion medio: ${media.toFixed(1)} min`);
  console.log(`La más larga: ${maximo.titulo} (${maximo.duracion} min)`);
}


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

//showItems(peliculas1);
//showItems(peliculas2);

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

estadisticas(peliculas1);