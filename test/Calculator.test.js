const Calculator = require('../src/Calculator') //since we export as a module, we do not need the file extension

describe('The calculator', () => {
    it('initializes with 0', () => {

        let calculator = new Calculator()
        
        expect(calculator.getValue()).toEqual(0);
    })


    
})





