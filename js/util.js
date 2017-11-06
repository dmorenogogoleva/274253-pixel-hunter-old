export const createElement = function (layout) {
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  return newDiv;
};

const central = document.querySelector(`.central`);

export const showScreen = function (domElement) {
  central.innerHTML = ``;
  central.appendChild(domElement);
};
