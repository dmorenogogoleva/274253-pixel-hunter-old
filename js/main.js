import showScreen from './showScreen';
import greetingLayout from './greetingLayout';
import rulesLayout from './rulesLayout';
import game1Layout from './game1Layout';
import game2Layout from './game2Layout';
import game3Layout from './game3Layout';
import statsLayout from './statsLayout';

const central = document.querySelector(`.central`);

const introScreen = `<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
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

window.onload = function () {
  const div = document.createElement(`div`);
  div.innerHTML = introScreen;
  central.appendChild(div);
  const asterisk = central.querySelector(`.intro__asterisk`);

  asterisk.addEventListener(`click`, showGreetingScreen);
};

const showGreetingScreen = function () {
  showScreen(greetingLayout, checkToRulesScreen);
};

const checkToRulesScreen = function () {
  const greetingContinue = document.querySelector(`.greeting__continue`);
  greetingContinue.addEventListener(`click`, showRulesScreen);
  return greetingContinue;
};

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

const showGame1Screen = function () {
  showScreen(game1Layout, checkToGame2Screen);
};

const checkToGame2Screen = function () {
  checkToGreetingScreen();
  const gameOptionFields = document.querySelectorAll(`.game__option`);
  const haveFieldCheckedButton = (field) => field.querySelector(`input[type=radio]:checked`) ? true : false;

  let check;
  // не работает
  gameOptionFields.forEach(function (element) {
    check = 0;
    element.addEventListener(`click`, function () {
      if (haveFieldCheckedButton(element)) {
        check += 1;
      }
      if (check >= gameOptionFields.length) {
        showGame2Screen();
      }
    });
  });
};

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

const showStatsScreen = function () {
  showScreen(statsLayout, checkToStatsScreen);
};

const checkToGreetingScreen = function () {
  const btnBack = document.querySelector(`.back`);

  btnBack.addEventListener(`click`, showGreetingScreen);
};
