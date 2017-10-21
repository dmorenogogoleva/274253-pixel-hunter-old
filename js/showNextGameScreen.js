import showScreen from './showScreen';
import createElement from './createElement';
import backToGreetingScreen from './backToGreetingScreen';
import statsLayout from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import pickPhotoOrPaintingLayoutDom from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';
import countGamePoints from './countGamePoints';

const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const gameScreens = [showPhotoOrPaintingScreen, pickPhotoOrPaintingFromTwoScreen, pickPaintingFromImagesScreen];


let countOfShowedScreens = 0;

const showNextGameScreen = () => {

  let countOfMistakes = 0;

  gameScreens.sort(() => Math.random() - 0.5);

  countOfShowedScreens += 0.5;

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

    const setGamePointsInTable = countGamePoints(finalAnswers, 3);
    const setFinalAnswersInTable = setAnswersInTable(finalAnswers);

    const statsLayoutDom = createElement(statsLayout(setFinalAnswersInTable, setGamePointsInTable));

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
