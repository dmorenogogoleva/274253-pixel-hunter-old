import AbstractView from '../../AbstractView';
import {createElement, showScreen} from '../../util';
import footerLayout from '../../templates/footerLayout';
import headerLayout from '../../templates/headerLayout';
import testImages from '../../testImages';
import {findRandomRangeNum} from '../../util';

const paintingsArr = testImages[0];
const photosArr = testImages[1];
const photoFirst = photosArr[findRandomRangeNum(0, photosArr.length - 1)];
const photoSecond = photosArr[findRandomRangeNum(0, photosArr.length - 1)];
const painting = paintingsArr[findRandomRangeNum(0, paintingsArr.length - 1)];
const imagesArr = [photoFirst, photoSecond, painting];

const newImagesArr = imagesArr.slice().sort(() => Math.random() - 0.5);

export default class PickPaintingFromImagesScreenView extends AbstractView {

  get template() {
    return `
    ${headerLayout}
    <div id="game-3-div" class="game-3 central__content">
        <div class="game">
          <p class="game__task">Найдите рисунок среди изображений</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img class="game__image" src="${newImagesArr[0]}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img class="game__image" src="${newImagesArr[1]}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img class="game__image" src="${newImagesArr[2]}" alt="Option 1" width="304" height="455">
            </div>
          </form>
          <div class="stats">
          <ul class="stats">
          ${`currentStats`}
          </ul>
        </div>
        </div>
      </div>
      ${footerLayout}`.trim();
  }

  get PickPaintingFromImagesScreenElement() {
    return createElement(this.template);
  }

  bind() {

  }

  show() {
    return showScreen(this.PickPaintingFromImagesScreenElement);
  }

  onRulesButtonClick() {
  }

}
