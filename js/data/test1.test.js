import assert from 'assert';

const array = [1, 2, 3, 4, 5];

// const countGamePoints = (arr) => {
//   return arr;
// };

describe(`Count game points`, () => {

  it(`argument should be an array`, () => {
    assert.isArray(array, `wtf`);
  });
});
