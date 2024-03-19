
function getRandomSymbol() {
    const symbols = [
        '&#x1F347;',
        '&#x1F349;',
        '&#x1F34B;',
        '&#x1F34C;',
        '&#x1F352;',
        '&#x1F34E;',
        '&#x1F34A;',
        '&#x1F48E;'
    ];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function duplicateSymbols(reel, repeatCount) {
    const symbolsContainer = reel.querySelector('.reel-symbols');
    const symbolsHTML = symbolsContainer.innerHTML.repeat(repeatCount);
    symbolsContainer.innerHTML += symbolsHTML;
}

function resetReel(reel) {
    const symbolsContainer = reel.querySelector('.reel-symbols');
    symbolsContainer.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        symbolsContainer.innerHTML += `<div class="symbol">${getRandomSymbol()}</div>`;
    }
}

function spinReel(reel) {
    const repeatCount = 3;

    resetReel(reel);
    duplicateSymbols(reel, repeatCount);

    reel.querySelectorAll('.reel-symbols').forEach(reelSymbols => reelSymbols.classList.remove('spin'));
    void reel.offsetWidth;
    reel.querySelectorAll('.reel-symbols').forEach(reelSymbols => reelSymbols.classList.add('spin'));

    setTimeout(() => {
        reel.querySelectorAll('.reel-symbol').forEach(reelSymbols => reelSymbols.classList.remove('spin'));
        reel.querySelectorAll('.reel-symbol').forEach(reelSymbols => {

        });
    }, 3000);
}

function spinAnimation() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        spinReel(reel);
    });
}


