export default class Game {
  constructor(options) {
    if (options !== null && typeof options === "object") {
      if ("size" in options && "w" in options.size && "h" in options.size)
        this.size = options.size;
      if ("playersNum" in options) this.playersNum = options.playersNum;
      this.init();
    } else {
      console.error(
        `${this.constructor.name}: Отсутствует объект с настройками`
      );
    }
  }
  init() {
    console.log(this.toString());
  }
  endGame() {}
  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}
