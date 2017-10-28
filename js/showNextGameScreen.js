import showScreen from './showScreen';
import createElement from './createElement';
import {backToGreetingScreen, addAnswersInList} from './backToGreetingScreen';
import {firstGameStatsLayout, secondGameStatsLayout} from './statsScreen';
import createPickPhotoOrPaintingFromTwo from './pickPhotoOrPaintingFromTwoScreen';
import createPickPhotoOrPaintingLayoutDom from './pickPhotoOrPaintingScreen';
import createPickPaintingFromImages from './pickPaintingFromImagesScreen';
import {gameAnswers} from './gameAnswers';
import countGamePoints from './countGamePoints';
import footerLayout from './footerLayout';

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

  const renderStatsScreen = () => {
    let newArr = addAnswersInList();

    const central = document.querySelector(`.central`);

    const showStatsScreen = function (footer, statsLayoutDomArray) {
      central.innerHTML = ``;

      for (let domElement of statsLayoutDomArray) {
        central.appendChild(domElement);
      }
      central.appendChild(footer);
    };


    const createArrayOfStatsElementsLayout = (arr) => {
      let arrayOfStatsElementsLayout = [];
      const setFirstGameFinalAnswersInFTable = setAnswersInTable(arr[0]);
      const setFirstGamePointsInTable = countGamePoints(arr[0], 3);
      const firstGameAnswersValue = arr[0].map((answer) => answer.answer ? 100 : 0);
      const firstGameStatsLayoutDom = createElement(firstGameStatsLayout(setFirstGameFinalAnswersInFTable, setFirstGamePointsInTable, firstGameAnswersValue));
      backToGreetingScreen(firstGameStatsLayoutDom);

      arrayOfStatsElementsLayout.push(firstGameStatsLayoutDom);

      for (let i = 1; i < arr.length; i++) {
        let numberOfGame = i + 1;

        const setRestGamesFinalAnswersInTable = setAnswersInTable(arr[i]);
        const setRestGamesPointsInTable = countGamePoints(arr[i], 3);
        const restGamesAnswersValue = arr[i].map((answer) => answer.answer ? 100 : 0);
        const restGamesStatsLayoutDom = createElement(secondGameStatsLayout(numberOfGame, setRestGamesFinalAnswersInTable, setRestGamesPointsInTable, restGamesAnswersValue));

        arrayOfStatsElementsLayout.push(restGamesStatsLayoutDom);
      }

      return arrayOfStatsElementsLayout;
    };
    return showStatsScreen(createElement(footerLayout), createArrayOfStatsElementsLayout(newArr));
  };

  for (const answer of gameAnswers) {
    if (answer.answer === false) {
      countOfMistakes += 1;
      if (countOfMistakes >= 3) {
        return renderStatsScreen();
      }
    }
  }

  if (countOfShowedScreens >= 10) {
    return renderStatsScreen();
  }

  return gameScreens[0](setAnswersInTable(gameAnswers));
};

export default showNextGameScreen;
