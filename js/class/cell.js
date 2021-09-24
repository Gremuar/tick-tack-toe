export default class Cell {
  constructor(mark = "", own = "", className = "ttt_cell") {
    this.mark = mark;
    this.own = own;
    this.className = className;
  }

  get mark() {
    return this.mark;
  }
  set mark(value) {
    if (value !== null) this._mark = value;
  }
  get own() {
    return this.own;
  }
  set own(value) {
    if (value !== null) this._own = value;
  }
  get className() {
    return this.className;
  }
  set className(value) {
    if (value !== null) this._className = value;
  }
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}
