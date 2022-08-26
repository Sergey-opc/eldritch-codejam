import AncientsData from './data/ancients.js';
import BrownCards from './data/mythicCards/brown/index.js';

let activeCard;
const azathothPic = document.querySelector('.azathoth');
const cthulhuPic = document.querySelector('.cthulhu');
const iogSothothPic = document.querySelector('.iogSothoth');
const shubNiggurathPic = document.querySelector('.shubNiggurath');
let ancientID;
let brownCardsAll;
let blueCardsAll;
let greenCardsAll;

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

function getDeck(colorCardsDeck, amount){
    let randomCardIndex = [];
    let finalCardIndex = [];
    for(let n = 0; n < colorCardsDeck; n++){
        randomCardIndex [n] = n;
    }
    for (let  i = 0; i < amount; i++){
        finalCardIndex[i] = randomCardIndex.splice((Math.floor(Math.random() * (colorCardsDeck-i))), 1 );
        console.log('Индекс рандомной карты №' + i + ' = ' + finalCardIndex[i]);
    }
    console.log('Массив без рандомных карт = ' + randomCardIndex);
    return (finalCardIndex);
}

const showNextCard = document.querySelector('.nextCard');
showNextCard.addEventListener('click', showDeck);
function showDeck (){
    console.log('Hello!');
}

const midDif = document.querySelector('.midle');
midDif.addEventListener('click',flexMid);
function flexMid(){
    blueCardsAll = AncientsData[ancientID].firstStage.blueCards + AncientsData[ancientID].secondStage.blueCards + AncientsData[ancientID].thirdStage.blueCards;
    brownCardsAll = AncientsData[ancientID].firstStage.brownCards + AncientsData[ancientID].secondStage.brownCards + AncientsData[ancientID].thirdStage.brownCards;
    greenCardsAll = AncientsData[ancientID].firstStage.greenCards + AncientsData[ancientID].secondStage.greenCards + AncientsData[ancientID].thirdStage.greenCards;
    getDeck(BrownCards.length, brownCardsAll);
    console.log('Карты = ' + BrownCards[5].id + ' ' + BrownCards[5].difficulty);
}




