/* Imports */
// none for this file
/* Get DOM Elements */
const shellOneEl = document.getElementById('shellOne-container');
const shellTwoEl = document.getElementById('shellTwo-container');
const shellThreeEl = document.getElementById('shellThree-container');

const shellOneButtonEl = document.getElementById('shell-one-button');
const shellTwoButtonEl = document.getElementById('shell-two-button');
const shellThreeButtonEl = document.getElementById('shell-three-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total-guesses');
const winPercentEl = document.getElementById('win-percent');

const shellOneInputEl = document.getElementById('shell-one-qty');
const shellTwoInputEl = document.getElementById('shell-two-qty');
const shellThreeInputEl = document.getElementById('shell-three-qty');

const shellOneSimulateEl = document.getElementById('shell-one-simulate');
const shellTwoSimulateEl = document.getElementById('shell-two-simulate');
const shellThreeSimulateEl = document.getElementById('shell-three-simulate');

const spanOneTimesEl = document.getElementById('spanOne-times');
const spanTwoTimesEl = document.getElementById('spanTwo-times');
const spanThreeTimesEl = document.getElementById('spanThree-times');

/* State */
let wins = 0;
let losses = 0;
let total = 0;
let winPercent = 0;

// let simOne = 0;
// let simTwo = 0;
// let simThree = 0;

const shellArray = ['shellOne', 'shellTwo', 'shellThree'];

/* Events */
shellOneButtonEl.addEventListener('click', () => {
    handleGuess(getRandomLocation(shellArray), 'shellOne');
});
shellTwoButtonEl.addEventListener('click', () => {
    handleGuess(getRandomLocation(shellArray), 'shellTwo');
});
shellThreeButtonEl.addEventListener('click', () => {
    handleGuess(getRandomLocation(shellArray), 'shellTwo');
});

// fill in text box spans
shellOneInputEl.addEventListener('keyup', () => {
    spanOneTimesEl.textContent = shellOneInputEl.value;
});
shellTwoInputEl.addEventListener('keyup', () => {
    spanTwoTimesEl.textContent = shellTwoInputEl.value;
});
shellThreeInputEl.addEventListener('keyup', () => {
    spanThreeTimesEl.textContent = shellThreeInputEl.value;
});

// simulate for x amount of guesses
// shellOneSimulateEl.addEventListener('click', (), => {

// });

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
        addHeartCat(correctLocation);
    } else {
        losses++;
        addLaughingCat(correctLocation);
    }

    winPercent = (wins / total) * 100;
    winPercent = winPercent.toFixed(1);
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    totalEl.textContent = total;
    winPercentEl.textContent = winPercent;
}

function resetStyles() {
    shellOneEl.classList.remove('laughingCat', 'heartCat');
    shellTwoEl.classList.remove('laughingCat', 'heartCat');
    shellThreeEl.classList.remove('laughingCat', 'heartCat');
}

function addLaughingCat(correctLocation) {
    const correctContainer = document.getElementById(`${correctLocation}-container`);
    correctContainer.classList.add('laughingCat');
}

function addHeartCat(correctLocation) {
    const correctContainer = document.getElementById(`${correctLocation}-container`);
    correctContainer.classList.add('heartCat');
}
// (don't forget to call any display functions you want to run on page load!)
