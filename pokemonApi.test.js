const fetchPokemon = require('./pokemonApi');

describe('fetchPokemon', () => {
  it('returns the correct data of passed pokemon', (done) => {
    fetchPokemon('alakazam')
    .then((pokemon) => {
      expect(pokemon.id).toBe(65);
      expect(pokemon.height).toBe(15);
      expect(pokemon.types).toEqual(['psychic']);
      done();
    });
  });
});
