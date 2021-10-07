const query = (p) => document.querySelector(p);
const queryAll = (p) => document.querySelectorAll(p);
const make = (p) => document.createElement(p);

const playerStyler1 = `<i class="far fa-times-circle activeX"></i>`;

const playerStyler2 = `<i class="far fa-circle activeO"></i>`
const atualPlayer = playerStyler1;


function addPlayerCheck(event) {
  const player = atualPlayer;

  const bloco = event.target
  // if (bloco.player.value !== 'velha') {
  //   alert('Outro player ocupou esta casa!')
  // } else {
    bloco.classList.add('activeO')
    bloco.style.backgroundColor = 'white';
    bloco.player = player;
    bloco.innerHTML = playerStyler2;
    console.log(bloco.player.value);
  // }
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