/* Imports */
// none for this file
/* Get DOM Elements */
const shellOneEl = document.getElementById('shell-one');
const shellTwoEl = document.getElementById('shell-two');
const shellThreeEl = document.getElementById('shell-three');

const shellOneButtonEl = document.getElementById('shell-one-button');
const shellTwoButtonEl = document.getElementById('shell-two-button');
const shellThreeButtonEl = document.getElementById('shell-three-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total-guesses');
const winPercentEl = document.getElementById('win-percent');

/* State */
let wins = 0;
let losses = 0;
let total = 0;
let winPercent = 0;
const shellArray = ['shellOne', 'shellTwo', 'shellThree'];

/* Events */
shellOneButtonEl.addEventListener('click', () => {
    const correctShell = getRandomLocation(shellArray);
    handleGuess(correctShell, 'shellOne');
});

shellTwoButtonEl.addEventListener('click', () => {
    const correctShell = getRandomLocation(shellArray);
    handleGuess(correctShell, 'shellTwo');
});

shellThreeButtonEl.addEventListener('click', () => {
    const correctShell = getRandomLocation(shellArray);
    handleGuess(correctShell, 'shellThree');
});

/* Display Functions */
function getRandomLocation(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const correctShell = arr[index];
    return correctShell;
}

function handleGuess(correctLocation, userGuess) {
    resetStyles();
    total++;

    if (correctLocation === userGuess) {
        wins++;
    } else {
        losses++;
    }

    winPercent = (wins / total) * 100;
    winPercent = winPercent.toFixed(1);
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    totalEl.textContent = total;
    winPercentEl.textContent = winPercent;
}

function resetStyles() {
    shellOneEl.classList.remove('dot');
    shellTwoEl.classList.remove('dot');
    shellThreeEl.classList.remove('dot');
}

// (don't forget to call any display functions you want to run on page load!)
