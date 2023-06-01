const fetchPokemon = (pokemonname) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  .then((response) => response.json())
  .then((pokemon) => { 
    return {
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((slot) => {
        return slot.type.name;
      })
    };
  });
}

// fetchPokemon('lapras').then((data) => console.log(data))

module.exports = fetchPokemon;
