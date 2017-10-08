import createElement from './createElement';
import showScreen from './showScreen';
import greetingLayoutDom from './greetingScreen';

const introScreen = `<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>`;

const introLayoutDom = createElement(introScreen);
const showGreetingScreen = () => showScreen(greetingLayoutDom);

window.onload = function () {
  showScreen(introLayoutDom);
};

const asterisk = introLayoutDom.querySelector(`.intro__asterisk`);
asterisk.addEventListener(`click`, showGreetingScreen);
