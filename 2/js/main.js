const ALT_KEYCODE = 18;
const LEFT_ARR_KEYCODE = 37;
const RIGHT_ARR_KEYCODE = 39;

const isAltPressed = function (evt) {
  let check = false;
  if (evt.keyCode === ALT_KEYCODE) {
    check = true;
  }
  return check;
};

const isRightArrPressed = function (evt) {
  let check = false;
  if (evt.keyCode === RIGHT_ARR_KEYCODE) {
    check = true;
  }
  return check;
};


const isAltAndRightArrKeycode = function (evt) {
  let check = false;

  if (evt.keyCode === RIGHT_ARR_KEYCODE) {
    check = true;
    return evt.keyCode;
  }

  if (isAltPressed(evt) && check) {
    console.log(`gocha`);
  }
};

const isAltAndLeftArrKeycode = function (evt) {
  return evt.keyCode === ALT_KEYCODE && LEFT_ARR_KEYCODE;
};

const central = document.querySelector(`.central`);
const main = document.querySelector(`#main`);
const greeting = document.querySelector(`#greeting`);
const rules = document.querySelector(`#rules`);
const game1 = document.querySelector(`#game-1`);
const game2 = document.querySelector(`#game-2`);
const game3 = document.querySelector(`#game-3`);
const stats = document.querySelector(`#stats`);

const templates = [main, greeting, rules, game1, game2, game3, stats];


const showArrElement = function (arr, num) {

  const newScreen = arr[num].content.cloneNode(true);
  central.removeChild(arr[num - 1]);
  central.appendChild(newScreen);

  return newScreen;
};


let i = 0;

const documentClickHandler = function (evt) {
  if (isAltAndRightArrKeycode(evt)) {
    i++;
    showArrElement(templates, i);
  }
  return i;
};

document.addEventListener(`keydown`, documentClickHandler);

