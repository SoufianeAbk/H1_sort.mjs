import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


const getallen = [10, 3, 5, 8, 1, 9, 4, 7, 6, 2];

// Sorteer de array van groot naar klein
getallen.sort((a, b) => b - a);

console.log(getallen);
 

process.exit()