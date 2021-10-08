const query = (p) => document.querySelector(p);
const queryAll = (p) => document.querySelectorAll(p);
const make = (p) => document.createElement(p);

const scorePlate = () => {
  const placar = make('section');
  query(main).appendChild(placar);
}

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
const gameOver = false;

// regra de jogo
function checkPlayerWin(e) {
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
    return console.log(`${a1} ganhow`);
  }
  else if (a1 !== 'velha' && b1 === a1 && c1 === a1) {
    return console.log(`${a1} ganhow`);
  }
  else if (a1 !== 'velha' && b2 === a1 && c3 === a1) {
    return console.log(`${a1} ganhow`);
  }
  else if (a3 !== 'velha' && b2 === a3 && c1 === a3) {
    return console.log(`${a3} ganhow`);
  }
  else if (b1 !== 'velha' && b2 === b1 && b3 === b2) {
    return console.log(`${b1} ganhow`);
  }
  else if (c1 !== 'velha' && c2 === c1 && c3 === c2) {
    return console.log(`${c1} ganhow`);
  }
  else if (a2 !== 'velha' && c2 === a2 && b2 === c2) {
    return console.log(`${a2} ganhow`);
  }
  else if (a3 !== 'velha' && c3 === a3 && b3 === c3) {
    return console.log(`${a3} ganhow`);
  }  
  return console.log('joque!');
}

// engine
const erroBloco = () => {
  const loc = query('.alert');
  loc.innerHTML = `<p class="alert-red"> Outro Player ja marcou este campo !</p>`;
  setTimeout(() => {
    loc.innerHTML = `<p class="alert-blank> </p>`;
  }, 2500);
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
  const playerBlock = bloco.innerHTML;
  if (playerBlock !== '-') {
    return erroBloco();
  } else {
    bloco.classList.add('activeO')
    bloco.innerHTML = atualPlayer.style;
    bloco.setAttribute('player', `${atualPlayer.name}`);
  }
  changerPlayer();
  checkPlayerWin();
};

const observer = () => {
  const alvo = queryAll('.bloco');
  alvo.forEach((bloco) => {
  bloco.addEventListener('click', addPlayerCheck);
  })
}

observer();
