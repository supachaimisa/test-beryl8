class DrawChristmastree {
    
    constructor(){
        
    }
    writePylamid(n){
        let k = 0
        for (let i = 1; i <= n-1; i++, k = 0) {
            for (let j = 1; j <= n-i; j++) {
                process.stdout.write("  ")
            }
            while (k != 2 * i - 1) {
                process.stdout.write("* ")
                ++k
            }
            console.log('');
            
        }
        this.writePylamidBase(n);
    }
    writePylamidBase(n){
        let k = 0
        for (let i = 1; i <= 2; i++, k = 0) {
            for (let j = 1; j <= n-i; j++) {
                process.stdout.write("  ")
            }
            while (k != 2 * i - 1) {
                process.stdout.write("* ")
                ++k
            }
            console.log('');
        }
    }
}

module.exports.DrawChristmastree = DrawChristmastree