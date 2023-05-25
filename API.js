const fetchPokemon = (pokemonname) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  .then((response) => response.json())
  .then((pokemon) => console.log(pokemon));
}

// console.log(fetchPokemon('oddish'));

module.exports = fetchPokemon;
