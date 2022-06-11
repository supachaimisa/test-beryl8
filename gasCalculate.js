// gasCalculate
// cm => km /100000
class GasCalculate {
    
    constructor(){
        this.cm = 95;
        this.Liter = 13000
    }

    calculate(gasliter){
        try {
            const answer = ((this.Liter*this.cm)*gasliter)/100000
            process.stdout.write(`Distance (${answer} KM)`)
        } catch (error) {
            console.log(error);
        }
        
    }

    // Wheel Mapping
    // - 1 Wheel circumference = 95 cm
    // - 1 Liter = 13000 rounds of Wheel

    // String: Distance (123 KM)
}

module.exports.GasCalculate = GasCalculate