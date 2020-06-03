/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let diceRolls = [];
let roundScore = 0;
let currentScore = 0;
let activePlayer = 0;
let gamePlayableStatus = true;

let dice = document.querySelector('.dice');
let diceTwo = document.querySelector('.dice2');
let rollBtn = document.querySelector('.btn-roll');
let holdBtn = document.querySelector('.btn-hold');
let newBtn = document.querySelector('.btn-new');

let playerOneScore = document.getElementById('score-0');
let playerOneCurrentScore = document.getElementById('current-0');

let playerTwoScore = document.getElementById('score-1');
let playerTwoCurrentScore = document.getElementById('current-1');

let playerOneActiveStatus = document.querySelector(`.player-0-panel`);
let playerTwoActiveStatus = document.querySelector(`.player-1-panel`);

let playerOneName = document.getElementById(`name-0`);
let playerTwoName = document.getElementById(`name-1`);

let range = document.getElementById(`range`);

function init() {
    playerOneScore.innerHTML = 0;
    playerOneCurrentScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    playerTwoCurrentScore.innerHTML = 0;
    currentScore = 0;
    roundScore = 0;
    activePlayer = 0;

    playerOneActiveStatus.classList.remove('active');
    playerTwoActiveStatus.classList.remove('active');
    playerOneActiveStatus.classList.remove('winner');
    playerTwoActiveStatus.classList.remove('winner');
    playerOneActiveStatus.classList.add('active');

    playerOneName.innerHTML = 'Player 1';
    playerTwoName.innerHTML = 'Player 2';

    gamePlayableStatus = true;
    diceRolls = [];
    range.style.display = 'block';
    range.value = 100;
}
init();

function switchPlayer() {
    playerOneActiveStatus.classList.toggle('active');
    playerTwoActiveStatus.classList.toggle('active');

    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    diceRolls = [];
};

rollBtn.addEventListener('click',()=> {
    if(gamePlayableStatus) {
        let diceRoll = getRandom(1, 6);
        let diceTwoRoll = getRandom(1, 6);
        diceRolls.push(diceRoll, diceTwoRoll);
        dice.src = `dice-${diceRoll}.png`;
        diceTwo.src = `dice-${diceTwoRoll}.png`;
        let currentPlayerScore = document.getElementById(`current-${activePlayer}`);
        let roundPlayerScore = document.getElementById(`score-${activePlayer}`);
        range.style.display = 'none';
        
        if(diceRoll === 1 || diceTwoRoll === 1) {
            currentScore = 0;
            currentPlayerScore.innerHTML = 0;
            switchPlayer();
        } else if(diceRoll === 6 && diceTwoRoll === 6) {
            // if(diceRolls[diceRolls.length - 1] === diceRolls[diceRolls.length - 2]) {
                currentScore = 0;
                currentPlayerScore.innerHTML = 0;
                roundPlayerScore.innerHTML = 0;
                switchPlayer();
            // } else {
            //     currentScore = currentScore + (diceRoll + diceTwoRoll);
            //     currentPlayerScore.innerHTML = currentScore;
            // }
        } else {
            currentScore = currentScore + (diceRoll + diceTwoRoll);
            currentPlayerScore.innerHTML = currentScore;
        };
    };
});

holdBtn.addEventListener('click', () => {
    if(gamePlayableStatus) {
        range.style.display = 'none';
        let currentPlayerScore = document.getElementById(`current-${activePlayer}`);
        let roundPlayerScore = document.getElementById(`score-${activePlayer}`);
        let player = document.querySelector(`.player-${activePlayer}-panel`);
        let playerName = document.getElementById(`name-${activePlayer}`);

        switchPlayer();

        roundScore = parseInt(roundPlayerScore.innerHTML);
        roundScore = roundScore + currentScore;
        roundPlayerScore.innerHTML = roundScore;
        currentScore = 0;
        currentPlayerScore.innerHTML = currentScore;

        if(roundPlayerScore.innerHTML >= parseInt(range.value)) {
            player.classList.add('winner');
            playerName.innerHTML = `WINNER!!!`;
            gamePlayableStatus = false;
        };
    };
});

newBtn.addEventListener('click', init);