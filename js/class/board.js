import Cell from "./cell.js";

export default class Board {
  constructor(size = {
    w: 4,
    h: 4
  }, className = "ttt_board") {
    this.cells=[]
    this.size = size;
    this.className = '.' + className;
    this.board = document.querySelector(this.className);
    if (this.board === null) console.error(`${this.constructor.name}: В верстке не найден блок ${this.className}`);
    this.render();
  }

  render() {
    // window.board = this;
    Cell.num = 0;
    for (let i = 0, count = this.size.w * this.size.h; i < count; i++) {
      this.cells.push(new Cell());
      this.board.appendChild(this.cells[i].elem);
      this.cells[i].elem.style.width = `calc(100% / ${this.size.w} - ${getComputedStyle(this.cells[i].elem).borderBlockWidth} * 2)`;
    }
    console.log(this.toString());
  }

  clear() {
    while (this.board.firstChild && this.board.removeChild(this.board.firstChild));
    console.log(`${this.constructor.name}: доска очищена.`);
  }

  get size() {
    return this._size;
  }
  set size(obj) {
    if (obj !== null && typeof obj === "object" && "w" in obj && "h" in obj)
      this._size = obj;
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