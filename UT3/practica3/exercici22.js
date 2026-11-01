const prompt = require('prompt-sync')();
let num = Number( prompt("Donem un nombnre de l'1 al 7: ") );
switch(num) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5:
      console.log('Dia feiner');
    break; 
    case 6: 
    case 7: 
      console.log('Cap de setmana');
}