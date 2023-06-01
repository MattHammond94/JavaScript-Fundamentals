const fetchPokemon = require('./pokemonApi');

class Pokedex {

  constructor() {
    this.caughtPokemon = [];
  }

  async catch(pokemonName) {
    return fetchPokemon(pokemonName)
    .then((data) => this.caughtPokemon.push(data.name));
  }

  all() {
    return this.caughtPokemon.sort();
  }
}

module.exports = Pokedex;

// The below "all()" function is the original function used to test my catch function was succesfully
// adding the fetched data to my array. I used a timeout to view the results in my console before 
// researching the await and sync keywords.
// I also noticed that due to the time taking for the API to return the data my array was in a different
// order each time which could cause further issues when testing so decided to sort the array.

// ----------------------------------------

// all() {
//   const showResult = () => {
//     console.log(this.caughtPokemon);
//   }
  
//   setTimeout(showResult, 3000);
// }

// ----------------------------------------

// const dexter = new Pokedex();
// dexter.catch('alakazam');
// dexter.catch('magmar');
// dexter.catch('pikachu');
// dexter.catch('lapras');
// dexter.all();
