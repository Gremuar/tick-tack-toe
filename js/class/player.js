export default class Player {
  static num = 0;
  constructor(marker = "", name = `Player ${++Player.num}`) {
    this.name = name;
    this.marker = marker;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (value !== null) this._name = value;
  }
  get marker() {
    return this._marker;
  }
  set marker(value) {
    if (value !== null) this._marker = value;
  }
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}
