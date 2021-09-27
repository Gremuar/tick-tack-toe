import Game from "./class/game.js";
//temp{
// import Board from "./class/board.js";
// import Cell from "./class/cell.js";
// import Player from "./class/player.js";
//}
"use strict";
window.addEventListener('load', () => {
  const controls = {
    newGame: document.querySelector('.ttt_control-panel .new-game'),
    fullSize: document.querySelector('.full-size-button'),
    boardSection: document.querySelector(".ttt section:nth-of-type(2)"),
    optSection: document.querySelector('.ttt section:nth-of-type(1)')
  }

  window.startGame = (e) => {
    e.preventDefault();
    const startButt = e.submitter;
    const opt = new FormData(e.target);
    const game = new Game({
      'size': {
        'w': opt.get('width'),
        'h': opt.get('height')
      },
      'playersNum': opt.get('players_num'),
      'endGameFunc': function () {
        console.log(this);
        controls.optSection.addEventListener('transitionend', () => {
          this.board.clear();
          startButt.disabled = false;
        }, {
          once: true
        });
        controls.optSection.style.height = controls.optSection.dataset.height + 'px';
      }
    });
    controls.optSection.dataset.height = controls.optSection.offsetHeight;
    controls.optSection.style.height = 0;
    startButt.disabled = true;
    controls.newGame.addEventListener('click', () => game.endGame());
    //temp{
    console.log('Form options:');
    for (const p of opt.entries()) {
      console.log(`${p[0]}: ${p[1]}`);
    }
    //}
  }

  controls.fullSize.addEventListener('click', (e) => {
    controls.boardSection.classList.toggle("full_size");
    controls.fullSize.classList.toggle('active');
  });

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

});