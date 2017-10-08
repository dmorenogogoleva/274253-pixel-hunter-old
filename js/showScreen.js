const central = document.querySelector(`.central`);

const showScreen = function (domElement) {
  central.innerHTML = ``;

  central.appendChild(domElement);
};

export default showScreen;
