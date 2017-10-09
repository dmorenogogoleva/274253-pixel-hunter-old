import greetingLayoutDom from './greetingScreen';
import showScreen from './showScreen';

const showGreetingScreen = () => showScreen(greetingLayoutDom);

const backToGreetingScreen = (domElement) => {
  const btnBack = domElement.querySelector(`.back`);
  btnBack.addEventListener(`click`, showGreetingScreen);
};

export default backToGreetingScreen;
