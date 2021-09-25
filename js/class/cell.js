export default class Cell {
  static num = 0;
  constructor(mark = "", own = "", className = "ttt_cell") {
    this.mark = mark;
    this.own = own;
    this.className = className;
    this.id = Cell.num++;
    this.elem = document.createElement('div');
    this.elem.className = this.className;
    this.elem.id = 'cell_' + this.id;
  }

  get mark() {
    return this._mark;
  }
  set mark(value) {
    if (value !== null) this._mark = value;
  }
  get own() {
    return this._own;
  }
  set own(value) {
    if (value !== null) this._own = value;
  }
  get className() {
    return this._className;
  }
  set className(value) {
    if (value !== null) this._className = value;
  }
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}