import showScreen from './showScreen';
import createElement from './createElement';
import backToGreetingScreen from './backToGreetingScreen';
import statsLayout from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import {pickPhotoOrPaintingLayoutDom} from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';

const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

// const showStatsScreen = (ans) => {
//   showScreen(statsLayoutDom);
//   return ans;
// };


const gameScreens = [showPhotoOrPaintingScreen, pickPhotoOrPaintingFromTwoScreen, pickPaintingFromImagesScreen];

const valueForRandomSorting = () => {
  return Math.random() - 0.5;
};

let countOfShowedScreens = 0;
let countOfMistakes = 0;


const showRandomGameScreen = () => {
  gameScreens.sort(valueForRandomSorting);
  countOfShowedScreens += 1;

  const setAnswerIcon = (answer) => {
    return answer ? `stats__result--correct` : `stats__result--wrong`;
  };

  const showStatsScreen = () => {
    const finalAnswers = gameAnswers.slice();
    const statsLayoutDom = createElement(statsLayout(setAnswerIcon(finalAnswers[0].answer)));
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

export default showRandomGameScreen;
