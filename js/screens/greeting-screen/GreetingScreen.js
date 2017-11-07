import GreetingScreenView from './GreetingScreenView';

class GreetingScreen {
  constructor() {
    this.view = new GreetingScreenView();
  }

  init() {
    this.view.show();
  }
}

export default new GreetingScreen();
