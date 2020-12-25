import {createElement} from "../utils.js";

export default class AbstractComponents {
  constructor() {
    if (new.target === AbstractComponents) {
      throw new Error(`Can't instantiate AbstractComponents, only concrete one`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
