import {createElement} from './util';

export default class AbstractView {

  get template() {
    throw new Error(`Dont have template for view`);
  }

  render() {
    createElement(this.template);
  }

  bind() {

  }

  get element() {
    this.render();
    this.bind();
  }
}
