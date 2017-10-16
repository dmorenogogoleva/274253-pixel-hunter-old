import createElement from './createElement';
import showScreen from './showScreen';
import statsLayoutDom from './statsScreen';
import headerLayout from './headerLayout';
import {statsLayout, initialStatsState} from './statsLayout';
import footerLayout from './footerLayout';
import backToGreetingScreen from './backToGreetingScreen';
import {findRandomRangeNum} from './randomQuestion';
import testImages from './testImages';

const paintingsArr = testImages[0];
const photosArr = testImages[1];
const photoFirst = photosArr[findRandomRangeNum(0, photosArr.length)];
const photoSecond = photosArr[findRandomRangeNum(0, photosArr.length)];
const painting = paintingsArr[findRandomRangeNum(0, paintingsArr.length)];
const imagesArr = [photoFirst, photoSecond, painting];

const compareElement = () => {
  return Math.random() - 0.5;
};

const newImagesArr = imagesArr.slice().sort(compareElement);

const pickPaintingFromImagesLayout = `
${headerLayout}
<div id="game-3-div" class="game-3 central__content">
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img class="game__image" src="${newImagesArr[0]}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img class="game__image" src="${newImagesArr[1]}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img class="game__image" src="${newImagesArr[2]}" alt="Option 1" width="304" height="455">
        </div>
      </form>
${statsLayout(initialStatsState)}
    </div>
  </div>
  ${footerLayout}`;


const gameAnswerState = {
  'id': 1,
  'answer': ``,
  'rapid': ``,
  'slow': ``
};

const pickPaintingFromImagesLayoutDom = createElement(pickPaintingFromImagesLayout);
const showStatsScreen = () => showScreen(statsLayoutDom);

const gameOptions = pickPaintingFromImagesLayoutDom.querySelectorAll(`.game__option`);

gameOptions.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    const userAnswer = btn.querySelector(`.game__image`).src;
    const trueAnswer = imagesArr[2];
    gameAnswerState.answer = userAnswer === trueAnswer;
    // showStatsScreen();
  });
});


backToGreetingScreen(pickPaintingFromImagesLayoutDom);

export default pickPaintingFromImagesLayoutDom;
