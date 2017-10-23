import greetingLayoutDom from './greetingScreen';
import showScreen from './showScreen';
import {gameAnswers} from './gameAnswers';
import rulesLayoutDom from './rulesScreen';

const showGreetingScreen = () => {
  const rulesInput = rulesLayoutDom.querySelector(`.rules__input`);
  rulesInput.value = ``;
  gameAnswers.length = 0;
  showScreen(greetingLayoutDom);
};

const backToGreetingScreen = (domElement) => {
  const btnBack = domElement.querySelector(`.back`);
  btnBack.addEventListener(`click`, showGreetingScreen);
};

export default backToGreetingScreen;
