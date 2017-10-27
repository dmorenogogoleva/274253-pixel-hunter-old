import showScreen from './showScreen';
import createElement from './createElement';
import {backToGreetingScreen, addAnswersInList} from './backToGreetingScreen';
import {firstGameStatsLayout, secondGameStatsLayout, footerGameStatsLayout} from './statsScreen';
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

  const renderStatsScreen = () => {
    console.log(gameAnswers);
    console.log(`ОТВЕТЫ`);
    let newArr = addAnswersInList();
    console.log(newArr);
    console.log(`МАССИВ МАССИВОВ ИЗ БЭКСКРИН`);
    console.log(newArr[0]);
    console.log(`ОТВЕТЫ НА ПЕРВУЮ ИГРУ`);
    console.log(newArr[1]);
    console.log(`ОТВЕТЫ НА ВТОРУЮ ИГРУ`);
    console.log(newArr[2]);
    console.log(`ОТВЕТЫ НА ТРЕТЬЮ ИГРУ`);

    const central = document.querySelector(`.central`);

    const showStatsScreen = function (footer, domElement, domElement1, domElement2) {
      central.innerHTML = ``;
      central.appendChild(domElement);
      central.appendChild(domElement1);
      // central.appendChild(domElement2);
      central.appendChild(footer);
    };

    const setGamePointsInTable0 = countGamePoints(newArr[0], 3);
    const setFinalAnswersInTable0 = setAnswersInTable(newArr[0]);
    const answersValue0 = newArr[0].map((answer) => answer.answer ? 100 : 0);
    const statsLayoutDom0 = createElement(firstGameStatsLayout(setFinalAnswersInTable0, setGamePointsInTable0, answersValue0));
    backToGreetingScreen(statsLayoutDom0);


    const setGamePointsInTable1 = countGamePoints(newArr[1], 3);
    const setFinalAnswersInTable1 = setAnswersInTable(newArr[1]);
    const answersValue1 = newArr[1].map((answer) => answer.answer ? 100 : 0);
    const statsLayoutDom1 = createElement(secondGameStatsLayout(setFinalAnswersInTable1));


    // const setGamePointsInTable2 = countGamePoints(newArr[2], 3);
    // const setFinalAnswersInTable2 = setAnswersInTable(newArr[2]);
    // const answersValue2 = newArr[2].map((answer) => answer.answer ? 100 : 0);
    // const statsLayoutDom2 = createElement(secondGameStatsLayout(setFinalAnswersInTable2, setGamePointsInTable2, answersValue2));

    console.log(statsLayoutDom0);
    console.log(statsLayoutDom1);


    return showStatsScreen(footerGameStatsLayout, statsLayoutDom0, statsLayoutDom1);
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
