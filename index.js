const prompt = require('prompt-sync')();
const mineflayer = require('mineflayer')
function welcomeMessage() {
    console.clear();
    console.log(`
┏━┓┏━┓━━━━━━━━━━━━━━━━━━━━━━━┏━┓━┏┓━━━━━┏━━━┓┏┓━━━━━━━━━━━━━━━━━━━━━━┏━━━┓━━━━━━━━━━┏┓━━━━━━━┏┓━━━━━━━━
┃┃┗┛┃┃━━━━━━━━━━━━━━━━━━━━━━━┃┏┛┏┛┗┓━━━━┃┏━┓┃┃┃━━━━━━━━━━━━━━━━━━━━━━┃┏━┓┃━━━━━━━━━━┃┃━━━━━━┏┛┗┓━━━━━━━
┃┏┓┏┓┃┏┓┏━┓━┏━━┓┏━━┓┏━┓┏━━┓━┏┛┗┓┗┓┏┛━━━━┃┗━┛┃┃┃━┏━━┓━┏┓━┏┓┏━━┓┏━┓━━━━┃┗━━┓┏┓┏┓┏┓┏┓┏┓┃┃━┏━━┓━┗┓┏┛┏━━┓┏━┓
┃┃┃┃┃┃┣┫┃┏┓┓┃┏┓┃┃┏━┛┃┏┛┗━┓┃━┗┓┏┛━┃┃━━━━━┃┏━━┛┃┃━┗━┓┃━┃┃━┃┃┃┏┓┃┃┏┛━━━━┗━━┓┃┣┫┃┗┛┃┃┃┃┃┃┃━┗━┓┃━━┃┃━┃┏┓┃┃┏┛
┃┃┃┃┃┃┃┃┃┃┃┃┃┃━┫┃┗━┓┃┃━┃┗┛┗┓━┃┃━━┃┗┓━━━━┃┃━━━┃┗┓┃┗┛┗┓┃┗━┛┃┃┃━┫┃┃━━━━━┃┗━┛┃┃┃┃┃┃┃┃┗┛┃┃┗┓┃┗┛┗┓━┃┗┓┃┗┛┃┃┃━
┗┛┗┛┗┛┗┛┗┛┗┛┗━━┛┗━━┛┗┛━┗━━━┛━┗┛━━┗━┛━━━━┗┛━━━┗━┛┗━━━┛┗━┓┏┛┗━━┛┗┛━━━━━┗━━━┛┗┛┗┻┻┛┗━━┛┗━┛┗━━━┛━┗━┛┗━━┛┗┛━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┏━┛┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━━BY DAMIEN3000━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┗━━┛━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \n\n`);}
welcomeMessage();

const ip = prompt('What is the ip of the server ?  ');

welcomeMessage();
const nbPlayer = prompt('How many Player do you want ?  ');

welcomeMessage();

console.log(`Starting on ${ip} with ${nbPlayer.tos} players...`)


const nbPlayerint = parseInt(nbPlayer);
const bots = [];

for (let step = 0; step < nbPlayerint; step++) {

    const name = "Player" + step
    const bot = mineflayer.createBot({
        host: ip,
        username: name
    });
    bots.push(bot);

}


welcomeMessage();

console.log(`The Service is sucessfully started ! \n`)
console.log(`(Press Ctrl + C to turn off) \n`)

