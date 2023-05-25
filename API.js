const fetchPokemon = (pokemonname) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  .then((response) => response.json())
  .then((pokemon) => 
  
  // console.log(pokemon.types));
  
  console.log({
    name: pokemon.name,
    id: pokemon.id,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((slot) => {
      return slot.type.name;
    })
    
    // .forEach((type) => {
    //   type.type.name
    // })
  }));
}

console.log(fetchPokemon('oddish'));

module.exports = fetchPokemon;

// pokemon.types[0].type.name
