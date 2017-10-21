const answerIcons = {
  unknownAns: `stats__result--unknown`,
  correctAns: `stats__result--correct`,
  wrongAns: `stats__result--wrong`,
  fastAns: `stats__result--fast`,
  slowAns: `stats__result--slow`
};

const currentStatsLayout = `<div class="stats">
        <ul class="stats">
        <li class="stats__result stats__result--correct"></li>
        </ul>
      </div>`;

export {answerIcons, currentStatsLayout};
