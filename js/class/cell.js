export default class Cell {
  constructor(coords = [0,0], mark = "", own = null, className = "ttt_cell") {
    this.elem = document.createElement('div');
    this.mark = mark;
    this.own = own;
    this.className = className;
    this.coords = coords;
    this.elem.className = this.className;
    this.elem.id = `cell_${coords[0]}-${coords[1]}`;
  }

  get mark() {
    return this._mark;
  }
  set mark(value) {
    if (value !== null) {
      this._mark = value;
      this.elem.innerHTML = value;
    }
  }
  get own() {
    return this._own;
  }
  set own(Player) {
    if (Player !== null) this._own = Player;
  }
  get className() {
    return this._className;
  }
  set className(value) {
    if (value !== null) {
      this.elem.classList.remove(this._className);
      this.elem.classList.add(value);
      this._className = value;
    }
  }
  get coords() {
    return this._coords;
  }
  set coords(value=[0,0]) {
    this._coords = value;
  }
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}