import Board from "./class/board.js";
import Cell from "./class/cell.js";
import Game from "./class/game.js";
import Player from "./class/player.js";

window.startGame = (options)=>{
    console.log(options);
}

//test zone
const board = new Board();
const cell = new Cell();
const player = new Player();
const game = new Game({ size: { w: 4, h: 4 }, playersNum: 1 });
document.body.insertAdjacentHTML(
  "afterend",
  `<pre>${board.toString()}<br>${cell.toString()}<br>${player.toString()}<br>${game.toString()}</pre>`
);
console.log(board.toString(), board.toString(), player.toString(), game.toString());
