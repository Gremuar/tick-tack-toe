export default class Player {
  static num = 0;
  constructor(name = "player", marker = "") {
    this.name = name;
    this.marker = "";
  }

  get name() {
    return this.name;
  }
  set name(value) {
    if (value !== null) this._name = value;
  }
  get marker() {
    return this.marker;
  }
  set marker(value) {
    if (value !== null) this._marker = value;
  }
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}
