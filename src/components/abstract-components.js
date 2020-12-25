export default class AbstractComponents {
  constructor() {
    if (new.target === AbstractComponents) {
      throw new Error(`Can't instantiate AbstractComponents, only concrete one`);
    }
  }
}
