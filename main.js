const displayPrev = document.querySelector('.display-previous');
const displayResult = document.querySelector('.display-result');
const numbers = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]');
const equal = document.querySelector('.equal');
const allclear = document.querySelector('.all-clear');
const deletelast = document.querySelector('.delete');

let disPrev = null;
let disRes = '';
let lastOperation = '';
let dot = false;

numbers.forEach( number => {
    number.addEventListener('click', (e) => {
        if( e.target.innerText === '.' && !dot ) {
            dot = true;
        }
        else if(e.target.innerText === '.' && dot) {
            return;
        }
        disRes += e.target.innerText;
        displayResult.innerText = disRes;
    });
});

operaters.forEach( operater => {
    operater.addEventListener('click', (e) => {
        if(!disRes) disPrev;
        dot = false;
        const operaterName = e.target.innerText;
        if(disPrev && lastOperation) {
            mathOperation();
        }
        else{
            disRes = parseFloat(disPrev);
        }
    });
}); 