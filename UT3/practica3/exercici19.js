const prompt = require('prompt-sync')();
let num = Number( prompt('Donem un nombnre: ') );
(num >= 1 && num <= 100) ? console.log('Nombre valid') :
console.log('nombre no valid');