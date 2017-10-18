import createElement from './createElement';
import footerLayout from './footerLayout';
import backToGreetingScreen from './backToGreetingScreen';

const answersArr = [
  {
    'id': 1,
    'answer': true,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 2,
    'answer': true,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 3,
    'answer': true,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 4,
    'answer': true,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 5,
    'answer': true,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 6,
    'answer': false,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 7,
    'answer': false,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 8,
    'answer': false,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 9,
    'answer': false,
    'rapid': ``,
    'slow': ``
  },
  {
    'id': 10,
    'answer': false,
    'rapid': ``,
    'slow': ``
  }
];

const setAnswerIcon = (answer) => {
  return answer.answer ? `stats__result--correct` : `stats__result--wrong`;
};

const statsLayout = `<div id="stats-div" class="stats central__content">
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="result">
      <h1>Победа!</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              <li class="stats__result ${setAnswerIcon(answersArr[0])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[1])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[2])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[3])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[4])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[5])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[6])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[7])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[8])}"></li>
              <li class="stats__result ${setAnswerIcon(answersArr[9])}"></li>
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">50</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">-100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--wrong"></li>
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--unknown"></li>
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
  </div>
  </div>
  ${footerLayout}`;

const statsLayoutDom = createElement(statsLayout);

backToGreetingScreen(statsLayoutDom);

export default statsLayoutDom;
