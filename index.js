import AncientsData from './data/ancients.js'

let activeCard;
const azathothPic = document.querySelector('.azathoth');
console.log('1');

azathothPic.addEventListener('click', azathoth);
function azathoth (){
    activeCard = azathothPic;
    active();
    console.log('2');
}

function active(){
    activeCard.classList.add('activeCard');
    console.log('3');
}