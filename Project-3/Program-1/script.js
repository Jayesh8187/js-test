// script.js
const display = document.getElementById('display');
const keys = document.querySelectorAll('.keys button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

keys.forEach((key) => key.addEventListener('click', () => handleKeyClick(key.textContent)));

const handleKeyClick = (keyValue) => {
    if (keyValue === 'C') {
        currentNumber = '';
        previousNumber = '';
        operator = '';
        display.value = '';
    } else if (keyValue === '=') {
        calculate();
    } else if (['+', '-', '*', '/'].includes(keyValue)) {
        operator = keyValue;
        previousNumber = currentNumber;
        currentNumber = '';
    } else if (keyValue === '.') {
        if (!currentNumber.includes('.')) {
            currentNumber += '.';
        }
    } else {
        currentNumber += keyValue;
    }

    display.value = currentNumber.toLocaleString();
};

const calculate = () => {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = currentNumber;
    }

    currentNumber = result.toLocaleString();
    previousNumber = '';
    operator = '';
    display.value = currentNumber;
};