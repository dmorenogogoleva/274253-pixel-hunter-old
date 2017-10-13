const CORRECT_ANS_POINTS = 100;
const RAPID_ANS_POINTS = 50;
const SLOW_ANS_POINTS = -50;
const SAVED_LIFE_POINTS = 50;

const countGamePoints = (answersArr, remainingLives) => {
  let gamePoints = 0;

  if (answersArr.length < 10) {
    return -1;
  }

  for (const answer of answersArr) {
    if (answer.answer) {
      gamePoints += CORRECT_ANS_POINTS;
    }
    if (answer.rapid) {
      gamePoints += RAPID_ANS_POINTS;
    }
    if (answer.slow) {
      gamePoints += SLOW_ANS_POINTS;
    }
  }

  gamePoints += SAVED_LIFE_POINTS * remainingLives;

  return gamePoints;
};

export default countGamePoints;
