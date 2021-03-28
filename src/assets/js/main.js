import "../../assets/scss/style.scss";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";

const llamarPersonajes = (() => {
  const urlBase = "https://rickandmortyapi.com/api";
  // Variable privada que almacene la cantidad de personajes a mostrar.
  let cantidadPersonajes = 0;

  const dataPersonajes = async (urlAPI, urlP) => {
    let arr = [];
    try {
      const req = await fetch(urlAPI + urlP);
      const data = await req.json();
      arr = data.results;
    } catch (error) {
      const alertError = document.getElementById("alertError");
      alertError.innerHTML +=
      `<div class="alert alert-danger text-center" role="alert">
      Error en la obtención de los personajes desde la API: ${error}
      </div>`
    } finally {
      return arr;
    }
  };
  const funcionPublica1 = async() => {
    const serie = new Serie("Rick and Morty");
    const resultadosAPI = await dataPersonajes(urlBase, "/character");
    cantidadPersonajes = resultadosAPI.length;

    resultadosAPI.forEach(personaje => {
      const per = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
      serie.agregarPersonajes(per);
      console.log(per.getNombre(), per.getId(), per.getEspecie(), per.getImagen());
      serie.getPersonajes(per);
    });
  };
  const funcionPublica2 = () => {
    const ocultspinner = document.getElementById("ocultspinner");
    ocultspinner.style.display = "none";
    const sppiner = document.getElementById("sppiner");
    sppiner.innerHTML +=`<div>${cantidadPersonajes}</div>`
  }
  return {
    funcionPublica1,
    funcionPublica2,
  };
})();

llamarPersonajes.funcionPublica1();
// llamarPersonajes.funcionPublica2();
setTimeout(() => {
  llamarPersonajes.funcionPublica2();
}, 2000);