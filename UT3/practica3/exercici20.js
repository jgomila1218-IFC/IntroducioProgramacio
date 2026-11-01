const prompt = require('prompt-sync')();
let edat = Number( prompt('Quina edat tens?') );
let entrada = prompt('Tens entrada? [si/no] ');
if (edat < 18 && entrada == 'si') {
    console.log('Acces permes!!');
} else {
    console.log('Acvces denegat!!');
}