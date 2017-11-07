import IntroScreenView from './IntroScreenView';

class IntroScreen {
  constructor() {
    this.view = new IntroScreenView();
  }

  init() {
    this.view.show();
  }
}

export default new IntroScreen();
