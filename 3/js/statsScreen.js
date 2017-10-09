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

const pickPaintingFromImagesLayout = `
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

const pickPaintingFromImagesLayoutDom = createElement(pickPaintingFromImagesLayout);
const showStatsScreen = () => showScreen(statsLayoutDom);

const gameOptions = pickPaintingFromImagesLayoutDom.querySelectorAll(`.game__option`);

gameOptions.forEach(function (btn) {
  btn.addEventListener(`click`, showStatsScreen);
});

backToGreetingScreen(pickPaintingFromImagesLayoutDom);

const pickPhotoOrPaintingLayout = `
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

const pickPhotoOrPaintingLayoutDom = createElement(pickPhotoOrPaintingLayout);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const gameAnswers = pickPhotoOrPaintingLayoutDom.querySelectorAll(`.game__answer`);

gameAnswers.forEach(function (btn) {
  btn.addEventListener(`click`, pickPaintingFromImagesScreen);
});

backToGreetingScreen(pickPhotoOrPaintingLayoutDom);

const pickPhotoOrPaintingFromTwoLayout = `
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

const pickPhotoOrPaintingFromTwoLayoutDom = createElement(pickPhotoOrPaintingFromTwoLayout);
const showGPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);

const gameOptionFields = pickPhotoOrPaintingFromTwoLayoutDom.querySelectorAll(`.game__option`);
const gameContent = pickPhotoOrPaintingFromTwoLayoutDom.querySelector(`.game__content`);

gameOptionFields.forEach(function (element) {
  element.addEventListener(`click`, function () {
    let count = 0;
    count = gameContent.querySelectorAll(`input[type=radio]:checked`).length;
    if (count === gameOptionFields.length) {
      showGPhotoOrPaintingScreen();
    }
  });
});

backToGreetingScreen(pickPhotoOrPaintingFromTwoLayoutDom);

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
const showPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);

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
rulesButton.addEventListener(`click`, showPhotoOrPaintingFromTwoScreen);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHNTY3JlZW4uanMiLCJzb3VyY2VzIjpbImpzL2NyZWF0ZUVsZW1lbnQuanMiLCJqcy9mb290ZXJMYXlvdXQuanMiLCJqcy9zaG93U2NyZWVuLmpzIiwianMvaGVhZGVyTGF5b3V0LmpzIiwianMvcGlja1BhaW50aW5nRnJvbUltYWdlc1NjcmVlbi5qcyIsImpzL3BpY2tQaG90b09yUGFpbnRpbmdTY3JlZW4uanMiLCJqcy9waWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbi5qcyIsImpzL3J1bGVzU2NyZWVuLmpzIiwianMvZ3JlZXRpbmdTY3JlZW4uanMiLCJqcy9iYWNrVG9HcmVldGluZ1NjcmVlbi5qcyIsImpzL3N0YXRzU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICBuZXdEaXYuaW5uZXJIVE1MID0gbGF5b3V0O1xuICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImNvbnN0IGZvb3RlckxheW91dCA9IGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG48YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG48c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuPC9kaXY+XG48L2Zvb3Rlcj5gO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJMYXlvdXQ7XG4iLCJjb25zdCBjZW50cmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbnRyYWxgKTtcblxuY29uc3Qgc2hvd1NjcmVlbiA9IGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gIGNlbnRyYWwuaW5uZXJIVE1MID0gYGA7XG5cbiAgY2VudHJhbC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dTY3JlZW47XG4iLCJjb25zdCBoZWFkZXJMYXlvdXQgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj5OTjwvaDE+XG48ZGl2IGNsYXNzPVwiZ2FtZV9fbGl2ZXNcIj5cbiAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG48L2Rpdj5cbjwvaGVhZGVyPmA7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxheW91dDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHN0YXRzTGF5b3V0RG9tIGZyb20gJy4vc3RhdHNTY3JlZW4nO1xuaW1wb3J0IGhlYWRlckxheW91dCBmcm9tICcuL2hlYWRlckxheW91dCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgcGlja1BhaW50aW5nRnJvbUltYWdlc0xheW91dCA9IGBcbiR7aGVhZGVyTGF5b3V0fVxuPGRpdiBpZD1cImdhbWUtMy1kaXZcIiBjbGFzcz1cImdhbWUtMyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCd0LDQudC00LjRgtC1INGA0LjRgdGD0L3QvtC6INGB0YDQtdC00Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuTwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudCAgZ2FtZV9fY29udGVudC0tdHJpcGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb24gIGdhbWVfX29wdGlvbi0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICR7Zm9vdGVyTGF5b3V0fWA7XG5cbmNvbnN0IHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXQpO1xuY29uc3Qgc2hvd1N0YXRzU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihzdGF0c0xheW91dERvbSk7XG5cbmNvbnN0IGdhbWVPcHRpb25zID0gcGlja1BhaW50aW5nRnJvbUltYWdlc0xheW91dERvbS5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fb3B0aW9uYCk7XG5cbmdhbWVPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93U3RhdHNTY3JlZW4pO1xufSk7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzTGF5b3V0RG9tO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgcGlja1BhaW50aW5nRnJvbUltYWdlc0xheW91dERvbSBmcm9tICcuL3BpY2tQYWludGluZ0Zyb21JbWFnZXNTY3JlZW4nO1xuaW1wb3J0IGhlYWRlckxheW91dCBmcm9tICcuL2hlYWRlckxheW91dCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgcGlja1Bob3RvT3JQYWludGluZ0xheW91dCA9IGBcbiR7aGVhZGVyTGF5b3V0fVxuPGRpdiBpZD1cImdhbWUtMi1kaXZcIiBjbGFzcz1cImdhbWUtMiBjZW50cmFsX19jb250ZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0KPQs9Cw0LTQsNC5LCDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/PC9wPlxuICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudCAgZ2FtZV9fY29udGVudC0td2lkZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNzA1eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCI3MDVcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS13aWRlICBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBwaWNrUGhvdG9PclBhaW50aW5nTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChwaWNrUGhvdG9PclBhaW50aW5nTGF5b3V0KTtcbmNvbnN0IHBpY2tQYWludGluZ0Zyb21JbWFnZXNTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXREb20pO1xuXG5jb25zdCBnYW1lQW5zd2VycyA9IHBpY2tQaG90b09yUGFpbnRpbmdMYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX2Fuc3dlcmApO1xuXG5nYW1lQW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgcGlja1BhaW50aW5nRnJvbUltYWdlc1NjcmVlbik7XG59KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4ocGlja1Bob3RvT3JQYWludGluZ0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpY2tQaG90b09yUGFpbnRpbmdMYXlvdXREb207XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBwaWNrUGhvdG9PclBhaW50aW5nTGF5b3V0RG9tIGZyb20gJy4vcGlja1Bob3RvT3JQYWludGluZ1NjcmVlbic7XG5pbXBvcnQgaGVhZGVyTGF5b3V0IGZyb20gJy4vaGVhZGVyTGF5b3V0JztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dCA9IGBcbiR7aGVhZGVyTGF5b3V0fVxuPGRpdiBpZD1cImdhbWUtMS1kaXZcIiBjbGFzcz1cImdhbWUtMSBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCj0LPQsNC00LDQudGC0LUg0LTQu9GPINC60LDQttC00L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PzwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ2OHg0NThcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiNDY4XCIgaGVpZ2h0PVwiNDU4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDY4eDQ1OFwiIGFsdD1cIk9wdGlvbiAyXCIgd2lkdGg9XCI0NjhcIiBoZWlnaHQ9XCI0NThcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24yXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjJcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICR7Zm9vdGVyTGF5b3V0fWA7XG5cbmNvbnN0IHBpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dCk7XG5jb25zdCBzaG93R1Bob3RvT3JQYWludGluZ1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4ocGlja1Bob3RvT3JQYWludGluZ0xheW91dERvbSk7XG5cbmNvbnN0IGdhbWVPcHRpb25GaWVsZHMgPSBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbS5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fb3B0aW9uYCk7XG5jb25zdCBnYW1lQ29udGVudCA9IHBpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5nYW1lX19jb250ZW50YCk7XG5cbmdhbWVPcHRpb25GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgPSBnYW1lQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkYCkubGVuZ3RoO1xuICAgIGlmIChjb3VudCA9PT0gZ2FtZU9wdGlvbkZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHNob3dHUGhvdG9PclBhaW50aW5nU2NyZWVuKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvTGF5b3V0RG9tO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgcGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXREb20gZnJvbSAnLi9waWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbic7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgcnVsZXNMYXlvdXQgPSBgPGRpdiBpZD1cInJ1bGVzLWRpdlwiIGNsYXNzPVwicnVsZXMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicnVsZXNcIj5cbiAgICAgIDxoMSBjbGFzcz1cInJ1bGVzX190aXRsZVwiPtCf0YDQsNCy0LjQu9CwPC9oMT5cbiAgICAgIDxwIGNsYXNzPVwicnVsZXNfX2Rlc2NyaXB0aW9uXCI+0KPQs9Cw0LTQsNC5IDEwINGA0LDQtyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviA8aW1nXG4gICAgICAgIHNyYz1cImltZy9waG90b19pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPiDQuNC70Lgg0YDQuNGB0YPQvdC+0LogPGltZ1xuICAgICAgICBzcmM9XCJpbWcvcGFpbnRfaWNvbi5wbmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBhbHQ9XCJcIj4uPGJyPlxuICAgICAgICDQpNC+0YLQvtCz0YDQsNGE0LjRj9C80Lgg0LjQu9C4INGA0LjRgdGD0L3QutCw0LzQuCDQvNC+0LPRg9GCINCx0YvRgtGMINC+0LHQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPLjxicj5cbiAgICAgICAg0J3QsCDQutCw0LbQtNGD0Y4g0L/QvtC/0YvRgtC60YMg0L7RgtCy0L7QtNC40YLRgdGPIDMwINGB0LXQutGD0L3QtC48YnI+XG4gICAgICAgINCe0YjQuNCx0LjRgtGM0YHRjyDQvNC+0LbQvdC+INC90LUg0LHQvtC70LXQtSAzINGA0LDQty48YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAg0JPQvtGC0L7QstGLP1xuICAgICAgPC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJydWxlc19fZm9ybVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJydWxlc19faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0JjQvNGPXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJydWxlc19fYnV0dG9uICBjb250aW51ZVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD5HbyE8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICR7Zm9vdGVyTGF5b3V0fWA7XG5cbmNvbnN0IHJ1bGVzTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChydWxlc0xheW91dCk7XG5jb25zdCBzaG93UGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4ocGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXREb20pO1xuXG5jb25zdCBydWxlc0lucHV0ID0gcnVsZXNMYXlvdXREb20ucXVlcnlTZWxlY3RvcihgLnJ1bGVzX19pbnB1dGApO1xuY29uc3QgcnVsZXNCdXR0b24gPSBydWxlc0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2J1dHRvbmApO1xuXG5jb25zdCBydWxlc0lucHV0SW5wdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAocnVsZXNJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgcnVsZXNCdXR0b24ucmVtb3ZlQXR0cmlidXRlKGBkaXNhYmxlZGApO1xuICB9IGVsc2Uge1xuICAgIHJ1bGVzQnV0dG9uLnNldEF0dHJpYnV0ZShgZGlzYWJsZWRgLCBgZGlzYWJsZWRgKTtcbiAgfVxufTtcblxucnVsZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIpO1xuLy8g0L/QvtC/0YDQvtCx0L7QstCw0LvQsCDQv9C+0LzQtdC90Y/RgtGMINC90LAgc3VibWl0INC10YnQtSDRgNCw0LcsINGE0L7RgNC80LAg0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXRgtGB0Y8sINGB0YLRgNCw0L3QuNGG0LAg0L/QtdGA0LXQt9Cw0LPRgNGD0LbQsNC10YLRgdGPINC4INCy0YHRkShcbnJ1bGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd1Bob3RvT3JQYWludGluZ0Zyb21Ud29TY3JlZW4pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihydWxlc0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGVzTGF5b3V0RG9tO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBydWxlc0xheW91dERvbSBmcm9tICcuL3J1bGVzU2NyZWVuJztcblxuY29uc3QgZ3JlZXRpbmdMYXlvdXQgPSBgPGRpdiBpZD1cImdyZWV0aW5nLWRpdlwiIGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbF9fY29udGVudFwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbC0tYmx1clwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fbG9nb1wiPjxpbWcgc3JjPVwiaW1nL2xvZ29fYmlnLnBuZ1wiIHdpZHRoPVwiMjAxXCIgaGVpZ2h0PVwiODlcIiBhbHQ9XCJQaXhlbCBIdW50ZXJcIj48L2Rpdj5cbiAgICA8aDEgY2xhc3M9XCJncmVldGluZ19fYXN0ZXJpc2tcIj4qPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NoYWxsZW5nZVwiPlxuICAgICAgPGgzPtCb0YPRh9GI0LjQtSDRhdGD0LTQvtC20L3QuNC60Lgt0YTQvtGC0L7RgNC10LDQu9C40YHRgtGLINCx0YDQvtGB0LDRjtGCJm5ic3A70YLQtdCx0LUmbmJzcDvQstGL0LfQvtCyITwvaDM+XG4gICAgICA8cD7Qn9GA0LDQstC40LvQsCDQuNCz0YDRiyDQv9GA0L7RgdGC0YsuPGJyPlxuICAgICAgICDQndGD0LbQvdC+INC+0YLQu9C40YfQuNGC0Ywg0YDQuNGB0YPQvdC+0LombmJzcDvQvtGCINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INGB0LTQtdC70LDRgtGMINCy0YvQsdC+0YAuPGJyPlxuICAgICAgICDQl9Cw0LTQsNGH0LAg0LrQsNC20LXRgtGB0Y8g0YLRgNC40LLQuNCw0LvRjNC90L7QuSwg0L3QviDQvdC1INC00YPQvNCw0LksINGH0YLQviDQstGB0LUg0YLQsNC6INC/0YDQvtGB0YLQvi48YnI+XG4gICAgICAgINCk0L7RgtC+0YDQtdCw0LvQuNC30Lwg0L7QsdC80LDQvdGH0LjQsiDQuCDQutC+0LLQsNGA0LXQvS48YnI+XG4gICAgICAgINCf0L7QvNC90LgsINCz0LvQsNCy0L3QvtC1IOKAlCDRgdC80L7RgtGA0LXRgtGMINC+0YfQtdC90Ywg0LLQvdC40LzQsNGC0LXQu9GM0L3Qvi48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jb250aW51ZVwiPjxzcGFuPjxpbWcgc3JjPVwiaW1nL2Fycm93X3JpZ2h0LnN2Z1wiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIGFsdD1cIk5leHRcIj48L3NwYW4+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4ke2Zvb3RlckxheW91dH1cbmA7XG5cbmNvbnN0IHNob3dSdWxlc1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4ocnVsZXNMYXlvdXREb20pO1xuXG5jb25zdCBncmVldGluZ0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoZ3JlZXRpbmdMYXlvdXQpO1xuY29uc3QgZ3JlZXRpbmdDb250aW51ZSA9IGdyZWV0aW5nTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5ncmVldGluZ19fY29udGludWVgKTtcbmdyZWV0aW5nQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93UnVsZXNTY3JlZW4pO1xuZXhwb3J0IGRlZmF1bHQgZ3JlZXRpbmdMYXlvdXREb207XG4iLCJpbXBvcnQgZ3JlZXRpbmdMYXlvdXREb20gZnJvbSAnLi9ncmVldGluZ1NjcmVlbic7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuXG5jb25zdCBzaG93R3JlZXRpbmdTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKGdyZWV0aW5nTGF5b3V0RG9tKTtcblxuY29uc3QgYmFja1RvR3JlZXRpbmdTY3JlZW4gPSAoZG9tRWxlbWVudCkgPT4ge1xuICBjb25zdCBidG5CYWNrID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuYmFja2ApO1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dyZWV0aW5nU2NyZWVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tUb0dyZWV0aW5nU2NyZWVuO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBzdGF0c0xheW91dCA9IGA8ZGl2IGlkPVwic3RhdHMtZGl2XCIgY2xhc3M9XCJzdGF0cyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgIDxoMT7Qn9C+0LHQtdC00LAhPC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+MS48L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDsxMDA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj45MDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDRgdC60L7RgNC+0YHRgtGMOjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjEmbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWFsaXZlXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+MTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QqNGC0YDQsNGEINC30LAg0LzQtdC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4tMTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj45NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+Mi48L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+ZmFpbDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4zLjwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzEwMDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjkwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINC20LjQt9C90Lg6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1hbGl2ZVwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIiBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+OTUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3Qgc3RhdHNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KHN0YXRzTGF5b3V0KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4oc3RhdHNMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0c0xheW91dERvbTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLGFBQWEsR0FBRyxVQUFVLE1BQU0sRUFBRTtFQUN0QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUMxQixPQUFPLE1BQU0sQ0FBQztDQUNmLENBQUMsQUFFRixBQUE2Qjs7QUNON0IsTUFBTSxZQUFZLEdBQUcsQ0FBQzs7Ozs7Ozs7O1NBU2IsQ0FBQyxDQUFDLEFBRVgsQUFBNEI7O0FDWDVCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztBQUVuRCxNQUFNLFVBQVUsR0FBRyxVQUFVLFVBQVUsRUFBRTtFQUN2QyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUV2QixPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FB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
