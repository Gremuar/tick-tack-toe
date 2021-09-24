export default class Board {
  constructor(size = { w: 4, h: 4 }, className = "board") {
    this.size = size;
    this.className = className;
  }

  get size() {
    return this.size();
  }
  set size(obj) {
    if (obj !== null && typeof obj === "object" && "w" in obj && "h" in obj)
      this._size = obj;
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
