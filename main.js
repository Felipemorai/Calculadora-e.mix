const previousDisplay = document.querySelector('.display-previous');
const resultDisplay = document.querySelector('.display-result');
const numbers = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all-clear');
const deleteLast = document.querySelector('.delete');

class Calculator {
    constructor(previousDisplay, resultDisplay) {
        this.previousDisplay = previousDisplay;
        this.resultDisplay = resultDisplay;
    }

    clear() {
        this.previousDisplay = '';
        this.resultDisplay = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousDisplay = this.previousDisplay;
        this.resultDisplay = this.resultDisplay;
    }
}

const calculator = new Calculator(
    previousDisplay,
    resultDisplay
);

allClear.addEventListener('click', () => {
    this.clear();
})