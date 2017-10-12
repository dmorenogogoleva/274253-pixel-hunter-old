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
  const allAnswersNormalTimeArray = makeTestArray(`allAnswersNormalTimeArray`, true, false, false);
  it(`user answered at all questions with normal speed and saved all lives`, () => {
    assert.equal(countGamePoints(allAnswersNormalTimeArray, ALL_LIFES), 1150);
  });
});

describe(`Count game points`, () => {
  const noAnswersRapidTimeArray = makeTestArray(`noAnswersRapidTimeArray`, false, true, false);
  it(`user failed all questions with rapid speed and saved all lives`, () => {
    assert.equal(countGamePoints(noAnswersRapidTimeArray, ALL_LIFES), 650);
  });
});

describe(`Count game points`, () => {
  const allAnswersSlowTimeArray = makeTestArray(`allAnswersSlowTimeArray`, true, false, true);
  it(`user answered at all questions with slow speed and saved all lives`, () => {
    assert.equal(countGamePoints(allAnswersSlowTimeArray, ALL_LIFES), 650);
  });
});

describe(`Count game points`, () => {
  const noAnswersSlowTimeArray = makeTestArray(`noAnswersSlowTimeArray`, false, false, true);
  it(`user failed all questions with slow speed and saved no lives`, () => {
    assert.equal(countGamePoints(noAnswersSlowTimeArray, NO_LIFES), -500);
  });
});

describe(`Count game points`, () => {
  const halfTrueHalfFalseAnswersSlowTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersSlowTimeArray`, true, false, false, false, true, true);
  it(`user answered to half questions with slow speed and saved no lives`, () => {
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersSlowTimeArray, ALL_LIFES), 150);
  });
});

describe(`Count game points`, () => {
  const halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray`, true, false, true, false, true, false);
  it(`user answered to half questions with half rapid and half slow speed and saved no lives`, () => {
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray, NO_LIFES), 500);
  });
});

describe(`Count game points`, () => {
  const halfTrueHalfFalseAnswersHalfRapidTimeArray = makeComplicatedTestArray(`halfTrueHalfFalseAnswersHalfRapidHalfSlowTimeArray`, true, false, true, false, false, false);
  it(`user answered to half questions with half rapid speed and saved two lives`, () => {
    assert.equal(countGamePoints(halfTrueHalfFalseAnswersHalfRapidTimeArray, TWO_LIFES), 850);
  });
});
