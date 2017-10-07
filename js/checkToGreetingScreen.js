import showGreetingScreen from './greetingScreen';

const checkToGreetingScreen = function () {
  const btnBack = document.querySelector(`.back`);
  btnBack.addEventListener(`click`, showGreetingScreen);
};

export default checkToGreetingScreen;
