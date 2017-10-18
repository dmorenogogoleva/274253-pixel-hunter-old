import showScreen from './showScreen';
import statsLayoutDom from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import {pickPhotoOrPaintingLayoutDom} from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';

const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const showStatsScreen = (ans) => {
  showScreen(statsLayoutDom);
  return ans;
};


const gameScreens = [showPhotoOrPaintingScreen, pickPhotoOrPaintingFromTwoScreen, pickPaintingFromImagesScreen];

const compareElement = () => {
  return Math.random() - 0.5;
};

let countOfShowedScreens = 0;
let countOfMistakes = 0;

const showRandomGameScreen = () => {
  gameScreens.sort(compareElement);
  countOfShowedScreens += 1;


  for (const answer of gameAnswers) {
    if (answer.answer === false) {
      countOfMistakes += 1;
      if (countOfMistakes >= 3) {
        const finalAnswers = gameAnswers.slice();
        return showStatsScreen(finalAnswers);
      }
    }
  }

  if (countOfShowedScreens >= 10) {
    const finalAnswers = gameAnswers.slice();
    return showStatsScreen(finalAnswers);
  }

  return gameScreens[0]();
};

export default showRandomGameScreen;
