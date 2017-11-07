import AbstractView from '../../AbstractView';
import {createElement, showScreen} from '../../util';

export default class IntroScreenView extends AbstractView {

  get template() {
    return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </div>`.trim();
  }

  get introElement() {
    return createElement(this.template);
  }

  bind() {
    this.introElement.querySelector(`.intro__asterisk`).onclick = (evt) => {
      evt.preventDefault();
      this.onAsteriskClick();
    };
  }

  show() {
    return showScreen(this.introElement);
  }

  onAsteriskClick() {
  }

}
