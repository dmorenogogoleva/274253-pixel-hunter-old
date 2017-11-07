import AbstractView from '../../AbstractView';
import {createElement, showScreen} from '../../util';
import footerLayout from '../../templates/footerLayout';

const initialRulesState = {
  numOfAttempts: 10,
  numOfSeconds: 30,
  numOfMistakes: 3
};

export default class RulesScreenView extends AbstractView {

  get template() {
    return `<div id="rules-div" class="rules central__content">
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай ${initialRulesState.numOfAttempts} раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${initialRulesState.numOfSeconds} секунд.<br>
        Ошибиться можно не более ${initialRulesState.numOfMistakes} раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
  </div>
  ${footerLayout}`.trim();
  }

  get rulesElement() {
    return createElement(this.template);
  }

  bind() {

    const rulesInput = this.rulesElement.querySelector(`.rules__input`);
    const rulesButton = this.rulesElement.querySelector(`.rules__button`);

    const rulesInputInputHandler = () => {
      if (rulesInput.value.length > 0) {
        rulesButton.removeAttribute(`disabled`);
      } else {
        rulesButton.setAttribute(`disabled`, `disabled`);
      }
    };

    rulesInput.addEventListener(`input`, rulesInputInputHandler);
    rulesButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onRulesButtonClick();
    });
  }

  show() {
    return showScreen(this.rulesElement);
  }

  onRulesButtonClick() {
  }

}
