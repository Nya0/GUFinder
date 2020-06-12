const request = require('request');
const fs = require('fs');
const chalk = require('chalk');
fs.writeFileSync('available.txt', '');

255,0,0
console.log(chalk.hex('#00FFB3')('Made with') + chalk.red(' <3 ') + chalk.hex('#00FFB3')('By Nya0'));
console.log('');
console.log('');
console.log(chalk.rgb(255,0,0)('All available usernames will go to available.txt'));
console.log('');
function checkName(name) {
    request.get('https://github.com/' + name, (err, res, body) => {
        if (!res || !res.statusCode) return arguments.callee.apply(this, arguments);

        switch (res.statusCode) {
            case 404: // available
                console.log('available --> %s', name);
                fs.appendFileSync('available.txt', name + ',');
                break;

            default:
                arguments.callee.apply(this, arguments);
                break;
        }
    });
}

let chars = 'abcdefghijklmnopqrstuvwxyz';
let names = [];

for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
        for (let f = 0; f < chars.length; f++) {
            for (let n = 0; n < chars.length; n++) {
                names.push(chars[i] + chars[j] + chars[f] + chars[n]);
        } 
    }
 }
}
let i = 0;
let int = setInterval(() => {
    if (i > names.length) return clearInterval(int);
    var name = names[i++];
    checkName(name);
});
