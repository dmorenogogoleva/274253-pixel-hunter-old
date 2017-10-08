import showGreetingScreen from './greetingScreen';

const central = document.querySelector(`.central`);

const introScreen = `<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>`;

window.onload = function () {
  const div = document.createElement(`div`);
  div.innerHTML = introScreen;
  central.appendChild(div);
  const asterisk = central.querySelector(`.intro__asterisk`);

  asterisk.addEventListener(`click`, showGreetingScreen);
};
