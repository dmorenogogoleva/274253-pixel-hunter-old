const LEFT_ARR_KEYCODE = 37;
const RIGHT_ARR_KEYCODE = 39;

const central = document.querySelector(`.central`);
const templates = [`#main`, `#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
const innersTemplates = [`#main`, `#greeting-div`, `#rules-div`, `#game-1-div`, `#game-2-div`, `#game-3-div`, `#stats-div`];

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

const showNextElement = function (arr, innersArr, num) {
  if (num >= 7) {
    return;
  }

  const newScreen = document.querySelector(`${arr[num]}`).content.cloneNode(true);
  document.querySelector(`${innersArr[num - 1]}`).remove();
  central.appendChild(newScreen);
};

const showPreviousElement = function (arr, innersArr, num) {
  if (num <= 0) {
    return;
  }

  const newScreen = document.querySelector(`${arr[num]}`).content.cloneNode(true);
  document.querySelector(`${innersArr[num + 1]}`).remove();
  central.appendChild(newScreen);
};


let i = 0;

const documentClickHandler = function (evt) {
  if (isAltAndRightArrKeyCode(evt)) {
    i++;
    showNextElement(templates, innersTemplates, i);
  } else if (isAltAndLefrArrKeyCode(evt)) {
    i--;
    showPreviousElement(templates, innersTemplates, i);
  }
  return i;
};

document.addEventListener(`keydown`, documentClickHandler);

