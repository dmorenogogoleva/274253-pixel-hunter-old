import createElement from './createElement';
import showScreen from './showScreen';
import pickPhotoOrPaintingLayoutDom from './pickPhotoOrPaintingScreen';
import headerLayout from './headerLayout';
import statsLayout from './statsLayout';
import footerLayout from './footerLayout';
import backToGreetingScreen from './backToGreetingScreen';
import isItPaintOrPhoto from './isItPaintOrPhoto';
import {findRandomRangeNum, questions, randomArrayElement} from './randomQuestion';
import testImages from './testImages';

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
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" class="game__button" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${secondRandomImage}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" class="game__button" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" class="game__button" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
${statsLayout}
    </div>
  </div>
  ${footerLayout}`;

const pickPhotoOrPaintingFromTwoLayoutDom = createElement(pickPhotoOrPaintingFromTwoLayout);
const showGPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);

const gameOptionFields = pickPhotoOrPaintingFromTwoLayoutDom.querySelectorAll(`.game__option`);
const gameContent = pickPhotoOrPaintingFromTwoLayoutDom.querySelector(`.game__content`);
const gameAnswers = pickPhotoOrPaintingFromTwoLayoutDom.querySelectorAll(`.game__answer`);

gameAnswers.forEach(function (answer) {
  answer.addEventListener(`click`, function () {
    // console.log(isItPaintOrPhoto(answer));
    // console.log(firstRandomArr);
  });
});

gameOptionFields.forEach(function (element) {
  element.addEventListener(`click`, function () {

    let count = 0;
    count = gameContent.querySelectorAll(`input[type=radio]:checked`).length;


    if (count === gameOptionFields.length) {
      showGPhotoOrPaintingScreen();
    }
  });
});

backToGreetingScreen(pickPhotoOrPaintingFromTwoLayoutDom);

export default pickPhotoOrPaintingFromTwoLayoutDom;
