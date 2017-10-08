import footerLayout from './footerLayout';

const central = document.querySelector(`.central`);

const showScreen = function (layout, showNextScreen, headerLayout) {
  const currentFooter = central.querySelector(`.footer`);
  const currentHeader = central.querySelector(`.header`);

  central.innerHTML = ``;

  if (currentFooter !== null) {
    currentFooter.remove();
  }

  if (currentHeader !== null) {
    currentHeader.remove();
  }

  if (headerLayout !== undefined) {
    const newDiv = document.createElement(`div`);
    newDiv.innerHTML = `${headerLayout}${layout}${footerLayout}`;
    central.appendChild(newDiv);
  } else {
    const newDiv = document.createElement(`div`);
    newDiv.innerHTML = `${layout}${footerLayout}`;
    central.appendChild(newDiv);
  }

  if (typeof showNextScreen === `function`) {
    showNextScreen();
  }
};

export default showScreen;
