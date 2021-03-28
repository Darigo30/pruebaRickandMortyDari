class Serie {
  constructor(nombre, personajes = []) {
    this.nombre = nombre;
    this.personajes = personajes;
  }
  // Debe inyectar html para renderizar la card de personaje
  getPersonajes(obtener) {
      const app = document.getElementById("app");
      app.innerHTML += `
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="${obtener.getImagen()}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${obtener.getNombre()}</h5>
            <p class="card-text">Especie: ${obtener.getEspecie()}</p>
          </div>
        </div>
      </div>
      `
  };

  // this.personajes es una arreglo!
  agregarPersonajes(personaje) {
    // Si el parámetro es un objeto o un string
    this.personajes.push(personaje);
  }
}

export default Serie;