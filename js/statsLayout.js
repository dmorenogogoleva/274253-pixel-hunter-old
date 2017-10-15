const initialStatsState = {
  unknownAns: `stats__result--unknown`,
  correctAns: `stats__result--correct`,
  wrongAns: `stats__result--wrong`,
  fastAns: `stats__result--fast`,
  slowAns: `stats__result--slow`
};

const statsLayout = (state) => `<div class="stats">
        <ul class="stats">
          <li class="stats__result ${state.correctAns}"></li>
          <li class="stats__result ${state.wrongAns}"></li>
          <li class="stats__result ${state.fastAns}"></li>
          <li class="stats__result ${state.slowAns}"></li>
          <li class="stats__result ${state.unknownAns}"></li>
          <li class="stats__result ${state.unknownAns}"></li>
          <li class="stats__result ${state.unknownAns}"></li>
          <li class="stats__result ${state.unknownAns}"></li>
          <li class="stats__result ${state.unknownAns}"></li>
          <li class="stats__result ">${state.unknownAns}</li>
        </ul>
      </div>`;

export default statsLayout(initialStatsState);
