const query = (p) => document.querySelector(p);
const queryAll = (p) => document.querySelectorAll(p);
const make = (p) => document.createElement(p);

const playerStyler1 = `<i class="far fa-times-circle activeX"></i>`;
const playerStyler2 = `<i class="far fa-circle activeO"></i>`

function checkPlayerWin() {
  console.log('Alguem ganou!');
}

const erroBloco = () => {
  const loc = query('.alert');
  loc.innerHTML = `<p class="alert-red"> Outro Player ja marcou este campo !</p>`;
  setTimeout(() => {
    loc.innerHTML = `<p class="alert-blank> </p>`;
  }, 2500);
}

let atualPlayer = playerStyler1;

function changerPlayer() {
  if (atualPlayer !== playerStyler1) {
    return atualPlayer = playerStyler1;
  } else {
    return atualPlayer = playerStyler2;
  }
}

function addPlayerCheck(event) {
  const bloco = event.target
  const playerBlock = bloco.innerHTML;
  if (playerBlock !== '-') {
    return erroBloco();
  } else {
    bloco.classList.add('activeO')
    bloco.innerHTML = atualPlayer;
  }
  changerPlayer();
  checkPlayerWin();
};

const player1 = {
  nome: 'Player 1',
  score: 0,
}

const player2 = {
  nome: 'Player 2',
  score: 0,
}
const scorePlate = () => {
  const placar = make('section');
  query(main).appendChild(placar);
}
const observer = () => {
  const alvo = queryAll('.bloco');
  alvo.forEach((bloco) => {
  bloco.addEventListener('click', addPlayerCheck);
  })
}

observer();
