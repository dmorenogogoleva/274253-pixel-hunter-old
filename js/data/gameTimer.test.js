import assert from 'assert';
import gameTimer from '../gameTimer';

describe(`Check game timer`, () => {
  it(`method tick() should reduce time at 1`, () => {
    assert.equal(gameTimer(10).tick(), 9);
  });
});

describe(`Check game timer`, () => {
  it(`if time is over timer messages about it`, () => {
    assert.equal(gameTimer(1).tick(), `time is over`);
  });
});
