import showScreen from './showScreen';
import statsLayoutDom from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import {pickPhotoOrPaintingLayoutDom} from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';

const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const showStatsScreen = () => showScreen(statsLayoutDom);


const gameScreens = [showPhotoOrPaintingScreen, pickPhotoOrPaintingFromTwoScreen, pickPaintingFromImagesScreen];

const compareElement = () => {
  return Math.random() - 0.5;
};

let countOfShowedScreens = 0;

const showRandomGameScreen = () => {
  gameScreens.sort(compareElement);

  countOfShowedScreens += 1;

  if (countOfShowedScreens >= 10) {
    const finalAnswers = gameAnswers.slice();
    showStatsScreen();
    return finalAnswers;
  }
  return gameScreens[0]();
};


export default showRandomGameScreen;
