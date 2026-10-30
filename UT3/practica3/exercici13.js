const prompt = require('prompt-sync')();
let talla = Number( prompt('Domen el nombre de la teva talla: ') );
if (talla == 1) {
  console.log('Talla XS');
} else if (talla == 2 ) {
  console.log('Talla S');
} else if (talla == 3) {
  console.log('Talla M');
} else if (talla == 4) {
  console.log('Talla L');
} else {
  console.log('Talla no disponible');
}