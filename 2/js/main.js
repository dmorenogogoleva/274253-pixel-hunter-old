const central = document.querySelector(`.central`);
const templates = [`#main`, `#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
const innersTemplates = [`#main`, `#greeting-div`, `#rules-div`, `#game-1-div`, `#game-2-div`, `#game-3-div`, `#stats-div`];

const LEFT_ARR_KEYCODE = 37;
const RIGHT_ARR_KEYCODE = 39;
const FIRST_SCREEN_ELEMENT = templates[0];
const NUMBER_OF_SCREEN_ELEMENTS = templates.length - 1;

window.onload = function () {

  const newScreen = document.querySelector(`${FIRST_SCREEN_ELEMENT}`).content.cloneNode(true);
  central.appendChild(newScreen);
};

const isAltAndRightArrKeyCode = function (evt) {
  if (evt.altKey) {
    if (evt.keyCode === RIGHT_ARR_KEYCODE) {
      return evt.keyCode;
    }
  }
  return false;
};

const isAltAndLefrArrKeyCode = function (evt) {
  if (evt.altKey) {
    if (evt.keyCode === LEFT_ARR_KEYCODE) {
      return evt.keyCode;
    }
  }
  return false;
};

const showElement = function (arr, innersArr, num) {

  const currentTemplate = central.querySelector(`.central__content`);
  const newScreen = document.querySelector(arr[num]).content.cloneNode(true);
  currentTemplate.remove();
  central.appendChild(newScreen);
};

let i = 0;

const documentClickHandler = function (evt) {
  if (isAltAndRightArrKeyCode(evt)) {
    if (i >= NUMBER_OF_SCREEN_ELEMENTS) {
      return;
    }
    i++;
    showElement(templates, innersTemplates, i);
  } else if (isAltAndLefrArrKeyCode(evt)) {
    if (i <= 0) {
      return;
    }
    i--;
    showElement(templates, innersTemplates, i);
  }
};

document.addEventListener(`keydown`, documentClickHandler);
