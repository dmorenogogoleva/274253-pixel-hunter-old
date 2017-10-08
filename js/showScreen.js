import createElement from './createElement';

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen) {
  central.innerHTML = ``;

  createElement(central, layout);

  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
};

export default showScreen;
