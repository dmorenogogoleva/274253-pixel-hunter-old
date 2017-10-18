import testImages from './testImages';
import createElement from './createElement';
import showRandomGameScreen from './showRandomGameScreen';
import {findRandomRangeNum, questions, randomArrayElement} from './randomQuestion';
import isItPaintOrPhoto from './isItPaintOrPhoto';
import changeGameStats from './changeGameStats';
import backToGreetingScreen from './backToGreetingScreen';
import headerLayout from './headerLayout';
import {statsLayout, initialStatsState} from './statsLayout';
import footerLayout from './footerLayout';
import {gameAnswers, gameAnswerState} from './gameAnswers';

const firstRandomArr = randomArrayElement(testImages);
const secondRandomArr = randomArrayElement(testImages);
const firstRandomImage = firstRandomArr[findRandomRangeNum(0, testImages.length)];
const secondRandomImage = secondRandomArr[findRandomRangeNum(0, testImages.length)];


const pickPhotoOrPaintingFromTwoLayout = `
${headerLayout}
<div id="game-1-div" class="game-1 central__content">
    <div class="game">
      <p class="game__task">${randomArrayElement(questions)}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${firstRandomImage}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" class="game__button" type="radio" value="photo">
            <span class="game__span game__span--photo photo">Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" class="game__button" type="radio" value="paint">
            <span class="game__span game__span--paint paint">Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${secondRandomImage}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" class="game__button" type="radio" value="photo">
            <span class="game__span game__span--photo photo">Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" class="game__button" type="radio" value="paint">
            <span class="game__span game__span--paint paint">Рисунок</span>
          </label>
        </div>
      </form>
${statsLayout(initialStatsState)}
    </div>
  </div>
  ${footerLayout}`;

const pickPhotoOrPaintingFromTwoLayoutDom = createElement(pickPhotoOrPaintingFromTwoLayout);


const gameOptionFields = pickPhotoOrPaintingFromTwoLayoutDom.querySelectorAll(`.game__option`);

const gameContent = pickPhotoOrPaintingFromTwoLayoutDom.querySelector(`.game__content`);
const gameAnswerPhotoBtnFirstField = gameOptionFields[0].querySelector(`.game__span--photo`);
const gameAnswerPhotoBtnSecondField = gameOptionFields[1].querySelector(`.game__span--photo`);
const gameAnswerPaintBtnFirstField = gameOptionFields[0].querySelector(`.game__span--paint`);
const gameAnswerPaintBtnSecondField = gameOptionFields[1].querySelector(`.game__span--paint`);

const gameBtnHandler = (gameBtn) => {
  const userAnswer = isItPaintOrPhoto(gameBtn);
  const trueAnswer = (testImages.indexOf(firstRandomArr) === 0) ? `paint` : `photo`;
  gameAnswerState.answer = userAnswer === trueAnswer;
  gameAnswerState.id += 1;
  gameAnswers.push(gameAnswerState);
};

gameAnswerPhotoBtnFirstField.addEventListener(`click`, function () {
  gameBtnHandler(gameAnswerPhotoBtnFirstField);
});

gameAnswerPhotoBtnSecondField.addEventListener(`click`, function () {
  gameBtnHandler(gameAnswerPhotoBtnSecondField);
});

gameAnswerPaintBtnFirstField.addEventListener(`click`, function () {
  gameBtnHandler(gameAnswerPaintBtnFirstField);
});

gameAnswerPaintBtnSecondField.addEventListener(`click`, function () {
  gameBtnHandler(gameAnswerPaintBtnSecondField);
});

const gameFirstStatsState = initialStatsState;
const gameSecondStatsState = initialStatsState;

gameOptionFields.forEach(function (element) {
  element.addEventListener(`click`, function () {
    let count = 0;
    count = gameContent.querySelectorAll(`input[type=radio]:checked`).length;
    if (count >= gameOptionFields.length) {
      showRandomGameScreen();
      changeGameStats(gameAnswerState, gameFirstStatsState);
      changeGameStats(gameAnswerState, gameSecondStatsState);
    }
  });
});


backToGreetingScreen(pickPhotoOrPaintingFromTwoLayoutDom);

export default pickPhotoOrPaintingFromTwoLayoutDom;
