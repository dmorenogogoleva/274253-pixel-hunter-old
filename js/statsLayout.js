const answerIcons = {
  unknownAns: `stats__result--unknown`,
  correctAns: `stats__result--correct`,
  wrongAns: `stats__result--wrong`,
  fastAns: `stats__result--fast`,
  slowAns: `stats__result--slow`
};

const currentStatsLayout = (cb) => `<div class="stats">
        <ul class="stats">
        ${cb}
        </ul>
      </div>`;

export {answerIcons, currentStatsLayout};
