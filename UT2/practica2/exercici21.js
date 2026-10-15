const prompt = require('prompt-sync')();
let nom = prompt ("Com et diuen? ");
let edat = Number ( prompt("Cuants d'anys tens?"));
let Sedat = (edat + 1);
console.log(`Hola ${nom}! Tens ${edat} anys.`);
console.log(`Lany que ve en tendras ${Sedat}`);