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
    this.activePlayer = '';
    for (let n = 0; n < this.options.playersNum; n++) {
      this.players.push(new Player(Game.marks[n]));
    }
    this.board = new Board(this.options.size);
    // this.board.board.addEventListener('click', () => this.endGame());
    this.board.board.addEventListener('click', (e) => {
      if (e.target.className === this.board.cells[0].className) console.log(e);
    })
    console.log(this.toString());
  }

  endGame() {
    if (typeof this.options.endGameFunc === 'function') this.options.endGameFunc.call(this);
    console.log(`${this.constructor.name}: Игра окончена.`);
  }

  toString() {
    return this.constructor.name + ":\n" + JSON.stringify(this, null, 2);
  }
}