const prompt = require('prompt-sync')();
let edat = Number( prompt("Hola! Diguem quina edat tens:") );
(edat < 18) ? console.log('Ets menor d_edat! ') :
  console.log('Ets major d_edat!');