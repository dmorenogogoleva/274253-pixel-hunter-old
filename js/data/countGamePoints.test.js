import assert from 'assert';
import countGamePoints from '../countGamePoints';

const ALL_LIFES = 3;
const TWO_LIFES = 2;
const NO_LIFES = 0;

const makeTestArray = (nameOfArray, answers, radipness, slowness) => {
  nameOfArray = [];

  for (let i = 0; i < 10; i++) {
    nameOfArray.push({
      'id': i + 1,
      'answer': answers,
      'rapid': radipness,
      'slow': slowness
    });
  }
  return nameOfArray;
};

const makeComplicatedTestArray = (nameOfArray, answer1, answer2, rapidness1, rapidness2, slowness1, slowness2) => {
  nameOfArray = [];

  for (let i = 0; i < 5; i++) {
    nameOfArray.push({
      'id': i + 1,
      'answer': answer1,
      'rapid': rapidness1,
      'slow': slowness1
    });
  }
  for (let i = 5; i < 10; i++) {
    nameOfArray.push({
      'id': i + 1,
      'answer': answer2,
      'rapid': rapidness2,
      'slow': slowness2
    });
  }
  return nameOfArray;
};

describe(`Count game points`, () => {
  it(`user answered at all questions with normal speed and saved all lives`, () => {
    const allAnswersNormalTimeArray = makeTestArray(`allAnswersNormalTimeArray`, true, false, false);
    assert.equal(countGamePoints(allAnswersNormalTimeArray, ALL_LIFES), 1150);
  });

  it(`user failed all questions with rapid speed and saved all lives`, () => {
    const noAnswersRapidTimeArray = makeTestArray(`noAnswersRapidTimeArray`, false, true, false);
    assert.equal(countGamePoints(noAnswersRapidTimeArray, ALL_LIFES), 650);
  });

  it(`user answered at all questions with slow speed and saved all lives`, () => {
    const allAnswersSlowTimeArray = makeTestArray(`allAnswersSlowTimeArray`, true, false, true);
    assert.equal(countGamePoints(allAnswersSlowTimeArray, ALL_LIFES), 650);
  });

  it(`user failed all questions with slow speed and saved no lives`, () => {
    const noAnswersSlowTimeArray = makeTestArray(`noAnswersSlowTimeArray`, false, false, true);
    assert.equal(countGamePoints(noAnswersSlowTimeArray, NO_LIFES), -500);
  });

  it(`user answered to half questions with slow speed and saved no lives`, () => {
    const halfTrueHalfFalseAnswersSlowTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersSlowTimeArray`, true, false, false, false, true, true);
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersSlowTimeArray, ALL_LIFES), 150);
  });

  it(`user answered to half questions with half rapid and half slow speed and saved no lives`, () => {
    const halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray`, true, false, true, false, true, false);
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray, NO_LIFES), 500);
  });

  it(`user answered to half questions with half rapid speed and saved two lives`, () => {
    const halfTrueHalfFalseAnswersHalfRapidTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray`, true, false, true, false, false, false);
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersHalfRapidTimeArray, TWO_LIFES), 850);
  });
});
