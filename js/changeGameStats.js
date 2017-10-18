import {answerIcons} from './statsLayout';

const changeGameStats = (stateAnswer, statsState) => {
  if (stateAnswer.answer) {
    statsState.first = answerIcons.correctAns;
  } else {
    statsState.first = answerIcons.wrongAns;
  }
};

export default changeGameStats;
