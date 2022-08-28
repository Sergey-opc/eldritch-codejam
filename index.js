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
        /*console.log('Индекс рандомной карты №' + i + ' = ' + finalCardIndex[i]);*/
    }
    /*console.log('Массив без рандомных карт = ' + randomCardIndex);*/
    return (finalCardIndex);
}

const showNextCard = document.querySelector('.nextCard');
const curentCard = document.querySelector('.curentCard');
showNextCard.addEventListener('click', showDeck);
function showDeck (){
    let mythDeck = [[[],[],[]],[[],[],[]],[[],[],[]]];
    let stage, color;
        for (let j = 0; j < 3; j++){
            if (j == 0){stage = 'firstStage';}else{if(j == 1){stage = 'secondStage';}else{if(j == 2){stage = 'thirdStage';}}}
            console.log('Stage = ' + stage);
            for (let k = 0; k < 3; k++){
                if (k == 0){color = 'greenCards'}else{if(k == 1){color = 'brownCards'}else{if(k == 2){color = 'blueCards'}}}
                for (let i = 0; i < (AncientsData[ancientID][stage][color]); i++){
                    
                }
                console.log('Color = ' + color);
                /*mythDeck[j][k][i] = */
                console.log('Ola ' + i + '/' + j + '/' + k + '|||' + AncientsData[ancientID][stage][color]);
            }
        }
        /*console.log('Hello!' + mythDeck[1][0][2]);*/
    }
    

const midDif = document.querySelector('.midle');
midDif.addEventListener('click',flexMid);
function flexMid(){
    blueCardsAll = AncientsData[ancientID].firstStage.blueCards + AncientsData[ancientID].secondStage.blueCards + AncientsData[ancientID].thirdStage.blueCards;
    brownCardsAll = AncientsData[ancientID].firstStage.brownCards + AncientsData[ancientID].secondStage.brownCards + AncientsData[ancientID].thirdStage.brownCards;
    greenCardsAll = AncientsData[ancientID].firstStage.greenCards + AncientsData[ancientID].secondStage.greenCards + AncientsData[ancientID].thirdStage.greenCards;
    getDeck(BrownCards.length, brownCardsAll);
    /*console.log('Карты = ' + BrownCards[5].id + ' ' + BrownCards[5].difficulty);*/
}




