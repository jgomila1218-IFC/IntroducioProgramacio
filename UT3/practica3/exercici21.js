const prompt = require('prompt-sync')();
let num = Number( prompt("Donem un nombnre de l'1 al 7: ") );
switch(num) {
    case 1: 
      console.log('Dilluns.');
    break;
    case 2: 
      console.log('Dimarts.');
    break;
    case 3: 
      console.log('Dimecres.');
    break;
    case 4:
      console.log('Dijous.');
    break;
    case 5:
      console.log('Divendres.');
    break;
    case 6: 
      console.log('Disabte.');
    break;
    case 7: 
      console.log('Diumenge.');
    break;
    default: 
      console.log('Dia no valid.');
}