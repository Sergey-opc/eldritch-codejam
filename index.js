import AncientsData from './data/ancients.js';

import BrownCards from './data/mythicCards/brown/index.js';
import BlueCards from './data/mythicCards/blue/index.js';
import GreenCards from './data/mythicCards/green/index.js';

let activeCard;
const azathothPic = document.querySelector('.azathoth');
const cthulhuPic = document.querySelector('.cthulhu');
const iogSothothPic = document.querySelector('.iogSothoth');
const shubNiggurathPic = document.querySelector('.shubNiggurath');
let ancientID;
let brownCardsAll;
let blueCardsAll;
let greenCardsAll;
let mythDeck = [[[], [], []], [[], [], []], [[], [], []]];
let activeStage = 0;

azathothPic.addEventListener('click', azathoth);
function azathoth() {
    if (activeCard) {
        activeCard.classList.remove('activeCard');
    }
    activeCard = azathothPic;
    ancientID = 0;
    active();
}

cthulhuPic.addEventListener('click', cthulhu);
function cthulhu() {
    if (activeCard) {
        activeCard.classList.remove('activeCard');
    }
    activeCard = cthulhuPic;
    ancientID = 1;
    active();
}

iogSothothPic.addEventListener('click', iogSothoth);
function iogSothoth() {
    if (activeCard) {
        activeCard.classList.remove('activeCard');
    }
    activeCard = iogSothothPic;
    ancientID = 2;
    active();
}
shubNiggurathPic.addEventListener('click', shubNiggurath);
function shubNiggurath() {
    if (activeCard) {
        activeCard.classList.remove('activeCard');
    }
    activeCard = shubNiggurathPic;
    ancientID = 3;
    active();
}

function active() {
    activeCard.classList.add('activeCard');
}

function getDeck(colorCardsDeck, amount) {
    let randomCardIndex = [];
    let finalCardIndex = [];
    for (let n = 0; n < colorCardsDeck; n++) {
        randomCardIndex[n] = n;
    }
    for (let i = 0; i < amount; i++) {
        finalCardIndex[i] = randomCardIndex.splice((Math.floor(Math.random() * (colorCardsDeck - i))), 1);
        /*console.log('Индекс рандомной карты №' + i + ' = ' + finalCardIndex[i]);*/
    }
    /*console.log('Массив без рандомных карт = ' + randomCardIndex);*/
    return (finalCardIndex);
}

const mixDeck = document.querySelector('.deckMix')
mixDeck.addEventListener('click', showDeck);
function showDeck() {
    activeStage = 0;
    let stage = '';
    let passingCardsGreen = getDeck(GreenCards.length, greenCardsAll);
    let passingCardsBrown = getDeck(BrownCards.length, brownCardsAll);
    let passingCardsBlue = getDeck(BlueCards.length, blueCardsAll);
    for (let j = 0; j < 3; j++) {
        if (j == 0) { stage = 'firstStage'; } else { if (j == 1) { stage = 'secondStage'; } else { if (j == 2) { stage = 'thirdStage'; } } }
        for (let k = 0; k < 3; k++) {
            if (k == 0) {
                for (let i = 0; i < (AncientsData[ancientID][stage].greenCards); i++) {
                    mythDeck[j][k][i] = passingCardsGreen[i];
                }
                passingCardsGreen.splice(0, (AncientsData[ancientID][stage].greenCards));
            }
            else {
                if (k == 1) {
                    for (let i = 0; i < (AncientsData[ancientID][stage].brownCards); i++) {
                        mythDeck[j][k][i] = passingCardsBrown[i];
                    }
                    passingCardsBrown.splice(0, (AncientsData[ancientID][stage].brownCards));
                }
                else {
                    if (k == 2) {
                        for (let i = 0; i < (AncientsData[ancientID][stage].blueCards); i++) {
                            mythDeck[j][k][i] = passingCardsBlue[i];
                        }
                        passingCardsBlue.splice(0, (AncientsData[ancientID][stage].blueCards))
                    }
                }
            }
        }
    }
    console.log('Ок');
}

function randomCard() {
    let rCard = Math.floor(Math.random() * 3);
    return (rCard);
}

function getIageOfRandomCard(activeStage){
    let rCard, indexOfCard, imgSrc;
    do {
        rCard = randomCard();
    } while (mythDeck[activeStage][rCard][0] == undefined)
    if (rCard == 0) {
        indexOfCard = mythDeck[activeStage][rCard].splice(0, 1);
        imgSrc = GreenCards[[indexOfCard]].cardFace;
    }
    else {
        if (rCard == 1) {
            indexOfCard = mythDeck[activeStage][rCard].splice(0, 1);
            imgSrc = BrownCards[[indexOfCard]].cardFace;
        }
        else {
            if (rCard == 2) {
                indexOfCard = mythDeck[activeStage][rCard].splice(0, 1);
                imgSrc = BlueCards[[indexOfCard]].cardFace;
            }
        }
    }
    return (imgSrc);
}


const showNextCard = document.querySelector('.nextCard');
const curentCard = document.querySelector('.curentCard');
showNextCard.addEventListener('click', showCard);
function showCard() {
    if (activeStage == 0 && (mythDeck[0][0].length != 0 || mythDeck[0][1].length != 0 || mythDeck[0][2].length != 0)) {
        curentCard.src = getIageOfRandomCard(activeStage);
        console.log('Актив стейдж = ' + activeStage);
    }else{activeStage = 1;
    if (activeStage == 1 && (mythDeck[1][0].length != 0 || mythDeck[1][1].length != 0 || mythDeck[1][2].length != 0)){
        curentCard.src = getIageOfRandomCard(activeStage);
        console.log('Актив стейдж = ' + activeStage);
    }else{activeStage = 2;
    if (activeStage == 2 && (mythDeck[2][0].length != 0 || mythDeck[2][1].length != 0 || mythDeck[2][2].length != 0)){
        curentCard.src = getIageOfRandomCard(activeStage);
        console.log('Актив стейдж = ' + activeStage);
    }else{curentCard.src = '';
            activeStage == 0;}}}
    /*else{if(activeStage == 1){stage = 'secondStage';}else{if(activeStage == 2){stage = 'thirdStage';}}}*/
}


const midDif = document.querySelector('.midle');
midDif.addEventListener('click', flexMid);
function flexMid() {
    blueCardsAll = AncientsData[ancientID].firstStage.blueCards + AncientsData[ancientID].secondStage.blueCards + AncientsData[ancientID].thirdStage.blueCards;
    brownCardsAll = AncientsData[ancientID].firstStage.brownCards + AncientsData[ancientID].secondStage.brownCards + AncientsData[ancientID].thirdStage.brownCards;
    greenCardsAll = AncientsData[ancientID].firstStage.greenCards + AncientsData[ancientID].secondStage.greenCards + AncientsData[ancientID].thirdStage.greenCards;
    getDeck(BrownCards.length, brownCardsAll);
    /*console.log('Карты = ' + BrownCards[5].id + ' ' + BrownCards[5].difficulty);*/
}


