const previousDisplayText = document.querySelector('.display-previous');
const resultDisplayText = document.querySelector('.display-result');
const numberButtons = document.querySelectorAll('[id*=key]');
const operatersButtons = document.querySelectorAll('[id*=operater]');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all-clear');
const deleteLast = document.querySelector('.delete');

class Calculator {
    constructor(previousDisplayText, resultDisplayText) {
        this.previousDisplayText = previousDisplayText;
        this.resultDisplayText = resultDisplayText;
        this.clear();
    }

    calculate() {
        let result;

        const previousDisplayFloat = parseFloat(this.previousDisplay);
        const resultDisplayFloat = parseFloat(this.resultDisplay);

        if (isNaN(previousDisplayFloat) || isNaN(resultDisplayFloat)) return;

        switch (this.operaters) {
            case '+':
                result = previousDisplayFloat + resultDisplayFloat;
                break;
            case '-':
                result = previousDisplayFloat - resultDisplayFloat;
                break;
            case '÷':
                result = previousDisplayFloat / resultDisplayFloat;
                break;
            case 'x':
                result = previousDisplayFloat * resultDisplayFloat;
                break;
            default:
              return;
        }
    }

    chooseOperation(operaters) {
        if (this.previousDisplay != '') {
            this.calculate()
        }

        this.operaters = operaters;

        this.previousDisplay = this.resultDisplay;
        this.resultDisplay = '';
    }

    appendNumber(number) {
        if (this.resultDisplay.includes('.') && number === '.') return;

        this.resultDisplay = `${this.resultDisplay}${number.toString()}`;
    }

    clear() {
        this.previousDisplay = '';
        this.resultDisplay = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousDisplayText.innerText = `${this.previousDisplay} ${this.operaters || ""}`;
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

for (const operatersButton of operatersButtons) {
    operatersButton.addEventListener('click', () => {
        calculator.chooseOperation(operatersButton.innerText);
        calculator.updateDisplay();
    })
}

allClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});