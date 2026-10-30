const prompt = require('prompt-sync')();
let temp = Number( prompt('Quina temperatura fa?') );
(temp < 10) ? console.log('Fa fred') :
(10 <= temp && temp < 25) ? console.log('Temperatura moderada') : 
(25 < temp) ? console.log('Fa calor') :
''; 