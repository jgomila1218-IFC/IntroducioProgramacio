const prompt = require('prompt-sync')();
let edat = Number( prompt('Quina edat tens?') );
let estudiant = prompt('Ets estudant? [si/no] ');
if (edat < 18 || edat > 65 || estudiant == 'si') {
    console.log('Tens descompe!!');
} else {
    console.log('Preu normal!!');
}