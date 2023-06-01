const Pokedex = require('./pokedex');
const fetchPokemon = require('./api');

describe(Pokedex, () => {
  it('Should return an empty array when all is called beofre any catch calls', () => {
    const dexter = new Pokedex();
    expect(dexter.all()).toEqual([]);
  });

  it('Should add a pokemond name to the constructor array', async () => {
    const dexter = new Pokedex();
    await dexter.catch('pikachu');
    expect(dexter.all()[0]).toBe('pikachu');
  });

  it('Should return an array of all pokemon that were caught in alphabetical order', async () => {
    const dexter = new Pokedex();
    await dexter.catch('alakazam');
    await dexter.catch('magmar');
    await dexter.catch('pikachu');
    await dexter.catch('lapras');
    expect(dexter.all()).toEqual(['alakazam', 'lapras', 'magmar', 'pikachu']);
    expect(dexter.all().length).toBe(4);
    expect(dexter.all()[2]).toBe('magmar');
  });
});
