var checkToGreetingScreen = (function () {
'use strict';

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen) {
  const currentDiv = central.querySelector(`.central__content`);
  currentDiv.remove();
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  central.appendChild(newDiv);

  const deleteEmptyDivs = function () {
    const divs = central.querySelectorAll(`div`);

    divs.forEach(function (div) {
      if (div.innerHTML.length === 0) {
        div.remove();
      }
    });
  };
  deleteEmptyDivs();


  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
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
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </div>
  </div>`;

const showStatsScreen = function () {
  showScreen(statsLayout, checkToGreetingScreen);
};

const game3Layout = `<div id="game-3-div" class="game-3 central__content">
    <header class="header">
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
    </header>
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
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </div>`;

const showGame3Screen = function () {
  showScreen(game3Layout, checkToStatsScreen);
};

const checkToStatsScreen = function () {
  checkToGreetingScreen();
  const gameOptions = document.querySelectorAll(`.game__option`);

  gameOptions.forEach(function (btn) {
    btn.addEventListener(`click`, showStatsScreen);
  });
};

const game2Layout = `<div id="game-2-div" class="game-2 central__content">
    <header class="header">
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
    </header>
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
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </div>`;


const showGame2Screen = function () {
  showScreen(game2Layout, checkToGame3Screen);
};

const checkToGame3Screen = function () {
  checkToGreetingScreen();
  const gameAnswers = document.querySelectorAll(`.game__answer`);

  gameAnswers.forEach(function (btn) {
    btn.addEventListener(`click`, showGame3Screen);
  });
};

const game1Layout = `<div id="game-1-div" class="game-1 central__content">
    <header class="header">
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
    </header>
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
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </div>`;


const showGame1Screen = function () {
  showScreen(game1Layout, checkToGame2Screen);
};

const checkToGame2Screen = function () {
  checkToGreetingScreen();

  const gameOptionFields = document.querySelectorAll(`.game__option`);
  const gameContent = document.querySelector(`.game__content`);

  gameOptionFields.forEach(function (element) {
    let count = 0;
    element.addEventListener(`click`, function () {
      count = gameContent.querySelectorAll(`input[type=radio]:checked`).length;
      if (count >= gameOptionFields.length) {
        showGame2Screen();
      }
    });
  });

};

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
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </div>`;


const showRulesScreen = function () {
  showScreen(rulesLayout, checkToGame1Screen);
};

const checkToGame1Screen = function () {
  checkToGreetingScreen();
  const rulesInput = document.querySelector(`.rules__input`);
  const rulesButton = document.querySelector(`.rules__button`);

  const rulesInputInputHandler = function () {
    if (rulesInput.value.length > 0) {
      rulesButton.removeAttribute(`disabled`);
    } else {
      rulesButton.setAttribute(`disabled`, `disabled`);
    }
  };

  rulesInput.addEventListener(`input`, rulesInputInputHandler);
  // потом наверное надо будет поменять событие на submit
  rulesButton.addEventListener(`click`, showGame1Screen);
};

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
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>
</div>
`;

const showGreetingScreen = function () {
  showScreen(greetingLayout, checkToRulesScreen);
};

const checkToRulesScreen = function () {
  const greetingContinue = document.querySelector(`.greeting__continue`);
  greetingContinue.addEventListener(`click`, showRulesScreen);
};

const checkToGreetingScreen = function () {
  const btnBack = document.querySelector(`.back`);
  btnBack.addEventListener(`click`, showGreetingScreen);
};

return checkToGreetingScreen;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tUb0dyZWV0aW5nU2NyZWVuLmpzIiwic291cmNlcyI6WyJqcy9zaG93U2NyZWVuLmpzIiwianMvc3RhdHNTY3JlZW4uanMiLCJqcy9nYW1lM1NjcmVlbi5qcyIsImpzL2dhbWUyU2NyZWVuLmpzIiwianMvZ2FtZTFTY3JlZW4uanMiLCJqcy9ydWxlc1NjcmVlbi5qcyIsImpzL2dyZWV0aW5nU2NyZWVuLmpzIiwianMvY2hlY2tUb0dyZWV0aW5nU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNlbnRyYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VudHJhbGApO1xuXG5jb25zdCBzaG93U2NyZWVuID0gZnVuY3Rpb24gKGxheW91dCwgc2hvd05leHRTY3JlZW4pIHtcbiAgY29uc3QgY3VycmVudERpdiA9IGNlbnRyYWwucXVlcnlTZWxlY3RvcihgLmNlbnRyYWxfX2NvbnRlbnRgKTtcbiAgY3VycmVudERpdi5yZW1vdmUoKTtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBsYXlvdXQ7XG4gIGNlbnRyYWwuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICBjb25zdCBkZWxldGVFbXB0eURpdnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGl2cyA9IGNlbnRyYWwucXVlcnlTZWxlY3RvckFsbChgZGl2YCk7XG5cbiAgICBkaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAgICAgaWYgKGRpdi5pbm5lckhUTUwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZGVsZXRlRW1wdHlEaXZzKCk7XG5cblxuICBpZiAodHlwZW9mIHNob3dOZXh0U2NyZWVuID09PSBgZnVuY3Rpb25gKSB7XG4gICAgc2hvd05leHRTY3JlZW4oKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1NjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgY2hlY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vY2hlY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3Qgc3RhdHNMYXlvdXQgPSBgPGRpdiBpZD1cInN0YXRzLWRpdlwiIGNsYXNzPVwic3RhdHMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICA8aDE+0J/QvtCx0LXQtNCwITwvaDE+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjEuPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7MTAwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+OTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0YHQutC+0YDQvtGB0YLRjDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4xJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj41MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINC20LjQt9C90Lg6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1hbGl2ZVwiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0KjRgtGA0LDRhCDQt9CwINC80LXQtNC70LjRgtC10LvRjNC90L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MiZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+LTEwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIiBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+OTUwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjIuPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPmZhaWw8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+My48L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDsxMDA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj45MDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tYWxpdmVcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPjk1MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbmNvbnN0IHNob3dTdGF0c1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihzdGF0c0xheW91dCwgY2hlY2tUb0dyZWV0aW5nU2NyZWVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dTdGF0c1NjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgc2hvd1N0YXRzU2NyZWVuIGZyb20gJy4vc3RhdHNTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUzTGF5b3V0ID0gYDxkaXYgaWQ9XCJnYW1lLTMtZGl2XCIgY2xhc3M9XCJnYW1lLTMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzcz1cImdhbWVfX3RpbWVyXCI+Tk48L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19lbXB0eS5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCd0LDQudC00LjRgtC1INGA0LjRgdGD0L3QvtC6INGB0YDQtdC00Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuTwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudCAgZ2FtZV9fY29udGVudC0tdHJpcGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb24gIGdhbWVfX29wdGlvbi0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzA0eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCIzMDRcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PmA7XG5cbmNvbnN0IHNob3dHYW1lM1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihnYW1lM0xheW91dCwgY2hlY2tUb1N0YXRzU2NyZWVuKTtcbn07XG5cbmNvbnN0IGNoZWNrVG9TdGF0c1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY2hlY2tUb0dyZWV0aW5nU2NyZWVuKCk7XG4gIGNvbnN0IGdhbWVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuXG4gIGdhbWVPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dTdGF0c1NjcmVlbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0dhbWUzU2NyZWVuO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzaG93R2FtZTNTY3JlZW4gZnJvbSAnLi9nYW1lM1NjcmVlbic7XG5pbXBvcnQgY2hlY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vY2hlY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgZ2FtZTJMYXlvdXQgPSBgPGRpdiBpZD1cImdhbWUtMi1kaXZcIiBjbGFzcz1cImdhbWUtMiBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj5OTjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fbGl2ZXNcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0KPQs9Cw0LTQsNC5LCDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/PC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50ICBnYW1lX19jb250ZW50LS13aWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNzA1eDQ1NVwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCI3MDVcIiBoZWlnaHQ9XCI0NTVcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0td2lkZSAgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+YDtcblxuXG5jb25zdCBzaG93R2FtZTJTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oZ2FtZTJMYXlvdXQsIGNoZWNrVG9HYW1lM1NjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvR2FtZTNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNoZWNrVG9HcmVldGluZ1NjcmVlbigpO1xuICBjb25zdCBnYW1lQW5zd2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5nYW1lX19hbnN3ZXJgKTtcblxuICBnYW1lQW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93R2FtZTNTY3JlZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dHYW1lMlNjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgc2hvd0dhbWUyU2NyZWVuIGZyb20gJy4vZ2FtZTJTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUxTGF5b3V0ID0gYDxkaXYgaWQ9XCJnYW1lLTEtZGl2XCIgY2xhc3M9XCJnYW1lLTEgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzcz1cImdhbWVfX3RpbWVyXCI+Tk48L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19lbXB0eS5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCj0LPQsNC00LDQudGC0LUg0LTQu9GPINC60LDQttC00L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PzwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ2OHg0NThcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiNDY4XCIgaGVpZ2h0PVwiNDU4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDY4eDQ1OFwiIGFsdD1cIk9wdGlvbiAyXCIgd2lkdGg9XCI0NjhcIiBoZWlnaHQ9XCI0NThcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24yXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjJcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PmA7XG5cblxuY29uc3Qgc2hvd0dhbWUxU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBzaG93U2NyZWVuKGdhbWUxTGF5b3V0LCBjaGVja1RvR2FtZTJTY3JlZW4pO1xufTtcblxuY29uc3QgY2hlY2tUb0dhbWUyU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjaGVja1RvR3JlZXRpbmdTY3JlZW4oKTtcblxuICBjb25zdCBnYW1lT3B0aW9uRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX29wdGlvbmApO1xuICBjb25zdCBnYW1lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lX19jb250ZW50YCk7XG5cbiAgZ2FtZU9wdGlvbkZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKCkge1xuICAgICAgY291bnQgPSBnYW1lQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkYCkubGVuZ3RoO1xuICAgICAgaWYgKGNvdW50ID49IGdhbWVPcHRpb25GaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgIHNob3dHYW1lMlNjcmVlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0dhbWUxU2NyZWVuO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzaG93R2FtZTFTY3JlZW4gZnJvbSAnLi9nYW1lMVNjcmVlbic7XG5pbXBvcnQgY2hlY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vY2hlY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgcnVsZXNMYXlvdXQgPSBgPGRpdiBpZD1cInJ1bGVzLWRpdlwiIGNsYXNzPVwicnVsZXMgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicnVsZXNcIj5cbiAgICAgIDxoMSBjbGFzcz1cInJ1bGVzX190aXRsZVwiPtCf0YDQsNCy0LjQu9CwPC9oMT5cbiAgICAgIDxwIGNsYXNzPVwicnVsZXNfX2Rlc2NyaXB0aW9uXCI+0KPQs9Cw0LTQsNC5IDEwINGA0LDQtyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviA8aW1nXG4gICAgICAgIHNyYz1cImltZy9waG90b19pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPiDQuNC70Lgg0YDQuNGB0YPQvdC+0LogPGltZ1xuICAgICAgICBzcmM9XCJpbWcvcGFpbnRfaWNvbi5wbmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBhbHQ9XCJcIj4uPGJyPlxuICAgICAgICDQpNC+0YLQvtCz0YDQsNGE0LjRj9C80Lgg0LjQu9C4INGA0LjRgdGD0L3QutCw0LzQuCDQvNC+0LPRg9GCINCx0YvRgtGMINC+0LHQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPLjxicj5cbiAgICAgICAg0J3QsCDQutCw0LbQtNGD0Y4g0L/QvtC/0YvRgtC60YMg0L7RgtCy0L7QtNC40YLRgdGPIDMwINGB0LXQutGD0L3QtC48YnI+XG4gICAgICAgINCe0YjQuNCx0LjRgtGM0YHRjyDQvNC+0LbQvdC+INC90LUg0LHQvtC70LXQtSAzINGA0LDQty48YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAg0JPQvtGC0L7QstGLP1xuICAgICAgPC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJydWxlc19fZm9ybVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJydWxlc19faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0JjQvNGPXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJydWxlc19fYnV0dG9uICBjb250aW51ZVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD5HbyE8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PmA7XG5cblxuY29uc3Qgc2hvd1J1bGVzU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBzaG93U2NyZWVuKHJ1bGVzTGF5b3V0LCBjaGVja1RvR2FtZTFTY3JlZW4pO1xufTtcblxuY29uc3QgY2hlY2tUb0dhbWUxU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjaGVja1RvR3JlZXRpbmdTY3JlZW4oKTtcbiAgY29uc3QgcnVsZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ydWxlc19faW5wdXRgKTtcbiAgY29uc3QgcnVsZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2J1dHRvbmApO1xuXG4gIGNvbnN0IHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJ1bGVzSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgcnVsZXNCdXR0b24ucmVtb3ZlQXR0cmlidXRlKGBkaXNhYmxlZGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoYGRpc2FibGVkYCwgYGRpc2FibGVkYCk7XG4gICAgfVxuICB9O1xuXG4gIHJ1bGVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCBydWxlc0lucHV0SW5wdXRIYW5kbGVyKTtcbiAgLy8g0L/QvtGC0L7QvCDQvdCw0LLQtdGA0L3QvtC1INC90LDQtNC+INCx0YPQtNC10YIg0L/QvtC80LXQvdGP0YLRjCDRgdC+0LHRi9GC0LjQtSDQvdCwIHN1Ym1pdFxuICBydWxlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dHYW1lMVNjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93UnVsZXNTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHNob3dSdWxlc1NjcmVlbiBmcm9tICcuL3J1bGVzU2NyZWVuJztcblxuY29uc3QgZ3JlZXRpbmdMYXlvdXQgPSBgPGRpdiBpZD1cImdyZWV0aW5nLWRpdlwiIGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbF9fY29udGVudFwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmcgY2VudHJhbC0tYmx1clwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fbG9nb1wiPjxpbWcgc3JjPVwiaW1nL2xvZ29fYmlnLnBuZ1wiIHdpZHRoPVwiMjAxXCIgaGVpZ2h0PVwiODlcIiBhbHQ9XCJQaXhlbCBIdW50ZXJcIj48L2Rpdj5cbiAgICA8aDEgY2xhc3M9XCJncmVldGluZ19fYXN0ZXJpc2tcIj4qPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NoYWxsZW5nZVwiPlxuICAgICAgPGgzPtCb0YPRh9GI0LjQtSDRhdGD0LTQvtC20L3QuNC60Lgt0YTQvtGC0L7RgNC10LDQu9C40YHRgtGLINCx0YDQvtGB0LDRjtGCJm5ic3A70YLQtdCx0LUmbmJzcDvQstGL0LfQvtCyITwvaDM+XG4gICAgICA8cD7Qn9GA0LDQstC40LvQsCDQuNCz0YDRiyDQv9GA0L7RgdGC0YsuPGJyPlxuICAgICAgICDQndGD0LbQvdC+INC+0YLQu9C40YfQuNGC0Ywg0YDQuNGB0YPQvdC+0LombmJzcDvQvtGCINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INGB0LTQtdC70LDRgtGMINCy0YvQsdC+0YAuPGJyPlxuICAgICAgICDQl9Cw0LTQsNGH0LAg0LrQsNC20LXRgtGB0Y8g0YLRgNC40LLQuNCw0LvRjNC90L7QuSwg0L3QviDQvdC1INC00YPQvNCw0LksINGH0YLQviDQstGB0LUg0YLQsNC6INC/0YDQvtGB0YLQvi48YnI+XG4gICAgICAgINCk0L7RgtC+0YDQtdCw0LvQuNC30Lwg0L7QsdC80LDQvdGH0LjQsiDQuCDQutC+0LLQsNGA0LXQvS48YnI+XG4gICAgICAgINCf0L7QvNC90LgsINCz0LvQsNCy0L3QvtC1IOKAlCDRgdC80L7RgtGA0LXRgtGMINC+0YfQtdC90Ywg0LLQvdC40LzQsNGC0LXQu9GM0L3Qvi48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jb250aW51ZVwiPjxzcGFuPjxpbWcgc3JjPVwiaW1nL2Fycm93X3JpZ2h0LnN2Z1wiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIGFsdD1cIk5leHRcIj48L3NwYW4+PC9kaXY+XG4gIDwvZGl2PlxuICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IHNob3dHcmVldGluZ1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihncmVldGluZ0xheW91dCwgY2hlY2tUb1J1bGVzU2NyZWVuKTtcbn07XG5cbmNvbnN0IGNoZWNrVG9SdWxlc1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ3JlZXRpbmdDb250aW51ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmVldGluZ19fY29udGludWVgKTtcbiAgZ3JlZXRpbmdDb250aW51ZS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dSdWxlc1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93R3JlZXRpbmdTY3JlZW47XG4iLCJpbXBvcnQgc2hvd0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vZ3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBjaGVja1RvR3JlZXRpbmdTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYmFja2ApO1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dyZWV0aW5nU2NyZWVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrVG9HcmVldGluZ1NjcmVlbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7QUFFbkQsTUFBTSxVQUFVLEdBQUcsVUFBVSxNQUFNLEVBQUUsY0FBYyxFQUFFO0VBQ25ELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7RUFDOUQsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ3BCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0VBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O0VBRTVCLE1BQU0sZUFBZSxHQUFHLFlBQVk7SUFDbEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtNQUMxQixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7T0FDZDtLQUNGLENB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
