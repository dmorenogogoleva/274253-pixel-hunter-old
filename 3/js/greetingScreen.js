var greetingScreen = (function () {
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

return showGreetingScreen;

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdTY3JlZW4uanMiLCJzb3VyY2VzIjpbImpzL3Nob3dTY3JlZW4uanMiLCJqcy9jaGVja1RvR3JlZXRpbmdTY3JlZW4uanMiLCJqcy9zdGF0c1NjcmVlbi5qcyIsImpzL2dhbWUzU2NyZWVuLmpzIiwianMvZ2FtZTJTY3JlZW4uanMiLCJqcy9nYW1lMVNjcmVlbi5qcyIsImpzL3J1bGVzU2NyZWVuLmpzIiwianMvZ3JlZXRpbmdTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2VudHJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZW50cmFsYCk7XG5cbmNvbnN0IHNob3dTY3JlZW4gPSBmdW5jdGlvbiAobGF5b3V0LCBzaG93TmV4dFNjcmVlbikge1xuICBjb25zdCBjdXJyZW50RGl2ID0gY2VudHJhbC5xdWVyeVNlbGVjdG9yKGAuY2VudHJhbF9fY29udGVudGApO1xuICBjdXJyZW50RGl2LnJlbW92ZSgpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgbmV3RGl2LmlubmVySFRNTCA9IGxheW91dDtcbiAgY2VudHJhbC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIGNvbnN0IGRlbGV0ZUVtcHR5RGl2cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkaXZzID0gY2VudHJhbC5xdWVyeVNlbGVjdG9yQWxsKGBkaXZgKTtcblxuICAgIGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XG4gICAgICBpZiAoZGl2LmlubmVySFRNTC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBkZWxldGVFbXB0eURpdnMoKTtcblxuXG4gIGlmICh0eXBlb2Ygc2hvd05leHRTY3JlZW4gPT09IGBmdW5jdGlvbmApIHtcbiAgICBzaG93TmV4dFNjcmVlbigpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NyZWVuO1xuIiwiaW1wb3J0IHNob3dHcmVldGluZ1NjcmVlbiBmcm9tICcuL2dyZWV0aW5nU2NyZWVuJztcblxuY29uc3QgY2hlY2tUb0dyZWV0aW5nU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJhY2tgKTtcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dHcmVldGluZ1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja1RvR3JlZXRpbmdTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHN0YXRzTGF5b3V0ID0gYDxkaXYgaWQ9XCJzdGF0cy1kaXZcIiBjbGFzcz1cInN0YXRzIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGgxPtCf0L7QsdC10LTQsCE8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzEwMDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjkwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINGB0LrQvtGA0L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+MSZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tYWxpdmVcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7NTA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCo0YLRgNCw0YQg0LfQsCDQvNC10LTQu9C40YLQtdC70YzQvdC+0YHRgtGMOjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPjImbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDs1MDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPi0xMDA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPjk1MDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4yLjwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj5mYWlsPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX251bWJlclwiPjMuPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7MTAwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+OTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4yJm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWFsaXZlXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOzUwPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+MTAwPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj45NTA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuICA8L2Rpdj5gO1xuXG5jb25zdCBzaG93U3RhdHNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oc3RhdHNMYXlvdXQsIGNoZWNrVG9HcmVldGluZ1NjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93U3RhdHNTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHNob3dTdGF0c1NjcmVlbiBmcm9tICcuL3N0YXRzU2NyZWVuJztcbmltcG9ydCBjaGVja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9jaGVja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBnYW1lM0xheW91dCA9IGA8ZGl2IGlkPVwiZ2FtZS0zLWRpdlwiIGNsYXNzPVwiZ2FtZS0zIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3M9XCJnYW1lX190aW1lclwiPk5OPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19saXZlc1wiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZW1wdHkuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7QndCw0LnQtNC40YLQtSDRgNC40YHRg9C90L7QuiDRgdGA0LXQtNC4INC40LfQvtCx0YDQsNC20LXQvdC40Lk8L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgIGdhbWVfX2NvbnRlbnQtLXRyaXBsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uICBnYW1lX19vcHRpb24tLXNlbGVjdGVkXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzMwNHg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiMzA0XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1zbG93XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tY29ycmVjdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS13cm9uZ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX21hZGUtaW5cIj7QodC00LXQu9Cw0L3QviDQsiA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwiZm9vdGVyX19saW5rXCI+SFRNTCBBY2FkZW15PC9hPiAmY29weTsgMjAxNjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1sYWNhZGVteS9cIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0taW5zXCI+0JjQvdGB0YLQsNCz0YDQsNC8PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5gO1xuXG5jb25zdCBzaG93R2FtZTNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oZ2FtZTNMYXlvdXQsIGNoZWNrVG9TdGF0c1NjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvU3RhdHNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNoZWNrVG9HcmVldGluZ1NjcmVlbigpO1xuICBjb25zdCBnYW1lT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5nYW1lX19vcHRpb25gKTtcblxuICBnYW1lT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93U3RhdHNTY3JlZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dHYW1lM1NjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgc2hvd0dhbWUzU2NyZWVuIGZyb20gJy4vZ2FtZTNTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IGdhbWUyTGF5b3V0ID0gYDxkaXYgaWQ9XCJnYW1lLTItZGl2XCIgY2xhc3M9XCJnYW1lLTIgY2VudHJhbF9fY29udGVudFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnN2Z1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzcz1cImdhbWVfX3RpbWVyXCI+Tk48L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2hlYXJ0X19lbXB0eS5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2FtZV9fdGFza1wiPtCj0LPQsNC00LDQuSwg0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PzwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZ2FtZV9fY29udGVudCAgZ2FtZV9fY29udGVudC0td2lkZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzcwNXg0NTVcIiBhbHQ9XCJPcHRpb24gMVwiIHdpZHRoPVwiNzA1XCIgaGVpZ2h0PVwiNDU1XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGhvdG9cIj5cbiAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXdpZGUgIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24xXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tZmFzdFwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1jb3JyZWN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXdyb25nXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgc29jaWFsLWxpbmstLWFjYWRlbXlcIj5IVE1MIEFjYWRlbXk8L2E+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2h0bWxhY2FkZW15X3J1XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXR3XCI+0KLQstC40YLRgtC10YA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmsuY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLXZrXCI+0JLQutC+0L3RgtCw0LrRgtC1PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PmA7XG5cblxuY29uc3Qgc2hvd0dhbWUyU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBzaG93U2NyZWVuKGdhbWUyTGF5b3V0LCBjaGVja1RvR2FtZTNTY3JlZW4pO1xufTtcblxuY29uc3QgY2hlY2tUb0dhbWUzU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICBjaGVja1RvR3JlZXRpbmdTY3JlZW4oKTtcbiAgY29uc3QgZ2FtZUFuc3dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZ2FtZV9fYW5zd2VyYCk7XG5cbiAgZ2FtZUFuc3dlcnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2hvd0dhbWUzU2NyZWVuKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93R2FtZTJTY3JlZW47XG4iLCJpbXBvcnQgc2hvd1NjcmVlbiBmcm9tICcuL3Nob3dTY3JlZW4nO1xuaW1wb3J0IHNob3dHYW1lMlNjcmVlbiBmcm9tICcuL2dhbWUyU2NyZWVuJztcbmltcG9ydCBjaGVja1RvR3JlZXRpbmdTY3JlZW4gZnJvbSAnLi9jaGVja1RvR3JlZXRpbmdTY3JlZW4nO1xuXG5jb25zdCBnYW1lMUxheW91dCA9IGA8ZGl2IGlkPVwiZ2FtZS0xLWRpdlwiIGNsYXNzPVwiZ2FtZS0xIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3M9XCJnYW1lX190aW1lclwiPk5OPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lX19saXZlc1wiPlxuICAgICAgICA8aW1nIHNyYz1cImltZy9oZWFydF9fZW1wdHkuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj7Qo9Cz0LDQtNCw0LnRgtC1INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+INC40LvQuCDRgNC40YHRg9C90L7Quj88L3A+XG4gICAgICA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX29wdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC80Njh4NDU4XCIgYWx0PVwiT3B0aW9uIDFcIiB3aWR0aD1cIjQ2OFwiIGhlaWdodD1cIjQ1OFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMVwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJxdWVzdGlvbjFcIiBjbGFzcz1cImdhbWVfX2J1dHRvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgIDxzcGFuPtCg0LjRgdGD0L3QvtC6PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9fb3B0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ2OHg0NThcIiBhbHQ9XCJPcHRpb24gMlwiIHdpZHRoPVwiNDY4XCIgaGVpZ2h0PVwiNDU4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyICBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uMlwiIGNsYXNzPVwiZ2FtZV9fYnV0dG9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgPHNwYW4+0KTQvtGC0L48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgIGdhbWVfX2Fuc3dlci0tcGFpbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb24yXCIgY2xhc3M9XCJnYW1lX19idXR0b25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBhaW50XCI+XG4gICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0td3JvbmdcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tc2xvd1wiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWNvcnJlY3RcIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tdW5rbm93blwiPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS11bmtub3duXCI+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXVua25vd25cIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX21hZGUtaW5cIj7QodC00LXQu9Cw0L3QviDQsiA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwiZm9vdGVyX19saW5rXCI+SFRNTCBBY2FkZW15PC9hPiAmY29weTsgMjAxNjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1sYWNhZGVteS9cIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0taW5zXCI+0JjQvdGB0YLQsNCz0YDQsNC8PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5gO1xuXG5cbmNvbnN0IHNob3dHYW1lMVNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihnYW1lMUxheW91dCwgY2hlY2tUb0dhbWUyU2NyZWVuKTtcbn07XG5cbmNvbnN0IGNoZWNrVG9HYW1lMlNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY2hlY2tUb0dyZWV0aW5nU2NyZWVuKCk7XG5cbiAgY29uc3QgZ2FtZU9wdGlvbkZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5nYW1lX19vcHRpb25gKTtcbiAgY29uc3QgZ2FtZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZV9fY29udGVudGApO1xuXG4gIGdhbWVPcHRpb25GaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ID0gZ2FtZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZGApLmxlbmd0aDtcbiAgICAgIGlmIChjb3VudCA+PSBnYW1lT3B0aW9uRmllbGRzLmxlbmd0aCkge1xuICAgICAgICBzaG93R2FtZTJTY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dHYW1lMVNjcmVlbjtcbiIsImltcG9ydCBzaG93U2NyZWVuIGZyb20gJy4vc2hvd1NjcmVlbic7XG5pbXBvcnQgc2hvd0dhbWUxU2NyZWVuIGZyb20gJy4vZ2FtZTFTY3JlZW4nO1xuaW1wb3J0IGNoZWNrVG9HcmVldGluZ1NjcmVlbiBmcm9tICcuL2NoZWNrVG9HcmVldGluZ1NjcmVlbic7XG5cbmNvbnN0IHJ1bGVzTGF5b3V0ID0gYDxkaXYgaWQ9XCJydWxlcy1kaXZcIiBjbGFzcz1cInJ1bGVzIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5zdmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJ1bGVzXCI+XG4gICAgICA8aDEgY2xhc3M9XCJydWxlc19fdGl0bGVcIj7Qn9GA0LDQstC40LvQsDwvaDE+XG4gICAgICA8cCBjbGFzcz1cInJ1bGVzX19kZXNjcmlwdGlvblwiPtCj0LPQsNC00LDQuSAxMCDRgNCw0Lcg0LTQu9GPINC60LDQttC00L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YTQvtGC0L4gPGltZ1xuICAgICAgICBzcmM9XCJpbWcvcGhvdG9faWNvbi5wbmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj4g0LjQu9C4INGA0LjRgdGD0L3QvtC6IDxpbWdcbiAgICAgICAgc3JjPVwiaW1nL3BhaW50X2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgYWx0PVwiXCI+Ljxicj5cbiAgICAgICAg0KTQvtGC0L7Qs9GA0LDRhNC40Y/QvNC4INC40LvQuCDRgNC40YHRg9C90LrQsNC80Lgg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtCx0LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRjy48YnI+XG4gICAgICAgINCd0LAg0LrQsNC20LTRg9GOINC/0L7Qv9GL0YLQutGDINC+0YLQstC+0LTQuNGC0YHRjyAzMCDRgdC10LrRg9C90LQuPGJyPlxuICAgICAgICDQntGI0LjQsdC40YLRjNGB0Y8g0LzQvtC20L3QviDQvdC1INCx0L7Qu9C10LUgMyDRgNCw0LcuPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgINCT0L7RgtC+0LLRiz9cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtIGNsYXNzPVwicnVsZXNfX2Zvcm1cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwicnVsZXNfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INCY0LzRj1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicnVsZXNfX2J1dHRvbiAgY29udGludWVcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ+R28hPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX21hZGUtaW5cIj7QodC00LXQu9Cw0L3QviDQsiA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwiZm9vdGVyX19saW5rXCI+SFRNTCBBY2FkZW15PC9hPiAmY29weTsgMjAxNjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1sYWNhZGVteS9cIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0taW5zXCI+0JjQvdGB0YLQsNCz0YDQsNC8PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5gO1xuXG5cbmNvbnN0IHNob3dSdWxlc1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NjcmVlbihydWxlc0xheW91dCwgY2hlY2tUb0dhbWUxU2NyZWVuKTtcbn07XG5cbmNvbnN0IGNoZWNrVG9HYW1lMVNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY2hlY2tUb0dyZWV0aW5nU2NyZWVuKCk7XG4gIGNvbnN0IHJ1bGVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucnVsZXNfX2lucHV0YCk7XG4gIGNvbnN0IHJ1bGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJ1bGVzX19idXR0b25gKTtcblxuICBjb25zdCBydWxlc0lucHV0SW5wdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChydWxlc0lucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJ1bGVzQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShgZGlzYWJsZWRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnVsZXNCdXR0b24uc2V0QXR0cmlidXRlKGBkaXNhYmxlZGAsIGBkaXNhYmxlZGApO1xuICAgIH1cbiAgfTtcblxuICBydWxlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgcnVsZXNJbnB1dElucHV0SGFuZGxlcik7XG4gIC8vINC/0L7RgtC+0Lwg0L3QsNCy0LXRgNC90L7QtSDQvdCw0LTQviDQsdGD0LTQtdGCINC/0L7QvNC10L3Rj9GC0Ywg0YHQvtCx0YvRgtC40LUg0L3QsCBzdWJtaXRcbiAgcnVsZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93R2FtZTFTY3JlZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1J1bGVzU2NyZWVuO1xuIiwiaW1wb3J0IHNob3dTY3JlZW4gZnJvbSAnLi9zaG93U2NyZWVuJztcbmltcG9ydCBzaG93UnVsZXNTY3JlZW4gZnJvbSAnLi9ydWxlc1NjcmVlbic7XG5cbmNvbnN0IGdyZWV0aW5nTGF5b3V0ID0gYDxkaXYgaWQ9XCJncmVldGluZy1kaXZcIiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWxfX2NvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cImdyZWV0aW5nIGNlbnRyYWwtLWJsdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2xvZ29cIj48aW1nIHNyYz1cImltZy9sb2dvX2JpZy5wbmdcIiB3aWR0aD1cIjIwMVwiIGhlaWdodD1cIjg5XCIgYWx0PVwiUGl4ZWwgSHVudGVyXCI+PC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiZ3JlZXRpbmdfX2FzdGVyaXNrXCI+KjwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jaGFsbGVuZ2VcIj5cbiAgICAgIDxoMz7Qm9GD0YfRiNC40LUg0YXRg9C00L7QttC90LjQutC4LdGE0L7RgtC+0YDQtdCw0LvQuNGB0YLRiyDQsdGA0L7RgdCw0Y7RgiZuYnNwO9GC0LXQsdC1Jm5ic3A70LLRi9C30L7QsiE8L2gzPlxuICAgICAgPHA+0J/RgNCw0LLQuNC70LAg0LjQs9GA0Ysg0L/RgNC+0YHRgtGLLjxicj5cbiAgICAgICAg0J3Rg9C20L3QviDQvtGC0LvQuNGH0LjRgtGMINGA0LjRgdGD0L3QvtC6Jm5ic3A70L7RgiDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQuCDRgdC00LXQu9Cw0YLRjCDQstGL0LHQvtGALjxicj5cbiAgICAgICAg0JfQsNC00LDRh9CwINC60LDQttC10YLRgdGPINGC0YDQuNCy0LjQsNC70YzQvdC+0LksINC90L4g0L3QtSDQtNGD0LzQsNC5LCDRh9GC0L4g0LLRgdC1INGC0LDQuiDQv9GA0L7RgdGC0L4uPGJyPlxuICAgICAgICDQpNC+0YLQvtGA0LXQsNC70LjQt9C8INC+0LHQvNCw0L3Rh9C40LIg0Lgg0LrQvtCy0LDRgNC10L0uPGJyPlxuICAgICAgICDQn9C+0LzQvdC4LCDQs9C70LDQstC90L7QtSDigJQg0YHQvNC+0YLRgNC10YLRjCDQvtGH0LXQvdGMINCy0L3QuNC80LDRgtC10LvRjNC90L4uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ19fY29udGludWVcIj48c3Bhbj48aW1nIHNyYz1cImltZy9hcnJvd19yaWdodC5zdmdcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBhbHQ9XCJOZXh0XCI+PC9zcGFuPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NvY2lhbC1saW5rc1wiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2h0bWxhY2FkZW15XCIgY2xhc3M9XCJzb2NpYWwtbGluayAgc29jaWFsLWxpbmstLWZiXCI+0KTRjdC50YHQsdGD0Lo8L2E+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuPC9kaXY+XG5gO1xuXG5jb25zdCBzaG93R3JlZXRpbmdTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHNob3dTY3JlZW4oZ3JlZXRpbmdMYXlvdXQsIGNoZWNrVG9SdWxlc1NjcmVlbik7XG59O1xuXG5jb25zdCBjaGVja1RvUnVsZXNTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdyZWV0aW5nQ29udGludWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JlZXRpbmdfX2NvbnRpbnVlYCk7XG4gIGdyZWV0aW5nQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBzaG93UnVsZXNTY3JlZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0dyZWV0aW5nU2NyZWVuO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztBQUVuRCxNQUFNLFVBQVUsR0FBRyxVQUFVLE1BQU0sRUFBRSxjQUFjLEVBQUU7RUFDbkQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztFQUM5RCxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7RUFDcEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7RUFDMUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7RUFFNUIsTUFBTSxlQUFlLEdBQUcsWUFBWTtJQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO01BQzFCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztPQUNkO0tBQ0YsQ0FBQyxDQUFD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
