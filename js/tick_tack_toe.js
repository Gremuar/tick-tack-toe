import Game from "./class/game.js";
//temp{
// import Board from "./class/board.js";
// import Cell from "./class/cell.js";
// import Player from "./class/player.js";
//}

window.startGame = (e) => {
  e.preventDefault();
  const startButt = e.submitter;
  const sOpt = document.querySelector('.ttt section');
  const opt = new FormData(e.target);
  const game = new Game({
    'size': {
      'w': opt.get('width'),
      'h': opt.get('height')
    },
    'playersNum': opt.get('players_num'),
    'endGameFunc': () => {
      console.log(this);
      sOpt.addEventListener('transitionend', () => {
        console.log(this);
        this.board.clear();
        startButt.disabled = false;
      }, {
        once: true
      });
      sOpt.style.height = sOpt.dataset.height + 'px';
    }
  });
  sOpt.dataset.height = sOpt.offsetHeight;
  sOpt.style.height = 0;
  startButt.disabled = true;
  //temp{
  console.log('Form options:');
  for (const p of opt.entries()) {
    console.log(`${p[0]}: ${p[1]}`);
  }
  //}
}

//test zone
// const board = new Board();
// const cell = new Cell();
// const player = new Player();
// const game = new Game({
//   size: {
//     w: 4,
//     h: 4
//   },
//   playersNum: 1
// });
// document.body.insertAdjacentHTML(
//   "afterend",
//   `<pre>${board.toString()}<br>${cell.toString()}<br>${player.toString()}<br>${game.toString()}</pre>`
// );
// console.log(board.toString(), board.toString(), player.toString(), game.toString());