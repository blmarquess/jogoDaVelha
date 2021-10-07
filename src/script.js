const query = (p) => document.querySelector(p);
const queryAll = (p) => document.querySelectorAll(p);
const make = (p) => document.createElement(p);

const playerStyler1 = `<div><i class="far fa-times-circle"></i></div>`;

const playerStyler2 = `<div><i class="far fa-circle"></i></div>`



function addPlayerCheck(event) {
  const alvoBloco = event.target
  alvoBloco.classList.add('activeX')
  alvoBloco.style.backgroundColor = 'white';
  alvoBloco.innerHTML = playerStyler1;
  console.log('clicou');
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
  console.log(alvo);
}

observer();

function checkPlayerWin() {
  
}