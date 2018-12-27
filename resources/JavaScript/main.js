// Elements

const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const spock = document.getElementById('spock');
const lizard = document.getElementById('lizard');

// Scores Elements

let playerScores = 0;
let computerScores = 0;
const resultMessage = document.getElementById('final-message');
const user = document.getElementById('player_scores');
const comp = document.getElementById('computer_scores');



// Buttons

function rulesEnglish(){
    document.getElementById('text').innerHTML = 'Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.';
};

function rulesRussian() {
  document.getElementById('text').innerHTML = 'Ножницы режут бумагу, бумага кроет камень, камень раздавливает ящерицу, ящерица отравляет Спока, Спок ломает ножницы, ножницы отрезают голову ящерице, ящерица съедает бумагу, бумага разоблачает Спока, Спок расщепляет камень, и как это всегда и бывает, камень ломает ножницы.';
};

// Gameplay

function getUserChoice(userInput) {
  const computerChoice = getComputerChoice();

function resultWon() {
  document.getElementById('final-message').innerHTML = 'User won! Игрок победил!';
  playerScores++;
  user.innerHTML = playerScores;
};
function resultLost() {
  document.getElementById('final-message').innerHTML = 'Computer won! Компьютер победил!';
  computerScores++;
  comp.innerHTML = computerScores;
};
function resultTie() {
  document.getElementById('final-message').innerHTML = "The game in a tie. Ничья."
}

// Determine a winner

  switch(userInput + computerChoice) {
    case 'scissorspaper':
    case 'scissorslizard':
    case 'spockscissors':
    case 'spockrock':
    case 'rockscissors':
    case 'rocklizard':
    case 'paperspock':
    case 'paperrock':
    case 'lizardspock':
    case 'lizardpaper':
    return resultWon();
    break;
    case 'paperpaper':
    case 'lizardlizard':
    case 'spockspock':
    case 'rockrock':
    case 'scissorsscissors':
    return resultTie();
    default:
    return resultLost();
    break;
  }


};

// User choice

  function userChoice() {
 scissors.addEventListener('click', function() {
   getUserChoice('scissors');
 })
 rock.addEventListener('click', function() {
   getUserChoice('rock');
 })
 paper.addEventListener('click', function() {
   getUserChoice('paper');
 })
 spock.addEventListener('click', function() {
   getUserChoice('spock');
 })
 lizard.addEventListener('click', function() {
   getUserChoice('lizard');
 })
};
userChoice();



// Computer choice

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 5);
  switch(randomNumber) {
    case 0:
    return 'scissors';
    break;
    case 1:
    return 'rock';
    break;
    case 2:
    return 'paper';
    break;
    case 3:
    return 'spock';
    break;
    case 4:
    return 'lizard';
    break;
  }
};
