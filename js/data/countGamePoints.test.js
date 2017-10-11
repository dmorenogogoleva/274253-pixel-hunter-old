import assert from 'assert';
import countGamePoints from '../countGamePoints';

const ALL_LIFES = 3;

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

const allAnswersNormalTimeArray = makeTestArray(`allAnswersNormalTimeArray`, true, false, false);
const noAnswersRapidTimeArray = makeTestArray(`noAnswersRapidTimeArray`, false, true, false);
const allAnswersSlowTimeArray = makeTestArray(`allAnswersSlowTimeArray`, true, false, true);
const noAnswersSlowTimeArray = makeTestArray(`noAnswersSlowTimeArray`, false, false, true);

const allAnswersNormalTimeAllLifesTest = (array, lifes) => {
  describe(`Count game points`, () => {
    it(`first argument should be an array`, () => {
      assert((Array.isArray(array)));
    });
    it(`user must answered at ten questions or more (now its ${array.length} answers`, () => {
      assert(array.length >= 10);
    });
    it(`user answered at all questions with normal speed and saved all lives`, () => {
      assert.equal(countGamePoints(array, lifes), 1150);
    });
  });
};

allAnswersNormalTimeAllLifesTest(allAnswersNormalTimeArray, ALL_LIFES);


const noAnswersRapidTimeAllLifesTest = (array, lifes) => {
  describe(`Count game points`, () => {
    it(`first argument should be an array`, () => {
      assert((Array.isArray(array)));
    });
    it(`user must answered at ten questions or more (now its ${array.length} answers`, () => {
      assert(array.length >= 10);
    });
    it(`user failed all questions with rapid speed and saved all lives`, () => {
      assert.equal(countGamePoints(array, lifes), 500);
    });
  });
};

noAnswersRapidTimeAllLifesTest(noAnswersRapidTimeArray, ALL_LIFES - ALL_LIFES);

const allAnswersSlowTimeArrayAllLifesTest = (array, lifes) => {
  describe(`Count game points`, () => {
    it(`first argument should be an array`, () => {
      assert((Array.isArray(array)));
    });
    it(`user must answered at ten questions or more (now its ${array.length} answers`, () => {
      assert(array.length >= 10);
    });
    it(`user answered at all questions with slow speed and saved all lives`, () => {
      assert.equal(countGamePoints(array, lifes), 650);
    });
  });
};

allAnswersSlowTimeArrayAllLifesTest(allAnswersSlowTimeArray, ALL_LIFES);


const noAnswersSlowTimeNoLifesTest = (array, lifes) => {
  describe(`Count game points`, () => {
    it(`first argument should be an array`, () => {
      assert((Array.isArray(array)));
    });
    it(`user must answered at ten questions or more (now its ${array.length} answers`, () => {
      assert(array.length >= 10);
    });
    it(`user failed all questions with slow speed and saved no lives`, () => {
      assert.equal(countGamePoints(array, lifes), -500);
    });
  });
};

noAnswersSlowTimeNoLifesTest(noAnswersSlowTimeArray, ALL_LIFES - ALL_LIFES);
