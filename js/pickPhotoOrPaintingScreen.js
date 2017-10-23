import testImages from './testImages';
import createElement from './createElement';
import showNextGameScreen from './showNextGameScreen';
import {questions, randomArrayElement, findRandomImage} from './randomQuestion';
import isItPaintOrPhoto from './isItPaintOrPhoto';
import backToGreetingScreen from './backToGreetingScreen';
import headerLayout from './headerLayout';
import footerLayout from './footerLayout';
import {gameAnswers} from './gameAnswers';


const createPickPhotoOrPaintingLayoutDom = (currentStats) => {

  const randomArr = randomArrayElement(testImages);

  const pickPhotoOrPaintingLayout = `
  ${headerLayout}
  <div id="game-2-div" class="game-2 central__content">
    <div class="game">
      <p class="game__task">${randomArrayElement(questions)}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${findRandomImage(randomArr, testImages)}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span class="game__span game__span--photo photo">Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span class="game__span game__span--paint paint">Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
      <ul class="stats">
      ${currentStats}
      </ul>
    </div>
    </div>
  </div>
    ${footerLayout}`;

  const pickPhotoOrPaintingLayoutDom = createElement(pickPhotoOrPaintingLayout);
  const gameAnswersBtns = pickPhotoOrPaintingLayoutDom.querySelectorAll(`.game__answer`);

  gameAnswersBtns.forEach(function (btn) {
    btn.addEventListener(`click`, function () {
      showNextGameScreen();
    });
  });

  const gameAnswerPhotoBtn = pickPhotoOrPaintingLayoutDom.querySelector(`.game__span--photo`);
  const gameAnswerPaintBtn = pickPhotoOrPaintingLayoutDom.querySelector(`.game__span--paint`);

  gameAnswerPhotoBtn.addEventListener(`click`, function () {
    const userAnswer = isItPaintOrPhoto(gameAnswerPhotoBtn);
    const trueAnswer = (testImages.indexOf(randomArr) === 0) ? `paint` : `photo`;
    let gameAnswer = {};
    gameAnswer.answer = userAnswer === trueAnswer;
    gameAnswers.push(gameAnswer);
  });

  gameAnswerPaintBtn.addEventListener(`click`, function () {
    const userAnswer = isItPaintOrPhoto(gameAnswerPaintBtn);
    const trueAnswer = (testImages.indexOf(randomArr) === 0) ? `paint` : `photo`;
    let gameAnswer = {};
    gameAnswer.answer = userAnswer === trueAnswer;
    gameAnswers.push(gameAnswer);
  });

  backToGreetingScreen(pickPhotoOrPaintingLayoutDom);

  return pickPhotoOrPaintingLayoutDom;
};


export default createPickPhotoOrPaintingLayoutDom;
