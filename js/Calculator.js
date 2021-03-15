export default class Calculator {
    constructor() {
        this.clear();
    }
    append(num) {
        if (num === '.' && this.currentState.includes('.')) return
        this.currentState = this.currentState.toString() === "Error" ? num.toString() : this.currentState.toString() + num.toString();
    }

    delete() {
        if (this.currentState != undefined) {
            this.currentState = this.currentState.toString().slice(0, -1);
        }

    }

    select(operation) {
        if (this.currentState === "Error") {
            this.currentState = ''
            return
        }
        if (this.currentState === '') {
            if (operation == '-') {
                this.isNegative = true
                return
            } else return
        }
        if (this.previousState !== '' || this.isNegative) {
            this.getResult()
        }
        this.isNegative = false
        this.operation = operation
        this.previousState = this.currentState
        this.currentState = ''
    }

    calculate() {
        let result
        const prev = isNaN(parseFloat(this.previousState)) ? 0 : parseFloat(this.previousState);
        const curr = parseFloat(this.currentState)
        if (this.operation == undefined && prev == 0 && this.isNegative) {
            this.operation = '-'
        }
        if (isNaN(prev) || isNaN(curr)) return
        var results = {
            '+': function () {
                result = prev + curr;
            },
            '-': function () {
                result = prev - curr;
            },
            '*': function () {
                result = prev * curr;
            },
            '/': function () {
                if (curr == 0) result = "Error";
                else result = prev / curr;
            }, undefined: function () {

                result = 0;
            }
        }
        results[this.operation]();
        return result;
    }

    getResult() {
        this.currentState = this.calculate();
        this.operation = undefined
        this.previousState = ''
    }

    clear() {
        this.currentState = '';
        this.previousState = '';
        this.operation = undefined;
        this.isNegative = false;
    }
}
export var __useDefault = true;