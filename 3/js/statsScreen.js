var statsScreen = (function () {
'use strict';

const createElement = function (layout) {
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  return newDiv;
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

const central = document.querySelector(`.central`);

const showScreen = function (domElement) {
  central.innerHTML = ``;

  central.appendChild(domElement);
};

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

return statsLayoutDom;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHNTY3JlZW4uanMiLCJzb3VyY2VzIjpbImpzL2NyZWF0ZUVsZW1lbnQuanMiLCJqcy9mb290ZXJMYXlvdXQuanMiLCJqcy9zaG93U2NyZWVuLmpzIiwianMvaGVhZGVyTGF5b3V0LmpzIiwianMvcGlja1BhaW50aW5nRnJvbUltYWdlc1NjcmVlbi5qcyIsImpzL3BpY2tQaG90b09yUGFpbnRpbmdTY3JlZW4uanMiLCJqcy9waWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbi5qcyIsImpzL3J1bGVzU2NyZWVuLmpzIiwianMvZ3JlZXRpbmdTY3JlZW4uanMiLCJqcy9iYWNrVG9HcmVldGluZ1NjcmVlbi5qcyIsImpzL3N0YXRzU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICBuZXdEaXYuaW5uZXJIVE1MID0gbGF5b3V0O1xuICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImNvbnN0IGZvb3RlckxheW91dCA9IGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG48YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG48c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuPC9kaXY+XG48L2Zvb3Rlcj5gO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJMYXlvdXQ7XG4iLCJjb25zdCBjZW50cmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbnRyYWxgKTtcblxuY29uc3Qgc2hvd1NjcmVlbiA9IGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gIGNlbnRyYWwuaW5uZXJIVE1MID0gYGA7XG5cbiAgY2VudHJhbC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dTY3JlZW47XG4iLCJjb25zdCBoZWFkZXJMYXlvdXQgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj5OTjwvaDE+XG48ZGl2IGNsYXNzPVwiZ2FtZV9fbGl2ZXNcIj5cbiAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG48L2Rpdj5cbjwvaGVhZGVyPmA7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxheW91dDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHN0YXRzTGF5b3V0RG9tIGZyb20gJy4vc3RhdHNTY3JlZW4nO1xuaW1wb3J0IGhlYWRlckxheW91dCBmcm9tICcuL2hlYWRlckxheW91dCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgZ2FtZTNMYXlvdXQgPSBgXG4ke2hlYWRlckxheW91dH1cbjxkaXYgaWQ9XCJnYW1lLTMtZGl2XCIgY2xhc3M9XCJnYW1lLTMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7QndCw0LnQtNC40YLQtSDRgNC40YHRg9C90L7QuiDRgdGA0LXQtNC4INC40LfQvtCx0YDQsNC20LXQvdC40Lk8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgIGdhbWVfX2NvbnRlbnQtLXRyaXBsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uICBnYW1lX19vcHRpb24tLXNlbGVjdGVkXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBnYW1lM0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoZ2FtZTNMYXlvdXQpO1xuY29uc3Qgc2hvd1N0YXRzU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihzdGF0c0xheW91dERvbSk7XG5cbmNvbnN0IGdhbWVPcHRpb25zID0gZ2FtZTNMYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuXG5nYW1lT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd1N0YXRzU2NyZWVuKTtcbn0pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihnYW1lM0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWUzTGF5b3V0RG9tO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgZ2FtZTNMYXlvdXREb20gZnJvbSAnLi9waWNrUGFpbnRpbmdGcm9tSW1hZ2VzU2NyZWVuJztcbmltcG9ydCBoZWFkZXJMYXlvdXQgZnJvbSAnLi9oZWFkZXJMYXlvdXQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUyTGF5b3V0ID0gYFxuJHtoZWFkZXJMYXlvdXR9XG48ZGl2IGlkPVwiZ2FtZS0yLWRpdlwiIGNsYXNzPVwiZ2FtZS0yIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7Qo9Cz0LDQtNCw0LksINGE0L7RgtC+INC40LvQuCDRgNC40YHRg9C90L7Quj88L3A+XG4gICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50ICBnYW1lX19jb250ZW50LS13aWRlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC83MDV4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjcwNVwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXdpZGUgIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICR7Zm9vdGVyTGF5b3V0fWA7XG5cbmNvbnN0IGdhbWUyTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChnYW1lMkxheW91dCk7XG5jb25zdCBzaG93R2FtZTNTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKGdhbWUzTGF5b3V0RG9tKTtcblxuY29uc3QgZ2FtZUFuc3dlcnMgPSBnYW1lMkxheW91dERvbS5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fYW5zd2VyYCk7XG5cbmdhbWVBbnN3ZXJzLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93R2FtZTNTY3JlZW4pO1xufSk7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKGdhbWUyTGF5b3V0RG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTJMYXlvdXREb207XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBnYW1lMkxheW91dERvbSBmcm9tICcuL3BpY2tQaG90b09yUGFpbnRpbmdTY3JlZW4nO1xuaW1wb3J0IGhlYWRlckxheW91dCBmcm9tICcuL2hlYWRlckxheW91dCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgZ2FtZTFMYXlvdXQgPSBgXG4ke2hlYWRlckxheW91dH1cbjxkaXYgaWQ9XCJnYW1lLTEtZGl2XCIgY2xhc3M9XCJnYW1lLTEgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7Qo9Cz0LDQtNCw0LnRgtC1INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+INC40LvQuCDRgNC40YHRg9C90L7Quj88L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC80Njh4NDU4XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjQ2OFwiIGhlaWdodD1cIjQ1OFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ2OHg0NThcIiBhbHQ9XCJPcHRpb24gMlwiIHdpZHRoPVwiNDY4XCIgaGVpZ2h0PVwiNDU4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMlwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24yXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBnYW1lMUxheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoZ2FtZTFMYXlvdXQpO1xuY29uc3Qgc2hvd0dhbWUyU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihnYW1lMkxheW91dERvbSk7XG5cbmNvbnN0IGdhbWVPcHRpb25GaWVsZHMgPSBnYW1lMUxheW91dERvbS5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fb3B0aW9uYCk7XG5jb25zdCBnYW1lQ29udGVudCA9IGdhbWUxTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5nYW1lX19jb250ZW50YCk7XG5cbmdhbWVPcHRpb25GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgPSBnYW1lQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkYCkubGVuZ3RoO1xuICAgIGlmIChjb3VudCA9PT0gZ2FtZU9wdGlvbkZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHNob3dHYW1lMlNjcmVlbigpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4oZ2FtZTFMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lMUxheW91dERvbTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IGdhbWUxTGF5b3V0RG9tIGZyb20gJy4vcGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29TY3JlZW4nO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHJ1bGVzTGF5b3V0ID0gYDxkaXYgaWQ9XCJydWxlcy1kaXZcIiBjbGFzcz1cInJ1bGVzIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJ1bGVzXCI+XG4gICAgICA8aDEgY2xhc3M9XCJydWxlc19fdGl0bGVcIj7Qn9GA0LDQstC40LvQsDwvaDE+XG4gICAgICA8cCBjbGFzcz1cInJ1bGVzX19kZXNjcmlwdGlvblwiPtCj0LPQsNC00LDQuSAxMCDRgNCw0Lcg0LTQu9GPINC60LDQttC00L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YTQvtGC0L4gPGltZ1xuICAgICAgICBzcmM9XCJpbWcvcGhvdG9faWNvbi5wbmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj4g0LjQu9C4INGA0LjRgdGD0L3QvtC6IDxpbWdcbiAgICAgICAgc3JjPVwiaW1nL3BhaW50X2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgYWx0PVwiXCI+Ljxicj5cbiAgICAgICAg0KTQvtGC0L7Qs9GA0LDRhNC40Y/QvNC4INC40LvQuCDRgNC40YHRg9C90LrQsNC80Lgg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtCx0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjy48YnI+XG4gICAgICAgINCd0LAg0LrQsNC20LTRg9GOINC/0L7Qv9GL0YLQutGDINC+0YLQstC+0LTQuNGC0YHRjyAzMCDRgdC10LrRg9C90LQuPGJyPlxuICAgICAgICDQntGI0LjQsdC40YLRjNGB0Y8g0LzQvtC20L3QviDQvdC1INCx0L7Qu9C10LUgMyDRgNCw0LcuPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgINCT0L7RgtC+0LLRiz9cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwicnVsZXNfX2Zvcm1cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwicnVsZXNfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INCY0LzRj1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicnVsZXNfX2J1dHRvbiAgY29udGludWVcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ+R28hPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBydWxlc0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQocnVsZXNMYXlvdXQpO1xuY29uc3Qgc2hvd0dhbWUxU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihnYW1lMUxheW91dERvbSk7XG5cbmNvbnN0IHJ1bGVzSW5wdXQgPSBydWxlc0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2lucHV0YCk7XG5jb25zdCBydWxlc0J1dHRvbiA9IHJ1bGVzTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5ydWxlc19fYnV0dG9uYCk7XG5cbmNvbnN0IHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChydWxlc0lucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBydWxlc0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoYGRpc2FibGVkYCk7XG4gIH0gZWxzZSB7XG4gICAgcnVsZXNCdXR0b24uc2V0QXR0cmlidXRlKGBkaXNhYmxlZGAsIGBkaXNhYmxlZGApO1xuICB9XG59O1xuXG5ydWxlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgcnVsZXNJbnB1dElucHV0SGFuZGxlcik7XG4vLyDQv9C+0L/RgNC+0LHQvtCy0LDQu9CwINC/0L7QvNC10L3Rj9GC0Ywg0L3QsCBzdWJtaXQg0LXRidC1INGA0LDQtywg0YTQvtGA0LzQsCDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjywg0YHRgtGA0LDQvdC40YbQsCDQv9C10YDQtdC30LDQs9GA0YPQttCw0LXRgtGB0Y8g0Lgg0LLRgdGRKFxucnVsZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93R2FtZTFTY3JlZW4pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihydWxlc0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGVzTGF5b3V0RG9tO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBydWxlc0xheW91dERvbSBmcm9tICcuL3J1bGVzU2NyZWVuJztcblxuY29uc3QgZ3JlZXRpbmdMYXlvdXQgPSBgPGRpdiBpZD1cImdyZWV0aW5nLWRpdlwiIGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbF9fY29udGVudFwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbC0tYmx1clwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fbG9nb1wiPjxpbWcgc3JjPVwiaW1nL2xvZ29fYmlnLnBuZ1wiIHdpZHRoPVwiMjAxXCIgaGVpZ2h0PVwiODlcIiBhbHQ9XCJQaXhlbCBIdW50ZXJcIj48L2Rpdj5cbiAgICA8aDEgY2xhc3M9XCJncmVldGluZ19fYXN0ZXJpc2tcIj4qPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NoYWxsZW5nZVwiPlxuICAgICAgPGgzPtCb0YPRh9GI0LjQtSDRhdGD0LTQvtC20L3QuNC60Lgt0YTQvtGC0L7RgNC10LDQu9C40YHRgtGLINCx0YDQvtGB0LDRjtGCJm5ic3A70YLQtdCx0LUmbmJzcDvQstGL0LfQvtCyITwvaDM+XG4gICAgICA8cD7Qn9GA0LDQstC40LvQsCDQuNCz0YDRiyDQv9GA0L7RgdGC0YsuPGJyPlxuICAgICAgICDQndGD0LbQvdC+INC+0YLQu9C40YfQuNGC0Ywg0YDQuNGB0YPQvdC+0LombmJzcDvQvtGCINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INGB0LTQtdC70LDRgtGMINCy0YvQsdC+0YAuPGJyPlxuICAgICAgICDQl9Cw0LTQsNGH0LAg0LrQsNC20LXRgtGB0Y8g0YLRgNC40LLQuNCw0LvRjNC90L7QuSwg0L3QviDQvdC1INC00YPQvNCw0LksINGH0YLQviDQstGB0LUg0YLQsNC6INC/0YDQvtGB0YLQvi48YnI+XG4gICAgICAgINCk0L7RgtC+0YDQtdCw0LvQuNC30Lwg0L7QsdC80LDQvdGH0LjQsiDQuCDQutC+0LLQsNGA0LXQvS48YnI+XG4gICAgICAgINCf0L7QvNC90LgsINCz0LvQsNCy0L3QvtC1IOKAlCDRgdC80L7RgtGA0LXRgtGMINC+0YfQtdC90Ywg0LLQvdC40LzQsNGC0LXQu9GM0L3Qvi48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jb250aW51ZVwiPjxzcGFuPjxpbWcgc3JjPVwiaW1nL2Fycm93X3JpZ2h0LnN2Z1wiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIGFsdD1cIk5leHRcIj48L3NwYW4+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4ke2Zvb3RlckxheW91dH1cbmA7XG5cbmNvbnN0IHNob3dSdWxlc1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4ocnVsZXNMYXlvdXREb20pO1xuXG5jb25zdCBncmVldGluZ0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoZ3JlZXRpbmdMYXlvdXQpO1xuY29uc3QgZ3JlZXRpbmdDb250aW51ZSA9IGdyZWV0aW5nTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5ncmVldGluZ19fY29udGludWVgKTtcbmdyZWV0aW5nQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93UnVsZXNTY3JlZW4pO1xuZXhwb3J0IGRlZmF1bHQgZ3JlZXRpbmdMYXlvdXREb207XG4iLCJpbXBvcnQgZ3JlZXRpbmdMYXlvdXREb20gZnJvbSAnLi9ncmVldGluZ1NjcmVlbic7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuXG5jb25zdCBzaG93R3JlZXRpbmdTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKGdyZWV0aW5nTGF5b3V0RG9tKTtcblxuY29uc3QgYmFja1RvR3JlZXRpbmdTY3JlZW4gPSAoZG9tRWxlbWVudCkgPT4ge1xuICBjb25zdCBidG5CYWNrID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuYmFja2ApO1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dyZWV0aW5nU2NyZWVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tUb0dyZWV0aW5nU2NyZWVuO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBzdGF0c0xheW91dCA9IGA8ZGl2IGlkPVwic3RhdHMtZGl2XCIgY2xhc3M9XCJzdGF0cyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgIDxoMT7Qn9C+0LHQtdC00LAhPC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+MS48L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDsxMDA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj45MDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDRgdC60L7RgNC+0YHRgtGMOjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjEmbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWFsaXZlXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+MTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QqNGC0YDQsNGEINC30LAg0LzQtdC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4tMTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj45NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+Mi48L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+ZmFpbDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4zLjwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzEwMDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjkwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINC20LjQt9C90Lg6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1hbGl2ZVwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIiBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+OTUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3Qgc3RhdHNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KHN0YXRzTGF5b3V0KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4oc3RhdHNMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0c0xheW91dERvbTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLGFBQWEsR0FBRyxVQUFVLE1BQU0sRUFBRTtFQUN0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
