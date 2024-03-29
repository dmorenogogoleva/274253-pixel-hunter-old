const firstGameStatsLayout = (userAnswers, gamePoints, answersPoints) => `<div id="stats-div" class="stats central__content">
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="result">
      <h1>${gamePoints !== -1 ? `Победа!` : `Поражение`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${userAnswers}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${answersPoints.reduce((sum, current) => sum + current)}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total"></td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">3&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">150</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total"></td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${gamePoints}</td>
        </tr>
      </table>`;

const secondGameStatsLayout = (numberOfGame, userAnswers, gamePoints, answersPoints) => `<table class="result__table">
<tr>
  <td class="result__number">${numberOfGame}</td>
  <td>
    <ul class="stats">
    ${userAnswers}
    </ul>
  </td>
  <td class="result__total">${answersPoints.reduce((sum, current) => sum + current)}</td>
  <td class="result__total  result__total--final">${gamePoints !== -1 ? `Победа!` : `Поражение`}</td>
</tr>
</table>`;


export {firstGameStatsLayout, secondGameStatsLayout};
