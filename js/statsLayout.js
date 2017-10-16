const answerIcons = {
  unknownAns: `stats__result--unknown`,
  correctAns: `stats__result--correct`,
  wrongAns: `stats__result--wrong`,
  fastAns: `stats__result--fast`,
  slowAns: `stats__result--slow`
};

const initialStatsState = {
  first: answerIcons.unknownAns,
  second: answerIcons.unknownAns,
  third: answerIcons.unknownAns,
  fourth: answerIcons.unknownAns,
  fifth: answerIcons.unknownAns,
  sixth: answerIcons.unknownAns,
  seventh: answerIcons.unknownAns,
  eighth: answerIcons.unknownAns,
  ninth: answerIcons.unknownAns,
  tenth: answerIcons.unknownAns
};

const statsLayout = (state) => `<div class="stats">
        <ul class="stats">
          <li class="stats__result ${state.first}"></li>
          <li class="stats__result ${state.second}"></li>
          <li class="stats__result ${state.third}"></li>
          <li class="stats__result ${state.fourth}"></li>
          <li class="stats__result ${state.fifth}"></li>
          <li class="stats__result ${state.sixth}"></li>
          <li class="stats__result ${state.seventh}"></li>
          <li class="stats__result ${state.eighth}"></li>
          <li class="stats__result ${state.ninth}"></li>
          <li class="stats__result ">${state.tenth}</li>
        </ul>
      </div>`;

export {answerIcons, statsLayout, initialStatsState};
