require("alpinejs");

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

window.addEventListener("DOMContentLoaded", (event) => {
  let Pokedex = {
    list: [],
  };

  Pokedex.list = getlist();
  window.Pokedex = Pokedex;
});

function getlist() {
  let result = [];
  P.getPokemonsList().then(function(response) {
    window.Pokedex.list = response.results.slice(0, 10);
  });
  return result;
}
