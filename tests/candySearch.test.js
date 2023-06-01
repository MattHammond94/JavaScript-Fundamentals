const candySearch = require('../lib/candySearch')

describe('candySearch', () => {
  it('returns two correct candy object names in an array based on arg params', () => {
    expect(candySearch('R', 9)).toEqual([ 'Ricola', 'Raffaello' ]);
  });

  it('Only returns the name of one candy object', () => {
    expect(candySearch('Ri', 9)).toEqual([ 'Ricola' ]);
  });

  it('Returns only the correct names of candy objects after args are passed', () => {
    expect(candySearch('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('Returns an array of all candy names when number arg exceeds max price of candies', () => {
    expect(candySearch('', 15)).toEqual(['Aero', 'Skitties',
    'Mars',          'Maltesers',
    'Skittles',      'Starburst',
    'Ricola',        'Polkagris',
    'Pastila',       'Mentos',
    'Raffaello',     'Gummi bears',
    'Fraise Tagada']);
  });

  it('Returns an empty array when the number arg is lower than all current obj prices', () => {
    expect(candySearch('', 0.5)).toEqual([]);
  });

  it('Returns an empty array when the string arg is not the beginning of any candy names', () => {
    expect(candySearch('Z', 15)).toEqual([])
  });

  it('Should Gummi', () => {
    expect(candySearch('Gum', 12)).toEqual([ 'Gummi bears' ]);
  });
});