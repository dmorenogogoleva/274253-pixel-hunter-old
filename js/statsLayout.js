import {gameAnswers} from './gameAnswers';

const answerIcons = {
  unknownAns: `stats__result--unknown`,
  correctAns: `stats__result--correct`,
  wrongAns: `stats__result--wrong`,
  fastAns: `stats__result--fast`,
  slowAns: `stats__result--slow`
};

const createCurrentStats = (answersArray) => {
  let arr = [];
  for (const ans of answersArray) {
    if (ans.answer) {
      arr.push(`<li class="stats__result stats__result--correct"></li>`);
    } else {
      arr.push(`<li class="stats__result stats__result--wrong"></li>`);
    }
  }
  return arr.join(` `);
};


const currentStatsLayout = createCurrentStats(gameAnswers);

export {answerIcons, currentStatsLayout};
