const central = document.querySelector(`.central`);

const showScreen = function (layout, cb) {
  const currentDiv = central.querySelector(`.central__content`);
  currentDiv.remove();
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = layout;
  central.appendChild(newDiv);

  // const deleteEmptyDivs = (function () {
  //   const divs = document.querySelectorAll(`div`);

  //   divs.forEach(function (div) {
  //     if (div.innerHTML.length === 0) {
  //       console.log(';h');
  //       div.remove();
  //     }
  //   });
  // })();


  if (typeof cb === `function`) {
    cb();
  }
};

export default showScreen;
