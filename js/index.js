import Calculator from './Calculator.js';

const calculator = document.getElementById('calculator');
const numbers = document.querySelectorAll("[id='number']");
const operations = document.querySelectorAll("[id='operation']");
const previousState = document.getElementById('display1');
const currentState = document.getElementById('display2');
const deletenumber = document.getElementById('delete');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const calculate = new Calculator();



calculator.addEventListener("keyup", function (event) {

    if (event.keyCode >= 48 && event.keyCode <= 59) {
        calculate.append(event.keyCode - 48);
        update();
    } else if (event.keyCode == 190) {
        calculate.append('.');
        update();
    }
})

operations.forEach(button => {
    button.addEventListener('click', () => {
        calculate.select(button.innerText)
        update();
    })
})

deletenumber.addEventListener('click', () => {

    calculate.delete();
    update();
})

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculate.append(button.innerText)
        update();

    })
})

clear.addEventListener('click', () => {

    calculate.clear();
    update();
})

equal.addEventListener('click', () => {

    calculate.getResult()
    update()
})

const update = function () {
    currentState.innerText = calculate.currentState;
    if (calculate.operation != null) {
        previousState.innerText = calculate.previousState + ' ' + calculate.operation;
    } else {
        previousState.innerText = ''
    }
}