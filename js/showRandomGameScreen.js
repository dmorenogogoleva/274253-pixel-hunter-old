import showScreen from './showScreen';
import statsLayoutDom from './statsScreen';
import pickPhotoOrPaintingFromTwoLayoutDom from './pickPhotoOrPaintingFromTwoScreen';
import {pickPhotoOrPaintingLayoutDom} from './pickPhotoOrPaintingScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';


const showPhotoOrPaintingScreen = () => showScreen(pickPhotoOrPaintingLayoutDom);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);
const pickPhotoOrPaintingFromTwoScreen = () => showScreen(pickPhotoOrPaintingFromTwoLayoutDom);
const showStatsScreen = () => showScreen(statsLayoutDom);


const gameScreens = [showPhotoOrPaintingScreen, pickPaintingFromImagesScreen, pickPhotoOrPaintingFromTwoScreen];

const compareElement = () => {
  return Math.random() - 0.5;
};

let countOfShowedScreens = 0;

const showRandomGameScreen = () => {
  gameScreens.sort(compareElement);

  countOfShowedScreens += 1;

  if (countOfShowedScreens >= 10) {
    return showStatsScreen();
  }
  return gameScreens[0]();
};


export default showRandomGameScreen;
