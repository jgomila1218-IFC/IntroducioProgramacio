const prompt = require('prompt-sync')();
let num1 = Number( prompt('Donem un nombre: '));
let num2 = Number( prompt('Donem un altre nombre: '));
console.log('+, -, *, /')
let oper = String( prompt('Quina operacio vols fer: ') );
if (oper == '+') {
console.log(`El resultat de la suma es ${num1 + num2}`);
} else if (oper == '-') {
console.log(`El resultat de la resta es ${num1 - num2}`);
} else if (oper == '*') {
 console.log(`El resultat de la multiplicacio es ${num1 * num2}`);
} else if (oper == '/') {
  if (num2 == 0){
    console.log('No es pot dividir entre 0');
  } else {
      console.log(`El resultat de la divisio es ${num1 / num2}`);
  } 
} else {
    console.log('Operacio no valida.');
}

