const scoreX = document.querySelector('.x-score');
const scoreY = document.querySelector('.y-score');
const buttons = document.querySelectorAll('.button');
const turn = document.querySelector('.turns');
const playAgain = document.querySelector('.play-again');
const restart = document.querySelector('.restart');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const helper = document.querySelector('.helper');
const holdButtonContainer = document.querySelector('.container-holds');
const winning_h2 = document.querySelector('.winning-h2');
const body = document.querySelector('body');
let isTurnX = true;
let xsc = 0;
let ysc = 0;
let html = '';
const Xwon = () => {
  xsc = xsc + 1;
  scoreX.textContent = `x-score: ${xsc}`;
  holdButtonContainer.style.display = 'none';
  helper.style.opacity = 1;
  html = `<h2 class="winning-h2">congrats to X for winning</h2>`;
  helper.insertAdjacentHTML('afterbegin', html);
  turn.style.opacity = 0;
  body.style.background = '#00ff00';
};
const Owon = () => {
  ysc = ysc + 1;
  scoreY.textContent = `y-score: ${ysc}`;
  holdButtonContainer.style.display = 'none';
  helper.style.opacity = 1;
  html = `<h2 class="winning-h2">congrats to O for winning</h2>`;
  helper.insertAdjacentHTML('afterbegin', html);
  turn.style.opacity = 0;
  body.style.background = '#00ff00';
};
function winnerX() {
  if (
    btn1.textContent === btn2.textContent &&
    btn1.textContent === btn3.textContent &&
    btn1.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn4.textContent === btn5.textContent &&
    btn4.textContent === btn6.textContent &&
    btn4.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn7.textContent === btn8.textContent &&
    btn7.textContent === btn9.textContent &&
    btn7.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn1.textContent === btn4.textContent &&
    btn1.textContent === btn7.textContent &&
    btn1.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn2.textContent === btn5.textContent &&
    btn2.textContent === btn8.textContent &&
    btn2.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn3.textContent === btn6.textContent &&
    btn3.textContent === btn9.textContent &&
    btn3.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn1.textContent === btn5.textContent &&
    btn1.textContent === btn9.textContent &&
    btn1.textContent === 'X'
  ) {
    Xwon();
  } else if (
    btn3.textContent === btn5.textContent &&
    btn3.textContent === btn7.textContent &&
    btn3.textContent === 'X'
  ) {
    Xwon();
  }
}

function winnerO() {
  if (
    btn1.textContent === btn2.textContent &&
    btn1.textContent === btn3.textContent &&
    btn1.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn4.textContent === btn5.textContent &&
    btn4.textContent === btn6.textContent &&
    btn4.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn7.textContent === btn8.textContent &&
    btn7.textContent === btn9.textContent &&
    btn7.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn1.textContent === btn4.textContent &&
    btn1.textContent === btn7.textContent &&
    btn1.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn2.textContent === btn5.textContent &&
    btn2.textContent === btn8.textContent &&
    btn2.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn3.textContent === btn6.textContent &&
    btn3.textContent === btn9.textContent &&
    btn3.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn1.textContent === btn5.textContent &&
    btn1.textContent === btn9.textContent &&
    btn1.textContent === 'O'
  ) {
    Owon();
  } else if (
    btn3.textContent === btn5.textContent &&
    btn3.textContent === btn7.textContent &&
    btn3.textContent === 'O'
  ) {
    Owon();
  }
}
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (isTurnX) {
      e.target.textContent = 'X';
      e.target.disabled = true;
      isTurnX = false;
      turn.textContent = 'turn: O';
      winnerX();
    } else {
      e.target.textContent = 'O';
      e.target.disabled = true;
      isTurnX = true;
      turn.textContent = 'turn: X';
      winnerO();
    }
  });
});
playAgain.addEventListener('click', () => {
  buttons.forEach((button) => {
    button.textContent = ' ';
    button.disabled = false;
    turn.textContent = 'turn: X';
    holdButtonContainer.style.display = 'grid';
    isTurnX = true;
    turn.style.opacity = 1;
    helper.style.opacity = 0;
    body.style.background = 'rgb(49, 48, 48)';
  });
});
restart.addEventListener('click', () => {
  xsc = 0;
  ysc = 0;
  scoreX.textContent = `x-score: ${xsc}`;
  scoreY.textContent = `y-score: ${ysc}`;
  buttons.forEach((button) => {
    button.textContent = ' ';
    button.disabled = false;
    turn.textContent = 'turn: X';
    holdButtonContainer.style.display = 'grid';
    isTurnX = true;
    turn.style.opacity = 1;
    helper.style.opacity = 0;
    body.style.background = 'rgb(49, 48, 48)';
  });
});
