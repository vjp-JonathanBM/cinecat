export class Pelicula {
    constructor (pelicula) {
        this.id = pelicula.id;
        this.titulo = pelicula.titulo;
        this.director = pelicula.director;
        this.anno = pelicula.anno;
        this.estreno = pelicula.estreno;
        this.genero = pelicula.genero;
        this.duracion = pelicula.duracion;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get director() {
        return this._director;
    }

    set director(director) {
        this._director = director;
    }

    get anno() {
        return this._anno;
    }

    set anno(anno) {
        this._anno = anno;
    }

    get estreno() {
        return this._estreno;
    }

    set estreno(estreno) {
        this._estreno = estreno;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero = genero;
    }

    get duracion() {
        return this._duracion;
    }

    set duracion(duracion) {
        if (typeof duracion !== "number" || duracion <= 0) {
            throw new Error(`Duración no válida en «${this.titulo}»: ${duracion}`);
        }

        this._duracion = duracion;
    }

    get duracionTexto() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;

        if (horas === 0) {
            return `${minutos} min`;
        }

        if (minutos === 0) {
            return `${horas} h`;
        }

        return `${horas} h ${minutos} min`;
    }

    descripcion() {
        return `${this.titulo} (${this.anno}) - Director: ${this.director} - Género: ${this.genero} - Duración: ${this.duracionTexto}`;
    }

}