const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = (Number(input[0]));
    
    for(let line= 1;line <= n; line++){
        let star = "";
        for(let cnt = 0;cnt < line;cnt++){
            star += "*";
        }
        console.log(star);
    }
});