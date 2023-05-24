const candySearch = require('./candySearch')

describe('candySearch', () => {
  it('locates the correct candy objects', () => {
    expect(candySearch('R', 9)).toEqual([ 'Ricola', 'Raffaello' ]);
  });

  it('locates the correct candy objects', () => {
    expect(candySearch('Ri', 9)).toEqual([ 'Ricola' ]);
  });
});