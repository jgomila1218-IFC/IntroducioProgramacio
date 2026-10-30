const prompt = require('prompt-sync')();
let num = Number( prompt('Donem un nombre: ') );
if (num == 7) {
    console.log('Has endevinat el nombre!');
} else {
    console.log('No has encertat. Torna-ho a provar');
}