var statsScreen = (function () {
'use strict';

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen) {
  const currentDiv = central.querySelector(`.central__content`);
  currentDiv.remove();
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  central.appendChild(newDiv);

  // const deleteEmptyDivs = (function () {
  //   const divs = document.querySelectorAll(`div`);

  //   divs.forEach(function (div) {
  //     if (div.innerHTML.length === 0) {
  //       console.log(';h');
  //       div.remove();
  //     }
  //   });
  // })();

  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
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

const greetingLayout = `
<div id="greeting-div" class="greeting central__content">
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

return showStatsScreen;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHNTY3JlZW4uanMiLCJzb3VyY2VzIjpbImpzL3Nob3dTY3JlZW4uanMiLCJqcy9nYW1lM1NjcmVlbi5qcyIsImpzL2dhbWUyU2NyZWVuLmpzIiwianMvZ2FtZTFTY3JlZW4uanMiLCJqcy9ydWxlc1NjcmVlbi5qcyIsImpzL2dyZWV0aW5nU2NyZWVuLmpzIiwianMvY2hlY2tUb0dyZWV0aW5nU2NyZWVuLmpzIiwianMvc3RhdHNTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2VudHJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZW50cmFsYCk7XG5cbmNvbnN0IHNob3dTY3JlZW4gPSBmdW5jdGlvbiAobGF5b3V0LCBzaG93TmV4dFNjcmVlbikge1xuICBjb25zdCBjdXJyZW50RGl2ID0gY2VudHJhbC5xdWVyeVNlbGVjdG9yKGAuY2VudHJhbF9fY29udGVudGApO1xuICBjdXJyZW50RGl2LnJlbW92ZSgpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgbmV3RGl2LmlubmVySFRNTCA9IGxheW91dDtcbiAgY2VudHJhbC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIC8vIGNvbnN0IGRlbGV0ZUVtcHR5RGl2cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdmApO1xuXG4gIC8vICAgZGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgLy8gICAgIGlmIChkaXYuaW5uZXJIVE1MLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnO2gnKTtcbiAgLy8gICAgICAgZGl2LnJlbW92ZSgpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9KSgpO1xuXG4gIGlmICh0eXBlb2Ygc2hvd05leHRTY3JlZW4gPT09IGBmdW5jdGlvbmApIHtcbiAgICBzaG93TmV4dFNjcmVlbigpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NyZWVuO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzaG93U3RhdHNTY3JlZW4gZnJvbSAnLi9zdGF0c1NjcmVlbic7XG5pbXBvcnQgY2hlY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vY2hlY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgZ2FtZTNMYXlvdXQgPSBgPGRpdiBpZD1cImdhbWUtMy1kaXZcIiBjbGFzcz1cImdhbWUtMyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj5OTjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fbGl2ZXNcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0J3QsNC50LTQuNGC0LUg0YDQuNGB0YPQvdC+0Log0YHRgNC10LTQuCDQuNC30L7QsdGA0LDQttC10L3QuNC5PC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50ICBnYW1lX19jb250ZW50LS10cmlwbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvbiAgZ2FtZV9fb3B0aW9uLS1zZWxlY3RlZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDR4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjMwNFwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+YDtcblxuY29uc3Qgc2hvd0dhbWUzU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBzaG93U2NyZWVuKGdhbWUzTGF5b3V0LCBjaGVja1RvU3RhdHNTY3JlZW4pO1xufTtcblxuY29uc3QgY2hlY2tUb1N0YXRzU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjaGVja1RvR3JlZXRpbmdTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fb3B0aW9uYCk7XG5cbiAgZ2FtZU9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd1N0YXRzU2NyZWVuKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93R2FtZTNTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHNob3dHYW1lM1NjcmVlbiBmcm9tICcuL2dhbWUzU2NyZWVuJztcbmltcG9ydCBjaGVja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9jaGVja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBnYW1lMkxheW91dCA9IGA8ZGl2IGlkPVwiZ2FtZS0yLWRpdlwiIGNsYXNzPVwiZ2FtZS0yIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3M9XCJnYW1lX190aW1lclwiPk5OPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19saXZlc1wiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZW1wdHkuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7Qo9Cz0LDQtNCw0LksINGE0L7RgtC+INC40LvQuCDRgNC40YHRg9C90L7Quj88L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgIGdhbWVfX2NvbnRlbnQtLXdpZGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC83MDV4NDU1XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjcwNVwiIGhlaWdodD1cIjQ1NVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS13aWRlICBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX21hZGUtaW5cIj7QodC00LXQu9Cw0L3QviDQsiA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwiZm9vdGVyX19saW5rXCI+SFRNTCBBY2FkZW15PC9hPiAmY29weTsgMjAxNjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1sYWNhZGVteS9cIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0taW5zXCI+0JjQvdGB0YLQsNCz0YDQsNC8PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5gO1xuXG5cbmNvbnN0IHNob3dHYW1lMlNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihnYW1lMkxheW91dCwgY2hlY2tUb0dhbWUzU2NyZWVuKTtcbn07XG5cbmNvbnN0IGNoZWNrVG9HYW1lM1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY2hlY2tUb0dyZWV0aW5nU2NyZWVuKCk7XG4gIGNvbnN0IGdhbWVBbnN3ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmdhbWVfX2Fuc3dlcmApO1xuXG4gIGdhbWVBbnN3ZXJzLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dHYW1lM1NjcmVlbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0dhbWUyU2NyZWVuO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzaG93R2FtZTJTY3JlZW4gZnJvbSAnLi9nYW1lMlNjcmVlbic7XG5pbXBvcnQgY2hlY2tUb0dyZWV0aW5nU2NyZWVuIGZyb20gJy4vY2hlY2tUb0dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgZ2FtZTFMYXlvdXQgPSBgPGRpdiBpZD1cImdhbWUtMS1kaXZcIiBjbGFzcz1cImdhbWUtMSBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj5OTjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fbGl2ZXNcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19mdWxsLnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgICAgPHAgY2xhc3M9XCJnYW1lX190YXNrXCI+0KPQs9Cw0LTQsNC50YLQtSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/PC9wPlxuICAgICAgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDY4eDQ1OFwiIGFsdD1cIk9wdGlvbiAxXCIgd2lkdGg9XCI0NjhcIiBoZWlnaHQ9XCI0NThcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC80Njh4NDU4XCIgYWx0PVwiT3B0aW9uIDJcIiB3aWR0aD1cIjQ2OFwiIGhlaWdodD1cIjQ1OFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciAgZ2FtZV9fYW5zd2VyLS1waG90b1wiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjJcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMlwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+YDtcblxuXG5jb25zdCBzaG93R2FtZTFTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oZ2FtZTFMYXlvdXQsIGNoZWNrVG9HYW1lMlNjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvR2FtZTJTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNoZWNrVG9HcmVldGluZ1NjcmVlbigpO1xuXG4gIGNvbnN0IGdhbWVPcHRpb25GaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fb3B0aW9uYCk7XG4gIGNvbnN0IGdhbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX2NvbnRlbnRgKTtcblxuICBnYW1lT3B0aW9uRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb3VudCA9IGdhbWVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWRgKS5sZW5ndGg7XG4gICAgICBpZiAoY291bnQgPj0gZ2FtZU9wdGlvbkZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgc2hvd0dhbWUyU2NyZWVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93R2FtZTFTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHNob3dHYW1lMVNjcmVlbiBmcm9tICcuL2dhbWUxU2NyZWVuJztcbmltcG9ydCBjaGVja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9jaGVja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBydWxlc0xheW91dCA9IGA8ZGl2IGlkPVwicnVsZXMtZGl2XCIgY2xhc3M9XCJydWxlcyBjZW50cmFsX19jb250ZW50XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwuc3ZnXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJydWxlc1wiPlxuICAgICAgPGgxIGNsYXNzPVwicnVsZXNfX3RpdGxlXCI+0J/RgNCw0LLQuNC70LA8L2gxPlxuICAgICAgPHAgY2xhc3M9XCJydWxlc19fZGVzY3JpcHRpb25cIj7Qo9Cz0LDQtNCw0LkgMTAg0YDQsNC3INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+IDxpbWdcbiAgICAgICAgc3JjPVwiaW1nL3Bob3RvX2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+INC40LvQuCDRgNC40YHRg9C90L7QuiA8aW1nXG4gICAgICAgIHNyYz1cImltZy9wYWludF9pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGFsdD1cIlwiPi48YnI+XG4gICAgICAgINCk0L7RgtC+0LPRgNCw0YTQuNGP0LzQuCDQuNC70Lgg0YDQuNGB0YPQvdC60LDQvNC4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7QsdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8uPGJyPlxuICAgICAgICDQndCwINC60LDQttC00YPRjiDQv9C+0L/Ri9GC0LrRgyDQvtGC0LLQvtC00LjRgtGB0Y8gMzAg0YHQtdC60YPQvdC0Ljxicj5cbiAgICAgICAg0J7RiNC40LHQuNGC0YzRgdGPINC80L7QttC90L4g0L3QtSDQsdC+0LvQtdC1IDMg0YDQsNC3Ljxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICDQk9C+0YLQvtCy0Ys/XG4gICAgICA8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cInJ1bGVzX19mb3JtXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJ1bGVzX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQmNC80Y9cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJ1bGVzX19idXR0b24gIGNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPkdvITwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX19tYWRlLWluXCI+0KHQtNC10LvQsNC90L4g0LIgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPkhUTUwgQWNhZGVteTwvYT4gJmNvcHk7IDIwMTY8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbGFjYWRlbXkvXCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWluc1wiPtCY0L3RgdGC0LDQs9GA0LDQvDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+YDtcblxuXG5jb25zdCBzaG93UnVsZXNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4ocnVsZXNMYXlvdXQsIGNoZWNrVG9HYW1lMVNjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvR2FtZTFTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNoZWNrVG9HcmVldGluZ1NjcmVlbigpO1xuICBjb25zdCBydWxlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJ1bGVzX19pbnB1dGApO1xuICBjb25zdCBydWxlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ydWxlc19fYnV0dG9uYCk7XG5cbiAgY29uc3QgcnVsZXNJbnB1dElucHV0SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocnVsZXNJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBydWxlc0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoYGRpc2FibGVkYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzQnV0dG9uLnNldEF0dHJpYnV0ZShgZGlzYWJsZWRgLCBgZGlzYWJsZWRgKTtcbiAgICB9XG4gIH07XG5cbiAgcnVsZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHJ1bGVzSW5wdXRJbnB1dEhhbmRsZXIpO1xuICAvLyDQv9C+0YLQvtC8INC90LDQstC10YDQvdC+0LUg0L3QsNC00L4g0LHRg9C00LXRgiDQv9C+0LzQtdC90Y/RgtGMINGB0L7QsdGL0YLQuNC1INC90LAgc3VibWl0XG4gIHJ1bGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dhbWUxU2NyZWVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dSdWxlc1NjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgc2hvd1J1bGVzU2NyZWVuIGZyb20gJy4vcnVsZXNTY3JlZW4nO1xuXG5jb25zdCBncmVldGluZ0xheW91dCA9IGBcbjxkaXYgaWQ9XCJncmVldGluZy1kaXZcIiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWwtLWJsdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2xvZ29cIj48aW1nIHNyYz1cImltZy9sb2dvX2JpZy5wbmdcIiB3aWR0aD1cIjIwMVwiIGhlaWdodD1cIjg5XCIgYWx0PVwiUGl4ZWwgSHVudGVyXCI+PC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiZ3JlZXRpbmdfX2FzdGVyaXNrXCI+KjwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jaGFsbGVuZ2VcIj5cbiAgICAgIDxoMz7Qm9GD0YfRiNC40LUg0YXRg9C00L7QttC90LjQutC4LdGE0L7RgtC+0YDQtdCw0LvQuNGB0YLRiyDQsdGA0L7RgdCw0Y7RgiZuYnNwO9GC0LXQsdC1Jm5ic3A70LLRi9C30L7QsiE8L2gzPlxuICAgICAgPHA+0J/RgNCw0LLQuNC70LAg0LjQs9GA0Ysg0L/RgNC+0YHRgtGLLjxicj5cbiAgICAgICAg0J3Rg9C20L3QviDQvtGC0LvQuNGH0LjRgtGMINGA0LjRgdGD0L3QvtC6Jm5ic3A70L7RgiDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQuCDRgdC00LXQu9Cw0YLRjCDQstGL0LHQvtGALjxicj5cbiAgICAgICAg0JfQsNC00LDRh9CwINC60LDQttC10YLRgdGPINGC0YDQuNCy0LjQsNC70YzQvdC+0LksINC90L4g0L3QtSDQtNGD0LzQsNC5LCDRh9GC0L4g0LLRgdC1INGC0LDQuiDQv9GA0L7RgdGC0L4uPGJyPlxuICAgICAgICDQpNC+0YLQvtGA0LXQsNC70LjQt9C8INC+0LHQvNCw0L3Rh9C40LIg0Lgg0LrQvtCy0LDRgNC10L0uPGJyPlxuICAgICAgICDQn9C+0LzQvdC4LCDQs9C70LDQstC90L7QtSDigJQg0YHQvNC+0YLRgNC10YLRjCDQvtGH0LXQvdGMINCy0L3QuNC80LDRgtC10LvRjNC90L4uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fY29udGludWVcIj48c3Bhbj48aW1nIHNyYz1cImltZy9hcnJvd19yaWdodC5zdmdcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBhbHQ9XCJOZXh0XCI+PC9zcGFuPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuPC9kaXY+XG5gO1xuXG5jb25zdCBzaG93R3JlZXRpbmdTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oZ3JlZXRpbmdMYXlvdXQsIGNoZWNrVG9SdWxlc1NjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvUnVsZXNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdyZWV0aW5nQ29udGludWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JlZXRpbmdfX2NvbnRpbnVlYCk7XG4gIGdyZWV0aW5nQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93UnVsZXNTY3JlZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0dyZWV0aW5nU2NyZWVuO1xuIiwiaW1wb3J0IHNob3dHcmVldGluZ1NjcmVlbiBmcm9tICcuL2dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgY2hlY2tUb0dyZWV0aW5nU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJhY2tgKTtcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dHcmVldGluZ1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja1RvR3JlZXRpbmdTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHN0YXRzTGF5b3V0ID0gYDxkaXYgaWQ9XCJzdGF0cy1kaXZcIiBjbGFzcz1cInN0YXRzIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGgxPtCf0L7QsdC10LTQsCE8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzEwMDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjkwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINGB0LrQvtGA0L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MSZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tYWxpdmVcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCo0YLRgNCw0YQg0LfQsCDQvNC10LTQu9C40YLQtdC70YzQvdC+0YHRgtGMOjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPi0xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPjk1MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4yLjwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj5mYWlsPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjMuPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7MTAwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+OTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWFsaXZlXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+MTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj45NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuICA8L2Rpdj5gO1xuXG5jb25zdCBzaG93U3RhdHNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oc3RhdHNMYXlvdXQsIGNoZWNrVG9HcmVldGluZ1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U3RhdHNTY3JlZW47XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O0FBRW5ELE1BQU0sVUFBVSxHQUFHLFVBQVUsTUFBTSxFQUFFLGNBQWMsRUFBRTtFQUNuRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0VBQzlELFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztFQUNwQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0VBYTVCLElBQUksT0FBTyxjQUFjLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUN4QyxjQUFjLEVBQUUsQ0FBQztHQUNsQjtDQUNGLENBQUMsQUFFRixBQUEwQjs7QUNyQjFCLE1BQU0sV0FBVyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcURiLENBQUMsQ0FBQzs7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QUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0VBRTdELE1BQU0sc0JBQXNCLEdBQUcsWUFBWTtJQUN6QyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMvQixXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN6QyxNQUFNO01BQ0wsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNsRDtHQUNGLENBQUM7O0VBRUYsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzs7RUFFN0QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7Q0FDeEQsQ0FBQyxBQUVGLEFBQStCOztBQzdEL0IsTUFBTSxjQUFjLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQnhCLENBQUMsQ0FBQzs7QUFFRixNQUFNLGtCQUFrQixHQUFHLFlBQVk7RUFDckMsVUFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0NBQ2hELENBQUM7O0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxZQUFZO0VBQ3JDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztFQUN2RSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0NBQzdELENBQUMsQUFFRixBQUFrQzs7QUN0Q2xDLE1BQU0scUJBQXFCLEdBQUcsWUFBWTtFQUN4QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUNoRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0NBQ3ZELENBQUMsQUFFRixBQUFxQzs7QUNKckMsTUFBTSxXQUFXLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF1SGIsQ0FBQyxDQUFDOztBQUVWLE1BQU0sZUFBZSxHQUFHLFlBQVk7RUFDbEMsVUFBVSxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0NBQ2hELENBQUMsQUFFRixBQUErQiw7Oyw7OyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
