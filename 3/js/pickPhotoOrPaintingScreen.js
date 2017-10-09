var pickPhotoOrPaintingScreen = (function () {
'use strict';

const createElement = function (layout) {
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  return newDiv;
};

const central = document.querySelector(`.central`);

const showScreen = function (domElement) {
  central.innerHTML = ``;

  central.appendChild(domElement);
};

const footerLayout = `<footer class="footer">
<a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
<span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
<div class="footer__social-links">
  <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
  <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
  <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
  <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
</div>
</footer>`;

const headerLayout = `<header class="header">
<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>
<h1 class="game__timer">NN</h1>
<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
</div>
</header>`;

const game1Layout = `
${headerLayout}
<div id="game-1-div" class="game-1 central__content">
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" class="game__button" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" class="game__button" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" class="game__button" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" class="game__button" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>
  </div>
  ${footerLayout}`;

const game1LayoutDom = createElement(game1Layout);
const showGame2Screen = () => showScreen(game2LayoutDom);

const gameOptionFields = game1LayoutDom.querySelectorAll(`.game__option`);
const gameContent = game1LayoutDom.querySelector(`.game__content`);

gameOptionFields.forEach(function (element) {
  element.addEventListener(`click`, function () {
    let count = 0;
    count = gameContent.querySelectorAll(`input[type=radio]:checked`).length;
    if (count === gameOptionFields.length) {
      showGame2Screen();
    }
  });
});

backToGreetingScreen(game1LayoutDom);

const rulesLayout = `<div id="rules-div" class="rules central__content">
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
  </div>
  ${footerLayout}`;

const rulesLayoutDom = createElement(rulesLayout);
const showGame1Screen = () => showScreen(game1LayoutDom);

const rulesInput = rulesLayoutDom.querySelector(`.rules__input`);
const rulesButton = rulesLayoutDom.querySelector(`.rules__button`);

const rulesInputInputHandler = function () {
  if (rulesInput.value.length > 0) {
    rulesButton.removeAttribute(`disabled`);
  } else {
    rulesButton.setAttribute(`disabled`, `disabled`);
  }
};

rulesInput.addEventListener(`input`, rulesInputInputHandler);
// попробовала поменять на submit еще раз, форма не отправляется, страница перезагружается и всё(
rulesButton.addEventListener(`click`, showGame1Screen);

backToGreetingScreen(rulesLayoutDom);

const greetingLayout = `<div id="greeting-div" class="greeting central__content">
  <div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
</div>
${footerLayout}
`;

const showRulesScreen = () => showScreen(rulesLayoutDom);

const greetingLayoutDom = createElement(greetingLayout);
const greetingContinue = greetingLayoutDom.querySelector(`.greeting__continue`);
greetingContinue.addEventListener(`click`, showRulesScreen);

const showGreetingScreen = () => showScreen(greetingLayoutDom);

const backToGreetingScreen = (domElement) => {
  const btnBack = domElement.querySelector(`.back`);
  btnBack.addEventListener(`click`, showGreetingScreen);
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

const game3Layout = `
${headerLayout}
<div id="game-3-div" class="game-3 central__content">
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
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
      </div>
    </div>
  </div>
  ${footerLayout}`;

const game3LayoutDom = createElement(game3Layout);
const showStatsScreen = () => showScreen(statsLayoutDom);

const gameOptions = game3LayoutDom.querySelectorAll(`.game__option`);

gameOptions.forEach(function (btn) {
  btn.addEventListener(`click`, showStatsScreen);
});

backToGreetingScreen(game3LayoutDom);

const game2Layout = `
${headerLayout}
<div id="game-2-div" class="game-2 central__content">
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
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
    </div>
  </div>
</div>
  ${footerLayout}`;

const game2LayoutDom = createElement(game2Layout);
const showGame3Screen = () => showScreen(game3LayoutDom);

const gameAnswers = game2LayoutDom.querySelectorAll(`.game__answer`);

gameAnswers.forEach(function (btn) {
  btn.addEventListener(`click`, showGame3Screen);
});

backToGreetingScreen(game2LayoutDom);

return game2LayoutDom;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja1Bob3RvT3JQYWludGluZ1NjcmVlbi5qcyIsInNvdXJjZXMiOlsianMvY3JlYXRlRWxlbWVudC5qcyIsImpzL3Nob3dTY3JlZW4uanMiLCJqcy9mb290ZXJMYXlvdXQuanMiLCJqcy9oZWFkZXJMYXlvdXQuanMiLCJqcy9waWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbi5qcyIsImpzL3J1bGVzU2NyZWVuLmpzIiwianMvZ3JlZXRpbmdTY3JlZW4uanMiLCJqcy9iYWNrVG9HcmVldGluZ1NjcmVlbi5qcyIsImpzL3N0YXRzU2NyZWVuLmpzIiwianMvcGlja1BhaW50aW5nRnJvbUltYWdlc1NjcmVlbi5qcyIsImpzL3BpY2tQaG90b09yUGFpbnRpbmdTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChsYXlvdXQpIHtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBsYXlvdXQ7XG4gIHJldHVybiBuZXdEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiY29uc3QgY2VudHJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZW50cmFsYCk7XG5cbmNvbnN0IHNob3dTY3JlZW4gPSBmdW5jdGlvbiAoZG9tRWxlbWVudCkge1xuICBjZW50cmFsLmlubmVySFRNTCA9IGBgO1xuXG4gIGNlbnRyYWwuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NyZWVuO1xuIiwiY29uc3QgZm9vdGVyTGF5b3V0ID0gYDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbjxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbjxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG48ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG48L2Rpdj5cbjwvZm9vdGVyPmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlckxheW91dDtcbiIsImNvbnN0IGhlYWRlckxheW91dCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG48ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG48aDEgY2xhc3M9XCJnYW1lX190aW1lclwiPk5OPC9oMT5cbjxkaXYgY2xhc3M9XCJnYW1lX19saXZlc1wiPlxuICA8aW1nIHNyYz1cImltZy9oZWFydF9fZW1wdHkuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbjwvZGl2PlxuPC9oZWFkZXI+YDtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyTGF5b3V0O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgZ2FtZTJMYXlvdXREb20gZnJvbSAnLi9waWNrUGhvdG9PclBhaW50aW5nU2NyZWVuJztcbmltcG9ydCBoZWFkZXJMYXlvdXQgZnJvbSAnLi9oZWFkZXJMYXlvdXQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUxTGF5b3V0ID0gYFxuJHtoZWFkZXJMYXlvdXR9XG48ZGl2IGlkPVwiZ2FtZS0xLWRpdlwiIGNsYXNzPVwiZ2FtZS0xIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0KPQs9Cw0LTQsNC50YLQtSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/PC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDY4eDQ1OFwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCI0NjhcIiBoZWlnaHQ9XCI0NThcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC80Njh4NDU4XCIgYWx0PVwiT3B0aW9uIDJcIiB3aWR0aD1cIjQ2OFwiIGhlaWdodD1cIjQ1OFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjJcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMlwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3QgZ2FtZTFMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KGdhbWUxTGF5b3V0KTtcbmNvbnN0IHNob3dHYW1lMlNjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4oZ2FtZTJMYXlvdXREb20pO1xuXG5jb25zdCBnYW1lT3B0aW9uRmllbGRzID0gZ2FtZTFMYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuY29uc3QgZ2FtZUNvbnRlbnQgPSBnYW1lMUxheW91dERvbS5xdWVyeVNlbGVjdG9yKGAuZ2FtZV9fY29udGVudGApO1xuXG5nYW1lT3B0aW9uRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ID0gZ2FtZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZGApLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IGdhbWVPcHRpb25GaWVsZHMubGVuZ3RoKSB7XG4gICAgICBzaG93R2FtZTJTY3JlZW4oKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKGdhbWUxTGF5b3V0RG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTFMYXlvdXREb207XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBnYW1lMUxheW91dERvbSBmcm9tICcuL3BpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvU2NyZWVuJztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBydWxlc0xheW91dCA9IGA8ZGl2IGlkPVwicnVsZXMtZGl2XCIgY2xhc3M9XCJydWxlcyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJydWxlc1wiPlxuICAgICAgPGgxIGNsYXNzPVwicnVsZXNfX3RpdGxlXCI+0J/RgNCw0LLQuNC70LA8L2gxPlxuICAgICAgPHAgY2xhc3M9XCJydWxlc19fZGVzY3JpcHRpb25cIj7Qo9Cz0LDQtNCw0LkgMTAg0YDQsNC3INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+IDxpbWdcbiAgICAgICAgc3JjPVwiaW1nL3Bob3RvX2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+INC40LvQuCDRgNC40YHRg9C90L7QuiA8aW1nXG4gICAgICAgIHNyYz1cImltZy9wYWludF9pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGFsdD1cIlwiPi48YnI+XG4gICAgICAgINCk0L7RgtC+0LPRgNCw0YTQuNGP0LzQuCDQuNC70Lgg0YDQuNGB0YPQvdC60LDQvNC4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7QsdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8uPGJyPlxuICAgICAgICDQndCwINC60LDQttC00YPRjiDQv9C+0L/Ri9GC0LrRgyDQvtGC0LLQvtC00LjRgtGB0Y8gMzAg0YHQtdC60YPQvdC0Ljxicj5cbiAgICAgICAg0J7RiNC40LHQuNGC0YzRgdGPINC80L7QttC90L4g0L3QtSDQsdC+0LvQtdC1IDMg0YDQsNC3Ljxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICDQk9C+0YLQvtCy0Ys/XG4gICAgICA8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cInJ1bGVzX19mb3JtXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJ1bGVzX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQmNC80Y9cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJ1bGVzX19idXR0b24gIGNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPkdvITwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3QgcnVsZXNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KHJ1bGVzTGF5b3V0KTtcbmNvbnN0IHNob3dHYW1lMVNjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4oZ2FtZTFMYXlvdXREb20pO1xuXG5jb25zdCBydWxlc0lucHV0ID0gcnVsZXNMYXlvdXREb20ucXVlcnlTZWxlY3RvcihgLnJ1bGVzX19pbnB1dGApO1xuY29uc3QgcnVsZXNCdXR0b24gPSBydWxlc0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2J1dHRvbmApO1xuXG5jb25zdCBydWxlc0lucHV0SW5wdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAocnVsZXNJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgcnVsZXNCdXR0b24ucmVtb3ZlQXR0cmlidXRlKGBkaXNhYmxlZGApO1xuICB9IGVsc2Uge1xuICAgIHJ1bGVzQnV0dG9uLnNldEF0dHJpYnV0ZShgZGlzYWJsZWRgLCBgZGlzYWJsZWRgKTtcbiAgfVxufTtcblxucnVsZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIpO1xuLy8g0L/QvtC/0YDQvtCx0L7QstCw0LvQsCDQv9C+0LzQtdC90Y/RgtGMINC90LAgc3VibWl0INC10YnQtSDRgNCw0LcsINGE0L7RgNC80LAg0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXRgtGB0Y8sINGB0YLRgNCw0L3QuNGG0LAg0L/QtdGA0LXQt9Cw0LPRgNGD0LbQsNC10YLRgdGPINC4INCy0YHRkShcbnJ1bGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dhbWUxU2NyZWVuKTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4ocnVsZXNMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBydWxlc0xheW91dERvbTtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgcnVsZXNMYXlvdXREb20gZnJvbSAnLi9ydWxlc1NjcmVlbic7XG5cbmNvbnN0IGdyZWV0aW5nTGF5b3V0ID0gYDxkaXYgaWQ9XCJncmVldGluZy1kaXZcIiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWwtLWJsdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2xvZ29cIj48aW1nIHNyYz1cImltZy9sb2dvX2JpZy5wbmdcIiB3aWR0aD1cIjIwMVwiIGhlaWdodD1cIjg5XCIgYWx0PVwiUGl4ZWwgSHVudGVyXCI+PC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiZ3JlZXRpbmdfX2FzdGVyaXNrXCI+KjwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jaGFsbGVuZ2VcIj5cbiAgICAgIDxoMz7Qm9GD0YfRiNC40LUg0YXRg9C00L7QttC90LjQutC4LdGE0L7RgtC+0YDQtdCw0LvQuNGB0YLRiyDQsdGA0L7RgdCw0Y7RgiZuYnNwO9GC0LXQsdC1Jm5ic3A70LLRi9C30L7QsiE8L2gzPlxuICAgICAgPHA+0J/RgNCw0LLQuNC70LAg0LjQs9GA0Ysg0L/RgNC+0YHRgtGLLjxicj5cbiAgICAgICAg0J3Rg9C20L3QviDQvtGC0LvQuNGH0LjRgtGMINGA0LjRgdGD0L3QvtC6Jm5ic3A70L7RgiDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQuCDRgdC00LXQu9Cw0YLRjCDQstGL0LHQvtGALjxicj5cbiAgICAgICAg0JfQsNC00LDRh9CwINC60LDQttC10YLRgdGPINGC0YDQuNCy0LjQsNC70YzQvdC+0LksINC90L4g0L3QtSDQtNGD0LzQsNC5LCDRh9GC0L4g0LLRgdC1INGC0LDQuiDQv9GA0L7RgdGC0L4uPGJyPlxuICAgICAgICDQpNC+0YLQvtGA0LXQsNC70LjQt9C8INC+0LHQvNCw0L3Rh9C40LIg0Lgg0LrQvtCy0LDRgNC10L0uPGJyPlxuICAgICAgICDQn9C+0LzQvdC4LCDQs9C70LDQstC90L7QtSDigJQg0YHQvNC+0YLRgNC10YLRjCDQvtGH0LXQvdGMINCy0L3QuNC80LDRgtC10LvRjNC90L4uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fY29udGludWVcIj48c3Bhbj48aW1nIHNyYz1cImltZy9hcnJvd19yaWdodC5zdmdcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBhbHQ9XCJOZXh0XCI+PC9zcGFuPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuJHtmb290ZXJMYXlvdXR9XG5gO1xuXG5jb25zdCBzaG93UnVsZXNTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKHJ1bGVzTGF5b3V0RG9tKTtcblxuY29uc3QgZ3JlZXRpbmdMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KGdyZWV0aW5nTGF5b3V0KTtcbmNvbnN0IGdyZWV0aW5nQ29udGludWUgPSBncmVldGluZ0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAuZ3JlZXRpbmdfX2NvbnRpbnVlYCk7XG5ncmVldGluZ0NvbnRpbnVlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd1J1bGVzU2NyZWVuKTtcbmV4cG9ydCBkZWZhdWx0IGdyZWV0aW5nTGF5b3V0RG9tO1xuIiwiaW1wb3J0IGdyZWV0aW5nTGF5b3V0RG9tIGZyb20gJy4vZ3JlZXRpbmdTY3JlZW4nO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcblxuY29uc3Qgc2hvd0dyZWV0aW5nU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihncmVldGluZ0xheW91dERvbSk7XG5cbmNvbnN0IGJhY2tUb0dyZWV0aW5nU2NyZWVuID0gKGRvbUVsZW1lbnQpID0+IHtcbiAgY29uc3QgYnRuQmFjayA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmJhY2tgKTtcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dHcmVldGluZ1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYWNrVG9HcmVldGluZ1NjcmVlbjtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3Qgc3RhdHNMYXlvdXQgPSBgPGRpdiBpZD1cInN0YXRzLWRpdlwiIGNsYXNzPVwic3RhdHMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICA8aDE+0J/QvtCx0LXQtNCwITwvaDE+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjEuPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7MTAwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+OTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0YHQutC+0YDQvtGB0YLRjDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4xJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj41MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINC20LjQt9C90Lg6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1hbGl2ZVwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0KjRgtGA0LDRhCDQt9CwINC80LXQtNC70LjRgtC10LvRjNC90L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+LTEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIiBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+OTUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjIuPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPmZhaWw8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+My48L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDsxMDA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj45MDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tYWxpdmVcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPjk1MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gICR7Zm9vdGVyTGF5b3V0fWA7XG5cbmNvbnN0IHN0YXRzTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChzdGF0c0xheW91dCk7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKHN0YXRzTGF5b3V0RG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdHNMYXlvdXREb207XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzdGF0c0xheW91dERvbSBmcm9tICcuL3N0YXRzU2NyZWVuJztcbmltcG9ydCBoZWFkZXJMYXlvdXQgZnJvbSAnLi9oZWFkZXJMYXlvdXQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUzTGF5b3V0ID0gYFxuJHtoZWFkZXJMYXlvdXR9XG48ZGl2IGlkPVwiZ2FtZS0zLWRpdlwiIGNsYXNzPVwiZ2FtZS0zIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0J3QsNC50LTQuNGC0LUg0YDQuNGB0YPQvdC+0Log0YHRgNC10LTQuCDQuNC30L7QsdGA0LDQttC10L3QuNC5PC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50ICBnYW1lX19jb250ZW50LS10cmlwbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvbiAgZ2FtZV9fb3B0aW9uLS1zZWxlY3RlZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3QgZ2FtZTNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KGdhbWUzTGF5b3V0KTtcbmNvbnN0IHNob3dTdGF0c1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4oc3RhdHNMYXlvdXREb20pO1xuXG5jb25zdCBnYW1lT3B0aW9ucyA9IGdhbWUzTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3JBbGwoYC5nYW1lX19vcHRpb25gKTtcblxuZ2FtZU9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dTdGF0c1NjcmVlbik7XG59KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4oZ2FtZTNMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lM0xheW91dERvbTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IGdhbWUzTGF5b3V0RG9tIGZyb20gJy4vcGlja1BhaW50aW5nRnJvbUltYWdlc1NjcmVlbic7XG5pbXBvcnQgaGVhZGVyTGF5b3V0IGZyb20gJy4vaGVhZGVyTGF5b3V0JztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBnYW1lMkxheW91dCA9IGBcbiR7aGVhZGVyTGF5b3V0fVxuPGRpdiBpZD1cImdhbWUtMi1kaXZcIiBjbGFzcz1cImdhbWUtMiBjZW50cmFsX19jb250ZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0KPQs9Cw0LTQsNC5LCDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/PC9wPlxuICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudCAgZ2FtZV9fY29udGVudC0td2lkZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNzA1eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCI3MDVcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS13aWRlICBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBnYW1lMkxheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoZ2FtZTJMYXlvdXQpO1xuY29uc3Qgc2hvd0dhbWUzU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihnYW1lM0xheW91dERvbSk7XG5cbmNvbnN0IGdhbWVBbnN3ZXJzID0gZ2FtZTJMYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX2Fuc3dlcmApO1xuXG5nYW1lQW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dhbWUzU2NyZWVuKTtcbn0pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihnYW1lMkxheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWUyTGF5b3V0RG9tO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sYUFBYSxHQUFHLFVBQVUs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
