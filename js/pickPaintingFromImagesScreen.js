import testImages from './testImages';
import createElement from './createElement';
import showRandomGameScreen from './showRandomGameScreen';
import {findRandomRangeNum} from './randomQuestion';
import backToGreetingScreen from './backToGreetingScreen';
import headerLayout from './headerLayout';
import {statsLayout, initialStatsState} from './statsLayout';
import footerLayout from './footerLayout';
import changeGameStats from './changeGameStats';
import {gameAnswers, gameAnswerState} from './gameAnswers';


const paintingsArr = testImages[0];
const photosArr = testImages[1];
const photoFirst = photosArr[findRandomRangeNum(0, photosArr.length - 1)];
const photoSecond = photosArr[findRandomRangeNum(0, photosArr.length - 1)];
const painting = paintingsArr[findRandomRangeNum(0, paintingsArr.length - 1)];
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

const pickPaintingFromImagesLayoutDom = createElement(pickPaintingFromImagesLayout);


const gameOptions = pickPaintingFromImagesLayoutDom.querySelectorAll(`.game__option`);

gameOptions.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    showRandomGameScreen();
    const userAnswer = btn.querySelector(`.game__image`).src;
    const trueAnswer = imagesArr[2];
    gameAnswerState.answer = userAnswer === trueAnswer;
    gameAnswerState.id += 1;
    changeGameStats(gameAnswerState, initialStatsState);
    gameAnswers.push(gameAnswerState);
  });
});


backToGreetingScreen(pickPaintingFromImagesLayoutDom);

export default pickPaintingFromImagesLayoutDom;
