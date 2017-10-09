var pickPhotoOrPaintingFromTwoScreen = (function () {
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

return pickPhotoOrPaintingFromTwoLayoutDom;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29TY3JlZW4uanMiLCJzb3VyY2VzIjpbImpzL2NyZWF0ZUVsZW1lbnQuanMiLCJqcy9zaG93U2NyZWVuLmpzIiwianMvZm9vdGVyTGF5b3V0LmpzIiwianMvcnVsZXNTY3JlZW4uanMiLCJqcy9ncmVldGluZ1NjcmVlbi5qcyIsImpzL2JhY2tUb0dyZWV0aW5nU2NyZWVuLmpzIiwianMvc3RhdHNTY3JlZW4uanMiLCJqcy9oZWFkZXJMYXlvdXQuanMiLCJqcy9waWNrUGFpbnRpbmdGcm9tSW1hZ2VzU2NyZWVuLmpzIiwianMvcGlja1Bob3RvT3JQYWludGluZ1NjcmVlbi5qcyIsImpzL3BpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICBuZXdEaXYuaW5uZXJIVE1MID0gbGF5b3V0O1xuICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImNvbnN0IGNlbnRyYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VudHJhbGApO1xuXG5jb25zdCBzaG93U2NyZWVuID0gZnVuY3Rpb24gKGRvbUVsZW1lbnQpIHtcbiAgY2VudHJhbC5pbm5lckhUTUwgPSBgYDtcblxuICBjZW50cmFsLmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1NjcmVlbjtcbiIsImNvbnN0IGZvb3RlckxheW91dCA9IGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG48YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG48c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuPC9kaXY+XG48L2Zvb3Rlcj5gO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJMYXlvdXQ7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbSBmcm9tICcuL3BpY2tQaG90b09yUGFpbnRpbmdGcm9tVHdvU2NyZWVuJztcbmltcG9ydCBmb290ZXJMYXlvdXQgZnJvbSAnLi9mb290ZXJMYXlvdXQnO1xuaW1wb3J0IGJhY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vYmFja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBydWxlc0xheW91dCA9IGA8ZGl2IGlkPVwicnVsZXMtZGl2XCIgY2xhc3M9XCJydWxlcyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJydWxlc1wiPlxuICAgICAgPGgxIGNsYXNzPVwicnVsZXNfX3RpdGxlXCI+0J/RgNCw0LLQuNC70LA8L2gxPlxuICAgICAgPHAgY2xhc3M9XCJydWxlc19fZGVzY3JpcHRpb25cIj7Qo9Cz0LDQtNCw0LkgMTAg0YDQsNC3INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+IDxpbWdcbiAgICAgICAgc3JjPVwiaW1nL3Bob3RvX2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+INC40LvQuCDRgNC40YHRg9C90L7QuiA8aW1nXG4gICAgICAgIHNyYz1cImltZy9wYWludF9pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGFsdD1cIlwiPi48YnI+XG4gICAgICAgINCk0L7RgtC+0LPRgNCw0YTQuNGP0LzQuCDQuNC70Lgg0YDQuNGB0YPQvdC60LDQvNC4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7QsdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8uPGJyPlxuICAgICAgICDQndCwINC60LDQttC00YPRjiDQv9C+0L/Ri9GC0LrRgyDQvtGC0LLQvtC00LjRgtGB0Y8gMzAg0YHQtdC60YPQvdC0Ljxicj5cbiAgICAgICAg0J7RiNC40LHQuNGC0YzRgdGPINC80L7QttC90L4g0L3QtSDQsdC+0LvQtdC1IDMg0YDQsNC3Ljxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICDQk9C+0YLQvtCy0Ys/XG4gICAgICA8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cInJ1bGVzX19mb3JtXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJ1bGVzX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQmNC80Y9cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJ1bGVzX19idXR0b24gIGNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPkdvITwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3QgcnVsZXNMYXlvdXREb20gPSBjcmVhdGVFbGVtZW50KHJ1bGVzTGF5b3V0KTtcbmNvbnN0IHNob3dQaG90b09yUGFpbnRpbmdGcm9tVHdvU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbSk7XG5cbmNvbnN0IHJ1bGVzSW5wdXQgPSBydWxlc0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2lucHV0YCk7XG5jb25zdCBydWxlc0J1dHRvbiA9IHJ1bGVzTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3IoYC5ydWxlc19fYnV0dG9uYCk7XG5cbmNvbnN0IHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChydWxlc0lucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBydWxlc0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoYGRpc2FibGVkYCk7XG4gIH0gZWxzZSB7XG4gICAgcnVsZXNCdXR0b24uc2V0QXR0cmlidXRlKGBkaXNhYmxlZGAsIGBkaXNhYmxlZGApO1xuICB9XG59O1xuXG5ydWxlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgcnVsZXNJbnB1dElucHV0SGFuZGxlcik7XG4vLyDQv9C+0L/RgNC+0LHQvtCy0LDQu9CwINC/0L7QvNC10L3Rj9GC0Ywg0L3QsCBzdWJtaXQg0LXRidC1INGA0LDQtywg0YTQvtGA0LzQsCDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjywg0YHRgtGA0LDQvdC40YbQsCDQv9C10YDQtdC30LDQs9GA0YPQttCw0LXRgtGB0Y8g0Lgg0LLRgdGRKFxucnVsZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93UGhvdG9PclBhaW50aW5nRnJvbVR3b1NjcmVlbik7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKHJ1bGVzTGF5b3V0RG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgcnVsZXNMYXlvdXREb207XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHJ1bGVzTGF5b3V0RG9tIGZyb20gJy4vcnVsZXNTY3JlZW4nO1xuXG5jb25zdCBncmVldGluZ0xheW91dCA9IGA8ZGl2IGlkPVwiZ3JlZXRpbmctZGl2XCIgY2xhc3M9XCJncmVldGluZyBjZW50cmFsX19jb250ZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJncmVldGluZyBjZW50cmFsLS1ibHVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19sb2dvXCI+PGltZyBzcmM9XCJpbWcvbG9nb19iaWcucG5nXCIgd2lkdGg9XCIyMDFcIiBoZWlnaHQ9XCI4OVwiIGFsdD1cIlBpeGVsIEh1bnRlclwiPjwvZGl2PlxuICAgIDxoMSBjbGFzcz1cImdyZWV0aW5nX19hc3Rlcmlza1wiPio8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fY2hhbGxlbmdlXCI+XG4gICAgICA8aDM+0JvRg9GH0YjQuNC1INGF0YPQtNC+0LbQvdC40LrQuC3RhNC+0YLQvtGA0LXQsNC70LjRgdGC0Ysg0LHRgNC+0YHQsNGO0YImbmJzcDvRgtC10LHQtSZuYnNwO9Cy0YvQt9C+0LIhPC9oMz5cbiAgICAgIDxwPtCf0YDQsNCy0LjQu9CwINC40LPRgNGLINC/0YDQvtGB0YLRiy48YnI+XG4gICAgICAgINCd0YPQttC90L4g0L7RgtC70LjRh9C40YLRjCDRgNC40YHRg9C90L7QuiZuYnNwO9C+0YIg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0Lgg0YHQtNC10LvQsNGC0Ywg0LLRi9Cx0L7RgC48YnI+XG4gICAgICAgINCX0LDQtNCw0YfQsCDQutCw0LbQtdGC0YHRjyDRgtGA0LjQstC40LDQu9GM0L3QvtC5LCDQvdC+INC90LUg0LTRg9C80LDQuSwg0YfRgtC+INCy0YHQtSDRgtCw0Log0L/RgNC+0YHRgtC+Ljxicj5cbiAgICAgICAg0KTQvtGC0L7RgNC10LDQu9C40LfQvCDQvtCx0LzQsNC90YfQuNCyINC4INC60L7QstCw0YDQtdC9Ljxicj5cbiAgICAgICAg0J/QvtC80L3QuCwg0LPQu9Cw0LLQvdC+0LUg4oCUINGB0LzQvtGC0YDQtdGC0Ywg0L7Rh9C10L3RjCDQstC90LjQvNCw0YLQtdC70YzQvdC+LjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NvbnRpbnVlXCI+PHNwYW4+PGltZyBzcmM9XCJpbWcvYXJyb3dfcmlnaHQuc3ZnXCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgYWx0PVwiTmV4dFwiPjwvc3Bhbj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiR7Zm9vdGVyTGF5b3V0fVxuYDtcblxuY29uc3Qgc2hvd1J1bGVzU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihydWxlc0xheW91dERvbSk7XG5cbmNvbnN0IGdyZWV0aW5nTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChncmVldGluZ0xheW91dCk7XG5jb25zdCBncmVldGluZ0NvbnRpbnVlID0gZ3JlZXRpbmdMYXlvdXREb20ucXVlcnlTZWxlY3RvcihgLmdyZWV0aW5nX19jb250aW51ZWApO1xuZ3JlZXRpbmdDb250aW51ZS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dSdWxlc1NjcmVlbik7XG5leHBvcnQgZGVmYXVsdCBncmVldGluZ0xheW91dERvbTtcbiIsImltcG9ydCBncmVldGluZ0xheW91dERvbSBmcm9tICcuL2dyZWV0aW5nU2NyZWVuJztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5cbmNvbnN0IHNob3dHcmVldGluZ1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4oZ3JlZXRpbmdMYXlvdXREb20pO1xuXG5jb25zdCBiYWNrVG9HcmVldGluZ1NjcmVlbiA9IChkb21FbGVtZW50KSA9PiB7XG4gIGNvbnN0IGJ0bkJhY2sgPSBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5iYWNrYCk7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93R3JlZXRpbmdTY3JlZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFja1RvR3JlZXRpbmdTY3JlZW47XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHN0YXRzTGF5b3V0ID0gYDxkaXYgaWQ9XCJzdGF0cy1kaXZcIiBjbGFzcz1cInN0YXRzIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGgxPtCf0L7QsdC10LTQsCE8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzEwMDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjkwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINGB0LrQvtGA0L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MSZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tYWxpdmVcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCo0YLRgNCw0YQg0LfQsCDQvNC10LTQu9C40YLQtdC70YzQvdC+0YHRgtGMOjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPi0xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPjk1MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4yLjwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj5mYWlsPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjMuPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7MTAwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+OTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWFsaXZlXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+MTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj45NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBzdGF0c0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQoc3RhdHNMYXlvdXQpO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihzdGF0c0xheW91dERvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRzTGF5b3V0RG9tO1xuIiwiY29uc3QgaGVhZGVyTGF5b3V0ID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbjxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxoMSBjbGFzcz1cImdhbWVfX3RpbWVyXCI+Tk48L2gxPlxuPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19lbXB0eS5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuPC9kaXY+XG48L2hlYWRlcj5gO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJMYXlvdXQ7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzdGF0c0xheW91dERvbSBmcm9tICcuL3N0YXRzU2NyZWVuJztcbmltcG9ydCBoZWFkZXJMYXlvdXQgZnJvbSAnLi9oZWFkZXJMYXlvdXQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXQgPSBgXG4ke2hlYWRlckxheW91dH1cbjxkaXYgaWQ9XCJnYW1lLTMtZGl2XCIgY2xhc3M9XCJnYW1lLTMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7QndCw0LnQtNC40YLQtSDRgNC40YHRg9C90L7QuiDRgdGA0LXQtNC4INC40LfQvtCx0YDQsNC20LXQvdC40Lk8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgIGdhbWVfX2NvbnRlbnQtLXRyaXBsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uICBnYW1lX19vcHRpb24tLXNlbGVjdGVkXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzTGF5b3V0RG9tID0gY3JlYXRlRWxlbWVudChwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzTGF5b3V0KTtcbmNvbnN0IHNob3dTdGF0c1NjcmVlbiA9ICgpID0+IHNob3dTY3JlZW4oc3RhdHNMYXlvdXREb20pO1xuXG5jb25zdCBnYW1lT3B0aW9ucyA9IHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuXG5nYW1lT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd1N0YXRzU2NyZWVuKTtcbn0pO1xuXG5iYWNrVG9HcmVldGluZ1NjcmVlbihwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzTGF5b3V0RG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgcGlja1BhaW50aW5nRnJvbUltYWdlc0xheW91dERvbTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHBpY2tQYWludGluZ0Zyb21JbWFnZXNMYXlvdXREb20gZnJvbSAnLi9waWNrUGFpbnRpbmdGcm9tSW1hZ2VzU2NyZWVuJztcbmltcG9ydCBoZWFkZXJMYXlvdXQgZnJvbSAnLi9oZWFkZXJMYXlvdXQnO1xuaW1wb3J0IGZvb3RlckxheW91dCBmcm9tICcuL2Zvb3RlckxheW91dCc7XG5pbXBvcnQgYmFja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9iYWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHBpY2tQaG90b09yUGFpbnRpbmdMYXlvdXQgPSBgXG4ke2hlYWRlckxheW91dH1cbjxkaXYgaWQ9XCJnYW1lLTItZGl2XCIgY2xhc3M9XCJnYW1lLTIgY2VudHJhbF9fY29udGVudFwiPlxuICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCj0LPQsNC00LDQuSwg0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PzwvcD5cbiAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgIGdhbWVfX2NvbnRlbnQtLXdpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzcwNXg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiNzA1XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0td2lkZSAgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgJHtmb290ZXJMYXlvdXR9YDtcblxuY29uc3QgcGlja1Bob3RvT3JQYWludGluZ0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQocGlja1Bob3RvT3JQYWludGluZ0xheW91dCk7XG5jb25zdCBwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzU2NyZWVuID0gKCkgPT4gc2hvd1NjcmVlbihwaWNrUGFpbnRpbmdGcm9tSW1hZ2VzTGF5b3V0RG9tKTtcblxuY29uc3QgZ2FtZUFuc3dlcnMgPSBwaWNrUGhvdG9PclBhaW50aW5nTGF5b3V0RG9tLnF1ZXJ5U2VsZWN0b3JBbGwoYC5nYW1lX19hbnN3ZXJgKTtcblxuZ2FtZUFuc3dlcnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHBpY2tQYWludGluZ0Zyb21JbWFnZXNTY3JlZW4pO1xufSk7XG5cbmJhY2tUb0dyZWV0aW5nU2NyZWVuKHBpY2tQaG90b09yUGFpbnRpbmdMYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrUGhvdG9PclBhaW50aW5nTGF5b3V0RG9tO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgcGlja1Bob3RvT3JQYWludGluZ0xheW91dERvbSBmcm9tICcuL3BpY2tQaG90b09yUGFpbnRpbmdTY3JlZW4nO1xuaW1wb3J0IGhlYWRlckxheW91dCBmcm9tICcuL2hlYWRlckxheW91dCc7XG5pbXBvcnQgZm9vdGVyTGF5b3V0IGZyb20gJy4vZm9vdGVyTGF5b3V0JztcbmltcG9ydCBiYWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2JhY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgcGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXQgPSBgXG4ke2hlYWRlckxheW91dH1cbjxkaXYgaWQ9XCJnYW1lLTEtZGl2XCIgY2xhc3M9XCJnYW1lLTEgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7Qo9Cz0LDQtNCw0LnRgtC1INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+INC40LvQuCDRgNC40YHRg9C90L7Quj88L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC80Njh4NDU4XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjQ2OFwiIGhlaWdodD1cIjQ1OFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ2OHg0NThcIiBhbHQ9XCJPcHRpb24gMlwiIHdpZHRoPVwiNDY4XCIgaGVpZ2h0PVwiNDU4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMlwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24yXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAke2Zvb3RlckxheW91dH1gO1xuXG5jb25zdCBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbSA9IGNyZWF0ZUVsZW1lbnQocGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXQpO1xuY29uc3Qgc2hvd0dQaG90b09yUGFpbnRpbmdTY3JlZW4gPSAoKSA9PiBzaG93U2NyZWVuKHBpY2tQaG90b09yUGFpbnRpbmdMYXlvdXREb20pO1xuXG5jb25zdCBnYW1lT3B0aW9uRmllbGRzID0gcGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXREb20ucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuY29uc3QgZ2FtZUNvbnRlbnQgPSBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbS5xdWVyeVNlbGVjdG9yKGAuZ2FtZV9fY29udGVudGApO1xuXG5nYW1lT3B0aW9uRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvdW50ID0gZ2FtZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZGApLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IGdhbWVPcHRpb25GaWVsZHMubGVuZ3RoKSB7XG4gICAgICBzaG93R1Bob3RvT3JQYWludGluZ1NjcmVlbigpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuYmFja1RvR3JlZXRpbmdTY3JlZW4ocGlja1Bob3RvT3JQYWludGluZ0Zyb21Ud29MYXlvdXREb20pO1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrUGhvdG9PclBhaW50aW5nRnJvbVR3b0xheW91dERvbTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLGFBQWEsR0FBRyxVQUFVLE1BQU0sRUFBRTtFQUN0QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUMxQixPQUFPLE1BQU0sQ0FBQztDQUNmLENBQUMsQUFFRixBQUE2Qjs7QUNON0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O0FBRW5ELE1BQU0sVUFBVSxHQUFHLFVBQVUsVUFBVSxFQUFFO0VBQ3ZDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDakMsQ0FBQyxBQUVGLEFBQTBCOztBQ1IxQixNQUFN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
