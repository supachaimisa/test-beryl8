class ChangeCurrency {
    
    constructor(){
      this.THB = 0 
    }
    setTHB(THB){
        this.THB = THB
    }
    setCurrency(currency){
        this.currency = currency
    }
    compareCurrency(){
        try {
            let answer = 0
            let strCurrency = ''
            switch (this.currency) {
                case 'WON':
                    const won = 33.72
                    answer = this.THB*won
                    strCurrency = 'WON'
                    break;
                case 'USD':
                    const usd = 0.028
                    answer = this.THB*usd
                    strCurrency = 'USD'
                    break;
                case 'YEN':
                    const yen = 3.4
                    answer = this.THB*yen
                    strCurrency = 'YEN'
                    break;
            
                default:
                    break;
            }
            process.stdout.write(`Number of converted (${this.formatNumber(answer)} ${strCurrency})`)
        } catch (error) {
            console.log(error);
        }
        // Currency Mapping
        // - 1 THB = 33.72 WON
        // - 1 THB = 0.028 USD
        // - 1 THB = 3.4 YEN

    }
    formatNumber(_d) {
        const d = Intl.NumberFormat('en-US')
        return d.format(_d)
    }
}

module.exports.ChangeCurrency = ChangeCurrency