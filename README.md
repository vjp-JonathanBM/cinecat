# Cinecat 🎬

## 1. Descripción del proyecto

Cinecat es un catálogo de películas desarrollado con HTML, CSS y JavaScript.

La aplicación permite visualizar películas en tarjetas, buscar por título, ordenar por diferentes criterios y añadir nuevas películas.

El proyecto es individual.

## 2. Campos de las películas

Cada película contiene los siguientes campos:

- `id`: identificador único de la película.
- `titulo`: título de la película.
- `director`: nombre del director.
- `anno`: año de estreno.
- `estreno`: fecha completa de estreno.
- `genero`: género cinematográfico.
- `duracion`: duración en minutos.

## 3. Sprint 0

En el Sprint 0 se ha realizado lo siguiente:

- Creación de dos listas de películas.
- Definición de los campos de cada película.
- Implementación de funciones para trabajar con los datos.
- Pruebas de las funciones por consola.

### Funciones implementadas

- `showItems(items)`: muestra las películas por consola.
- `filterByYear(items, desde, hasta)`: filtra películas por un rango de años.
- `countByCategory(items, genre)`: cuenta las películas de un género.
- `buscarPorTexto(items, text)`: busca películas por título sin distinguir mayúsculas y minúsculas.
- `annadir(items, item)`: añade una película y le asigna un identificador nuevo.
- `eliminarPorId(items, id)`: elimina una película por su identificador.

## 4. Sprint 1

En el Sprint 1 se ha creado la interfaz web de Cinecat utilizando HTML, CSS y JavaScript.

### Página web

- Creación de la estructura HTML.
- Creación de tarjetas para mostrar las películas.
- Aplicación de diferentes colores según el género.
- Visualización de los datos de cada película.
- Cálculo y visualización de estadísticas de las películas.

### Búsqueda y ordenación

- Buscador de películas por título.
- Búsqueda sin distinguir mayúsculas y minúsculas.
- Ordenación alfabética por título.
- Ordenación por duración.
- Ordenación por fecha de estreno.
- Posibilidad de buscar y ordenar al mismo tiempo.
- Resumen de cuántas películas se están mostrando.

### Cookies, fechas y validación

- Uso de cookies para guardar el último criterio de ordenación.
- Recuperación del orden seleccionado al recargar la página.
- Almacenamiento de fechas con formato `AAAA-MM-DD`.
- Visualización de las fechas en un formato más fácil de leer.
- Destacado de las películas estrenadas durante el último mes.
- Formulario para añadir nuevas películas.
- Validación del título mediante una expresión regular.
- Avisos cuando los datos introducidos no son válidos.

### Funciones añadidas

- `estadisticas(lista)`: calcula las estadísticas de las películas.
- `pintarEstadisticas(lista)`: muestra las estadísticas en la página.
- `pintar(list)`: muestra las películas en tarjetas.
- `crearTarjeta(elemento)`: crea una tarjeta para cada película.
- `obtenerClaseGenero(genero)`: asigna una clase CSS según el género.
- `fechaLegible(texto)`: convierte la fecha a un formato legible.
- `ordenar(lista, criterio)`: ordena las películas según el criterio seleccionado.
- `actualizar()`: actualiza el listado, el resumen y las estadísticas.
- `pintarResumen(peliculasFiltradas)`: muestra cuántas películas aparecen.
- `guardarCookie(nombre, valor, dias)`: guarda una cookie.
- `leerCookie(nombre)`: recupera el valor de una cookie.
- `elegirOrden(nuevo)`: cambia el criterio de ordenación.
- `annadirPeliculaPorFormulario`: annade peliculas con el formulario, aparte tambien he hecho mas funciones mas auxiliares para reducir logica

## 5. Cómo ejecutar el proyecto

Para ejecutar Cinecat:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` con Live Server.
4. La aplicación se abrirá en el navegador.

Desde la página se pueden consultar las películas, buscarlas, ordenarlas y añadir nuevas.

No es necesario instalar Node.js para utilizar la interfaz web.

## 6. Uso de inteligencia artificial

Se ha utilizado inteligencia artificial como ayuda para redactar y organizar el README.

El código y su funcionamiento se han trabajado durante las sesiones del proyecto.