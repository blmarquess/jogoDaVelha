const query = () => document.querySelector();
const queryAll = () => document.querySelectorAll();
const make = () => document.createElement();

const addClassX = (e) => {
  const player = activePlayer;
  if (e.target.classList.contains('activeO')) {
    return alert(" Alguem ja marcou esta casa!");
  }
  e.target.classList.add('activeX');
}

function addPlayerCheck(){};

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
  const alvo = queryAll('div');
  alvo.addEventListener('click', addPlayerCheck);
}