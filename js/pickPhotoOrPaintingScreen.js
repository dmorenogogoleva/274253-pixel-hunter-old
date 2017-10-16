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


const randomArr = randomArrayElement(testImages);

const findRandomImage = () => {
  const randomImage = randomArr[findRandomRangeNum(0, testImages.length)];
  return randomImage;
};

const pickPhotoOrPaintingLayout = `
${headerLayout}
<div id="game-2-div" class="game-2 central__content">
  <div class="game">
    <p class="game__task">${randomArrayElement(questions)}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${window.onload = findRandomImage()}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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

const gameStatsState = initialStatsState;

const pickPhotoOrPaintingLayoutDom = createElement(pickPhotoOrPaintingLayout);


// не получилось менять иконки потому что экраны отрисовываются раньше чем
// создается changeGameStats. ничего не понятно

const gameAnswers = pickPhotoOrPaintingLayoutDom.querySelectorAll(`.game__answer`);

let count = 0;

gameAnswers.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    count += 1;
    if (count >= gameAnswers.length) {
      showRandomGameScreen();
      const userAnswer = isItPaintOrPhoto(btn);
      const trueAnswer = (testImages.indexOf(randomArr) === 0) ? `paint` : `photo`;
      gameAnswerState.answer = userAnswer === trueAnswer;
      changeGameStats(gameAnswerState, gameStatsState);
    }
  });
});


backToGreetingScreen(pickPhotoOrPaintingLayoutDom);

export {pickPhotoOrPaintingLayoutDom, gameStatsState};
