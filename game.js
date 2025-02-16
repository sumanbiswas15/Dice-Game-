let score1 = 0;
let score2 = 0;
let currentPlayer = 1; 
let timer; 
const scoreDisplay1 = document.getElementById('score1');
const scoreDisplay2 = document.getElementById('score2');
const resultDisplay = document.getElementById('result');
const timerDisplay1 = document.getElementById('timer1');
const timerDisplay2 = document.getElementById('timer2');
document.getElementById('d1').addEventListener('click', () => {
    if (currentPlayer === 1) {
        rollAndAnimate('d1', 'score1');
    }
});
document.getElementById('d2').addEventListener('click', () => {
    if (currentPlayer === 2) {
        rollAndAnimate('d2', 'score2');
    }
});
document.getElementById('startButton').addEventListener('click', () => {
    resetGame();
});
document.getElementById('BackButton').addEventListener('click', () => {
    window.location.href = 'Home_page.html';
});
function rollAndAnimate(diceId, scoreId) {
    const diceElement = document.getElementById(diceId);
    diceElement.classList.add('roll');
    setTimeout(() => {
        const roll = rollDice();
        if (diceId === 'd1') {
            score1 += roll;
            scoreDisplay1.textContent = score1;
        } else {
            score2 += roll;
            scoreDisplay2.textContent = score2;
        }
        diceElement.classList.remove('roll');
        checkWinner();
    }, 500);

    switchPlayer();
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function checkWinner() {
    if (score1 == 100) {
        resultDisplay.textContent = "Player 1 Wins!";
        disableGame();
    } else if (score2 == 100) {
        resultDisplay.textContent = "Player 2 Wins!";
        disableGame();
    }
}
function disableGame() {
    clearInterval(timer);
    document.getElementById('d1').style.pointerEvents = 'none';
    document.getElementById('d2').style.pointerEvents = 'none';
}
function resetGame() {
    score1 = 0;
    score2 = 0;
    scoreDisplay1.textContent = score1;
    scoreDisplay2.textContent = score2;
    resultDisplay.textContent = '';
    timerDisplay1.textContent = '20';
    timerDisplay2.textContent = '20';
    document.getElementById('d1').style.pointerEvents = 'auto';
    document.getElementById('d2').style.pointerEvents = 'auto';
    currentPlayer = 1;
    startTimer();
}
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    startTimer();
}
function startTimer() {
    clearInterval(timer);
    let timeLeft = 20;
    const currentTimerDisplay = currentPlayer === 1 ? timerDisplay1 : timerDisplay2;
    timer = setInterval(() => {
        timeLeft--;
        currentTimerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            switchPlayer();
        }
    }, 1000);
}