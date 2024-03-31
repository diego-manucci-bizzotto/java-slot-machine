import {connected, betRequest} from "./socket.js";

const symbolCount = 8;
const symbolSize = 100;
const symbolIndexes = [0, 0, 0];
const spinCount = 8;

const leverCooldown = 6000;

const lever = document.querySelectorAll('.lever')[0];
lever.addEventListener('click', checkSpin);

function spinReel(reel, reelIndex, targetSymbolIndex) {

    // Reel center symbols are at index 1, so we need to adjust the target index
    // to make sure the target symbol is in the center of the reel
    // e.g. if we want to show the first symbol in the center, targetSymbolIndex = 0, so we need to adjust it to -1
    targetSymbolIndex -= 1;

    const spinAmount = (spinCount) * symbolCount * symbolSize + ((targetSymbolIndex - symbolIndexes[reelIndex]) * symbolSize);
    const backgroundPositionY = parseFloat(getComputedStyle(reel).backgroundPositionY);

    const animTime = 5000 + (Math.round(Math.random() * 500) - 250);

    reel.style.transition = `background-position-y ${animTime}ms ease-in-out`;

    const bounceOffset = Math.round(Math.random() * 20);

    reel.style.backgroundPositionY = `${backgroundPositionY - spinAmount - bounceOffset}px`;

    setTimeout(() => {
        reel.style.transition = 'background-position-y 100ms ease-in-out';
        reel.style.backgroundPositionY = `${backgroundPositionY - spinAmount}px`;
    }, animTime);

    symbolIndexes[reelIndex] = targetSymbolIndex;
}

function pullLever() {
    const leverHandle = document.querySelectorAll('.lever > .lever-handle')[0];
    leverHandle.style.transition = 'transform 650ms ease-in-out';
    leverHandle.style.transform = 'translate(-50%, 585%)';
    setTimeout(() => {
        leverHandle.style.transition = 'transform 650ms ease-in-out';
        leverHandle.style.transform = 'translate(-50%, -25%)';
    }, 650);

    lever.style.cursor = 'default';
    lever.removeEventListener('click', checkSpin);

    setTimeout(() => {
            lever.addEventListener('click', checkSpin);
            lever.style.cursor = 'pointer';
    }, leverCooldown);
}

function spinReels(symbolIndexes = [0, 0, 0], balance) {
    pullLever();
    const reels = document.getElementsByClassName('reel');
    [...reels].forEach((reel, index) => {
        setTimeout(() => {
            spinReel(reel, index, symbolIndexes[index]);
        }, index * 250);
    })

    setTimeout(() => {
        updateBalance(balance);
    }, leverCooldown);
}

let betValue = 1;
let balanceValue = 100;

function checkSpin(){
    if(!connected) {
        alert("Servidor desconectado!");
        return;
    }

    if(balanceValue < betValue) {
        alert("Saldo insuficiente!");
        return;
    }

    betRequest(betValue);
}

function upBet() {
    if(betValue < 10) {
        betValue += 1;
    } else if (betValue < 50) {
        betValue += 5;
    } else if (betValue < 100) {
        betValue += 10;
    }

    document.querySelector('.bet-value').innerText = "R$ " + betValue.toFixed(2);
}

function downBet() {
    if(betValue > 10) {
        betValue -= 10;
    } else if (betValue > 5) {
        betValue -= 5;
    } else if (betValue > 1) {
        betValue -= 1;
    }

    document.querySelector('.bet-value').innerText = "R$ " + betValue.toFixed(2);
}

function updateBalance(balance) {
    balanceValue = balance;
    console.log(balanceValue);
    document.querySelector('.credit-value').innerText = "R$ " + parseFloat(balanceValue).toFixed(2);
}

const upBetButton = document.querySelector('.bet-up-button');
upBetButton.addEventListener('click', upBet);

const downBetButton = document.querySelector('.bet-down-button');
downBetButton.addEventListener('click', downBet);

const creditText = document.querySelector('.credit-value');
creditText.innerText = "R$ " + balanceValue.toFixed(2);

const betText = document.querySelector('.bet-value');
betText.innerText = "R$ " + betValue.toFixed(2);

export {spinReels}