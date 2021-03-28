class Personaje {
  constructor(id, nombrePersonaje, especie, imagen) {
    const _id = id;
    const _nombre = nombrePersonaje;
    const _especie = especie;
    const _imagen = imagen;
    this.getId = () => _id;
    this.getNombre = () => _nombre;
    this.getEspecie = () => _especie;
    this.getImagen = () => _imagen;
  }
  get obtenerId() {
    return this.getId();
  }
  get obtenerNombre() {
    return this.getNombre();
  }
  get obtenerEspecie() {
    return this.getEspecie();
  }
  get obtenerImagen() {
    return this.getImagen();
  }
}

export default Personaje;