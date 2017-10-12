import assert from 'assert';
import GameTimer from '../GameTimer';

const TEN_SECONDS = 10;
const ONE_SECOND = 1;

const timer = new GameTimer(TEN_SECONDS);
const timerWithOneSecond = new GameTimer(ONE_SECOND);
const newTimer = new GameTimer(TEN_SECONDS);

describe(`Check game timer`, () => {

  it(`method getTime returns timer time`, () => {
    assert.equal(timer.getTime(), 10);
  });

  it(`method tick() should reduce time at 1`, () => {
    assert.equal(timer.tick(), 9);
  });

  it(`method getTime returns timer time (after reducing)`, () => {
    assert.equal(timer.getTime(), 9);
  });

  it(`if time is over timer messages about it`, () => {
    assert.equal(timerWithOneSecond.tick(), `time is over`);
  });

  it(`new timer have standart values`, () => {
    assert.equal(newTimer.getTime(), 10);
  });
});
