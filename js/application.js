import IntroScreen from './screens/intro-screen/IntroScreen';

class Application {

  startGame() {
    IntroScreen.init();
  }
}

export default new Application();
