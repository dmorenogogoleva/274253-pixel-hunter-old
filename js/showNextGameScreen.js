import showScreen from './showScreen';
import createElement from './createElement';
import backToGreetingScreen from './backToGreetingScreen';
import statsLayout from './statsScreen';
import createPickPhotoOrPaintingFromTwo from './pickPhotoOrPaintingFromTwoScreen';
import createPickPhotoOrPaintingLayoutDom from './pickPhotoOrPaintingScreen';
import createPickPaintingFromImages from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';
import countGamePoints from './countGamePoints';

const showPhotoOrPaintingScreen = (currentStats) => showScreen(createPickPhotoOrPaintingLayoutDom(currentStats));
const pickPhotoOrPaintingFromTwoScreen = (currentStats) => showScreen(createPickPhotoOrPaintingFromTwo(currentStats));
const pickPaintingFromImagesScreen = (currentStats) => showScreen(createPickPaintingFromImages(currentStats));

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
    const answersValue = gameAnswers.map((answer) => answer.answer ? 100 : 0);

    const statsLayoutDom = createElement(statsLayout(setFinalAnswersInTable, setGamePointsInTable, answersValue));

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

  return gameScreens[0](setAnswersInTable(gameAnswers));
};

export default showNextGameScreen;
