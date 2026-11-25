export class Catalogo{

    static catalogoPeliculas;

    constructor(){
        this.catalogoPeliculas = [];
    }

    get getTotal() {
        return this.catalogoPeliculas.length;
    }

    lastId() {
        let maxId = 0;
        this.catalogoPeliculas.forEach(v => {
        if (v.id > maxId) maxId = v.id;
        });
    }

    listar() {
        return [...this.catalogoPeliculas];
    }

    annadir(item) {
      this.catalogoPeliculas.push(item);
    }


    addPelicula(pelicula) {
        this.catalogoPeliculas.push(pelicula)
    }

    addPeliculas(peliculas) {
        this.catalogoPeliculas.push(...pelicula);
    }

    eliminar(id) {
    const indice = this.catalogoPeliculas.findIndex(p => p.id === id);

    if (indice === -1) {
        return false;
    }

    this.catalogoPeliculas.splice(indice, 1);
    return true;
    }

    buscarPorTexto(text) {
        const textMinus = text.toLowerCase();
        return this.catalogoPeliculas.filter(v => v.titulo.toLowerCase().includes(textMinus));
    }

}