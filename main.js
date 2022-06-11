const readline = require('readline');
const { DrawChristmastree } = require('./drawChristmastree') ; 
const { ChangeCurrency } = require('./changeCurrency') ; 
const { GasCalculate } = require('./gasCalculate') ; 
const draw = new DrawChristmastree()
const currency = new ChangeCurrency()
const gasCalculate = new GasCalculate()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function readLineDrawChristmasTree() {
    return new Promise((resolve) => {
        rl.question(`Draw your Christmas tree with height? `, (height) => {
            draw.writePylamid(height)
            resolve()
        });
    }) 
}

function readLineChangeCurrency1() {
    return new Promise((resolve) => {
        rl.question(`Press enter number on THB `, (input) => {
            currency.setTHB(input)
            resolve()
        });
    }) 
}
function readLineChangeCurrency2() {
    return new Promise((resolve) => {
        rl.question(`Press enter Currency [ WON, USD, YEN ] `, (input) => {
            currency.setCurrency(input)
            currency.compareCurrency()
            resolve()
        });
    }) 
}
function readLinegasCalculate() {
    return new Promise((resolve) => {
        rl.question(`Press enter Number: Gas Liter `, (input) => {
            gasCalculate.calculate(input)
            resolve()
        });
    }) 
}


function main(){
    const softwareList = `
    1 . Draw your Christmas tree
    2 . Change currency
    3 . Calculate distance from gas
    Plese select a software . 
    `
    rl.question(`${softwareList}`,async (selected) => {
        switch (selected) {
            case '1':
                await readLineDrawChristmasTree()
                break;
            case '2':
                await readLineChangeCurrency1()
                await readLineChangeCurrency2()
                break;
            case '3':
                await readLinegasCalculate()
                break;
            default:
                break;
        }
    });
}
main()