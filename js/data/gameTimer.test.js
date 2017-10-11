import assert from 'assert';
import gameTimer from '../gameTimer';


describe(`Check game timer`, () => {
  it(`first argument should be a number of seconds`, () => {
    assert.equal(gameTimer(10), 10);
  });
});
