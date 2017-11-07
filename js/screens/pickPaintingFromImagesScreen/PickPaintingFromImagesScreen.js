import PickPaintingFromImagesScreenView from './PickPaintingFromImagesScreenView';

class PickPaintingFromImagesScreen {
  constructor() {
    this.view = new PickPaintingFromImagesScreenView();
  }

  init() {
    this.view.show();
  }
}

export default new PickPaintingFromImagesScreen();
