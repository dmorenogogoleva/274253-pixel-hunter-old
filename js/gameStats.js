import {answerIcons} from './statsLayout';

const gameStats = (stateAnswer, statsState) => {
  // имхо это лишняя переменная но без нее линтер ругается
  const statsAns = stateAnswer.answer ? statsState.first = answerIcons.correctAns : statsState.first = answerIcons.wrongAns;
  return statsAns;
};

export default gameStats;
