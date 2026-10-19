# Cinecat

# Tema: Web catalogo de películas
# Elemento: Películas
# 6 campos: Titulo, anno ... lo que salga que seran mas de 6
# Individual
# cinecat

# Cinecat 🎬

## 1. Descripción del proyecto

Cinecat es un catálogo de películas desarrollado en JavaScript. Permite consultar, buscar, filtrar, añadir y eliminar películas.

## 2. Campos de las películas

Cada película contiene los siguientes campos:

- `id`: identificador de la película.
- `titulo`: título de la película.
- `director`: nombre del director.
- `anno`: año de estreno.
- `genero`: género cinematográfico.
- `duracion`: duración en minutos.

## 3. Funciones implementadas

- **`showItems(items)`**: muestra todas las películas por consola.
- **`filterByYear(items, desde, hasta)`**: filtra películas por rango de años.
- **`countByCategory(items, genre)`**: cuenta las películas de un género.
- **`buscarPorTexto(items, text)`**: busca películas por título sin distinguir mayúsculas y minúsculas.
- **`annadir(items, item)`**: añade una película y le asigna un identificador nuevo.
- **`eliminarPorId(items, id)`**: elimina una película por su identificador.

## 4. Trabajo realizado en el sprint

- Creación de dos listas con 20 películas.
- Definición de los campos de cada película.
- Implementación de las funciones de búsqueda, filtrado, recuento, inserción y eliminación.
- Prueba de algunas funciones por consola.

**Uso de inteligencia artificial:** se ha utilizado IA como ayuda para generar y redactar este README.

## 5. Cómo ejecutar el proyecto

**Requisito:** tener instalado Node.js.

1. Guardar el código en un archivo llamado `cinecat.js`.
2. Abrir una terminal en la carpeta del archivo.
3. Ejecutar el comando:

```bash
node cinecat.js
```

Los resultados aparecerán por consola.

**Nota:** actualmente, el proyecto trabaja con datos en memoria y todavía no dispone de una interfaz web.
