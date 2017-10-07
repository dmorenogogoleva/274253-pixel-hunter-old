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

export default showScreen;
