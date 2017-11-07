import RulesScreenView from './RulesScreenView';

class RulesScreen {
  constructor() {
    this.view = new RulesScreenView();
  }

  init() {
    this.view.show();
  }
}

export default new RulesScreen();
