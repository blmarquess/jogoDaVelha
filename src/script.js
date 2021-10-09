const query = (p) => document.querySelector(p);
const queryAll = (p) => document.querySelectorAll(p);
const make = (p) => document.createElement(p);

const player1 = {
  name: 'Você',
  style: `<i class="far fa-times-circle activeX"></i>`,
  score: 0,
};
const player2 = {
  name: 'NodePlay',
  style: `<i class="far fa-circle activeO"></i>`,
  score: 0,
};
const gameOver = {status: false};

// regra de jogo
function checkPlayerWin() {
  const a1 = query('#a-1').getAttribute('player');
  const a2 = query('#a-2').getAttribute('player');
  const a3 = query('#a-3').getAttribute('player');
  const b1 = query('#b-1').getAttribute('player');
  const b2 = query('#b-2').getAttribute('player');
  const b3 = query('#b-3').getAttribute('player');
  const c1 = query('#c-1').getAttribute('player');
  const c2 = query('#c-2').getAttribute('player');
  const c3 = query('#c-3').getAttribute('player');

  if (a1 !== 'velha' && a2 === a1 && a3 === a2) {
    return playWin (a1);
  }
  else if (a1 !== 'velha' && b1 === a1 && c1 === a1) {
    return playWin (a1);
  }
  else if (a1 !== 'velha' && b2 === a1 && c3 === a1) {
    return playWin (a1);
  }
  else if (a3 !== 'velha' && b2 === a3 && c1 === a3) {
    return playWin (a3);
  }
  else if (b1 !== 'velha' && b2 === b1 && b3 === b2) {
    return playWin(b1);
  }
  else if (c1 !== 'velha' && c2 === c1 && c3 === c2) {
    return playWin(c1);
  }
  else if (a2 !== 'velha' && c2 === a2 && b2 === c2) {
    return playWin(a2);
  }
  else if (a3 !== 'velha' && c3 === a3 && b3 === c3) {
    return playWin(a3);
  }  
  return ;
}

// placar
const newPoint = () => {
  if (player1.name === atualPlayer.name) {
    return player1.score = player1.score + 1; scoreActual();
  } else if (player2.name === atualPlayer.name) {
    return player2.score = player2.score + 1; scoreActual();
  } else {
    return;
  }
}

function scoreActual() {
  const local = query('.players');
  const newPlacar = `
  <li class="player1">Você score : ${player1.score}</li>
  <li class="player1">NodePlay score : ${player2.score}</li>`;
  local.innerHTML = newPlacar;
};


// engine
const erroBloco = () => {
  const loc = query('.alert');
  loc.innerHTML = `<p class="alert-red"> Outro Player ja marcou este campo !</p>`;
  setTimeout(() => {
    loc.innerHTML = `<p class="alert-blank> </p>`;
  }, 2500);
}

const erroEndGame = () => {
  const loc = query('.alert');
  loc.innerHTML = `<p class="alert-red"> O game acabou!</p>`;
  setTimeout(() => {
    loc.innerHTML = `<p class="alert-blank> </p>`;
  }, 2500);
}

const winClr = () => {
  const loc = query('#win');
  scoreActual()
  setTimeout(() => {
    loc.innerHTML = `<div class="win"> <p"> <samp> <h3> </h3> </samp> <br>  </p> </div>`;
    gameOver.status = false;
  }, 1900);
}
const playWin = (play) => {
  const player = play;
  const loc = query('#win');
  loc.innerHTML = `<div class="winner"> <p><samp><h3>${player} Ganhow !!!!!</h3></samp>
  <br> Comcecar novo game? </p> </div>`;
  newPoint();
  winClr(); gameOver.status = true;
  setTimeout(observer, 1950);
}

let atualPlayer = player1;

function changerPlayer() {
  if (atualPlayer !== player1) {
    return atualPlayer = player1;
  } else {
    return atualPlayer = player2;
  }
}

function addPlayerCheck(event) {
  const bloco = event.target
  const playerBlock = bloco.getAttribute('player', 'velha');
  if (playerBlock !== 'velha') {
    return erroBloco();
  } else if (gameOver.status === true) {
    return erroEndGame();
  }
  else {
    bloco.classList.add('activeO')
    bloco.innerHTML = atualPlayer.style;
    bloco.setAttribute('player', `${atualPlayer.name}`);
  }
  checkPlayerWin();
  changerPlayer();
};

const observer = () => {
  const alvo = queryAll('.bloco');
  alvo.forEach((bloco) => {
    bloco.classList = ('bloco');
    bloco.setAttribute('player', 'velha');
    bloco.innerHTML = '';
    bloco.addEventListener('click', addPlayerCheck);
  })
}

observer();
scoreActual();
