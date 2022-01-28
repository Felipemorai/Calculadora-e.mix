const previousDisplayText = document.querySelector('.display-previous');
const resultDisplayText = document.querySelector('.display-result');
const numberButtons = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all-clear');
const deleteLast = document.querySelector('.delete');

class Calculator {
    constructor(previousDisplayText, resultDisplayText) {
        this.previousDisplayText = previousDisplayText;
        this.resultDisplayText = resultDisplayText;
    }

    appendNumber(number) {
        this.resultDisplay = `${this.resultDisplay}${number.toString()}`;
    }

    clear() {
        this.previousDisplay = '';
        this.resultDisplay = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousDisplayText.innerText = this.previousDisplay;
        this.resultDisplayText.innerText = this.resultDisplay;
    }
}

const calculator = new Calculator(
    previousDisplayText,
    resultDisplayText
);

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    });
}

allClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});