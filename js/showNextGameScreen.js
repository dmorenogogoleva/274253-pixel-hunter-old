import showScreen from './showScreen';
import createElement from './createElement';
import backToGreetingScreen from './backToGreetingScreen';
import statsLayout from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import pickPhotoOrPaintingLayoutDom from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';
import {answerIcons, currentStatsLayout} from './statsLayout';

const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const gameScreens = [showPhotoOrPaintingScreen, pickPhotoOrPaintingFromTwoScreen, pickPaintingFromImagesScreen];

let countOfShowedScreens = 0;
let countOfMistakes = 0;


const showNextGameScreen = () => {
  gameScreens.sort(() => Math.random() - 0.5);
  countOfShowedScreens += 1;

  const setAnswersInTable = (answersArray) => {

    let arr = [];
    for (const ans of answersArray) {
      if (ans.answer) {
        arr.push(`<li class="stats__result stats__result--correct"></li>`);
      } else {
        arr.push(`<li class="stats__result stats__result--wrong"></li>`);
      }
    }
    return arr.join(` `);
  };

  const showStatsScreen = () => {
    const finalAnswers = gameAnswers.slice();
    const statsLayoutDom = createElement(statsLayout(setAnswersInTable(finalAnswers)));
    backToGreetingScreen(statsLayoutDom);
    return showScreen(statsLayoutDom);
  };

  for (const answer of gameAnswers) {
    if (answer.answer === false) {
      countOfMistakes += 1;
      if (countOfMistakes >= 3) {
        return showStatsScreen();
      }
    }
  }

  if (countOfShowedScreens >= 10) {
    return showStatsScreen();
  }

  return gameScreens[0]();
};

export default showNextGameScreen;
