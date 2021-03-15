const {
    expect,
    beforeEach
} = require('@jest/globals');
import Calculator from '../js/Calculator';
let calculator;


describe('Calculator Basic Functionality', () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    it('Delete', () => {
        calculator.currentState = '25';
        calculator.delete();
        expect(calculator.currentState).toBe('2');
    });
    it('Append', () => {
        calculator.currentState = '23';
        calculator.append('5');
        expect(calculator.currentState).toBe('235');
    });

    it('Add', () => {
        calculator.append('100');
        calculator.select('+');
        calculator.append('20');
        calculator.getResult()
        expect(calculator.currentState).toBe(120);
    });
    it('Multiply', () => {
        calculator.append('20');
        calculator.select('*');
        calculator.append('5');
        calculator.getResult()
        expect(calculator.currentState).toBe(100);
    });
    it('Divide', () => {
        calculator.append('100');
        calculator.select('/');
        calculator.append('5');
        calculator.getResult()
        expect(calculator.currentState).toBe(20);
    });
    it('Subtraction', () => {
        calculator.append('100');
        calculator.select('-');
        calculator.append('6');
        calculator.getResult()
        expect(calculator.currentState).toBe(94);
    });
    it('Clear', () => {
        calculator.append('123');
        calculator.select('-');
        calculator.append('23');
        calculator.clear()
        expect(calculator.currentState).toBe('');
    });
})

describe("'Add' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['2', '+', '2', 4], ['200', '+', '2', 202], ['0', '+', '0', 0]];
    test.each(cases)(
        "given %p  %p and %p as arguments, returns %p",
        (firstArg, secondArg, thirdArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.select(secondArg);
            calculator.append(thirdArg);
            calculator.getResult()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Subtract' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['2', '-', '2', 0], ['200', '-', '2', 198], ['0', '-', '0', 0]];
    test.each(cases)(
        "given %p  %p and %p as arguments, returns %p",
        (firstArg, secondArg, thirdArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.select(secondArg);
            calculator.append(thirdArg);
            calculator.getResult()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Multiply' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['20', '*', '2', 40], ['200', '*', '2', 400], ['0', '*', '0', 0]];
    test.each(cases)(
        "given %p  %p and %p as arguments, returns %p",
        (firstArg, secondArg, thirdArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.select(secondArg);
            calculator.append(thirdArg);
            calculator.getResult()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Divide' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['2', '/', '2', 1], ['200', '/', '2', 100], ['0', '/', '0', "Error"]];
    test.each(cases)(
        "given %p  %p and %p as arguments, returns %p",
        (firstArg, secondArg, thirdArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.select(secondArg);
            calculator.append(thirdArg);
            calculator.getResult()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Clear' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['2', ''], ['200', ''], ['0', '']];
    test.each(cases)(
        "given %p  as arguments, returns %p",
        (firstArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.getResult()
            calculator.clear()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Delete' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['23', '2'], ['12345678', '1234567'], ['12', '1']];
    test.each(cases)(
        "given %p  as arguments, returns %p",
        (firstArg, expectedResult) => {
            calculator.append(firstArg);
            calculator.delete()
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});

describe("'Append' functionality", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })
    const cases = [['23', '2', '232'], ['12', '3', '123'], ['1', '5', '15']];
    test.each(cases)(
        "given %p and  %p as arguments, returns %p",
        (firstArg, secondArg, expectedResult) => {
            calculator.currentState = firstArg;
            calculator.append(secondArg);
            expect(calculator.currentState).toEqual(expectedResult);
        }
    );
});