import AncientsData from './data/ancients.js';
import BrownCards from './data/mythicCards/brown/index.js';

let activeCard;
const azathothPic = document.querySelector('.azathoth');
const cthulhuPic = document.querySelector('.cthulhu');
const iogSothothPic = document.querySelector('.iogSothoth');
const shubNiggurathPic = document.querySelector('.shubNiggurath');
let ancientID;

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

}

const midDif = document.querySelector('.midle');
midDif.addEventListener('click',flexMid);
function flexMid(){
    let blueCardsAll = AncientsData[ancientID].firstStage.blueCards + AncientsData[ancientID].secondStage.blueCards + AncientsData[ancientID].thirdStage.blueCards;
    let brownCardsAll = AncientsData[ancientID].firstStage.brownCards + AncientsData[ancientID].secondStage.brownCards + AncientsData[ancientID].thirdStage.brownCards;
    let greenCardsAll = AncientsData[ancientID].firstStage.greenCards + AncientsData[ancientID].secondStage.greenCards + AncientsData[ancientID].thirdStage.greenCards;
    getDeck(BrownCards.length, 3); /*brownCardsAll = 3*/
    console.log('Карты = ' + BrownCards[5].id + ' ' + BrownCards[5].difficulty);
}