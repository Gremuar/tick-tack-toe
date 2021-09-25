import Board from "./board.js";
import Player from "./player.js";

export default class Game {
  static marks = ['X', 'O', 'Z', 'H', 'T', 'Y', 'W', 'Q', 'S', 'N']
  constructor(options) {
    if (options !== null && typeof options === "object" && "playersNum" in options && "size" in options && "w" in options.size && "h" in options.size) {
      this.options = options;
      this.init();
    } else {
      console.error(
        `${this.constructor.name}: Отсутствует объект с настройками или настройки некорректные.`
      );
    }
  }

  init() {
    console.log('App started');
    Player.num = 0;
    this.players = [];
    for (let n = 0; n < this.options.playersNum; n++) {
      this.players.push(new Player(Game.marks[n]));
    }
    this.board = new Board(this.options.size);
    this.board.board.addEventListener('click', () => this.endGame(this.options.endGameFunc));

    console.log(this.toString());
  }

  endGame(callback) {
    if (typeof callback === 'function') callback.call(this);
    console.log(`${this.constructor.name}: Игра окончена.`);
  }

  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}