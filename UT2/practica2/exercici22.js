const prompt = require('prompt-sync')();  
console.log("Hola, som una calculadora. Nem a operar amb dos nombres.");
let num1 = Number( prompt("Donem el nombre numero 1: "));
let num2 = Number( prompt("Donem el nombre numero 2: "));
console.log("------------------------------------------");
console.log(`Aquesta es la suma: ${num1 + num2}`);
console.log(`Aquesta es la resta: ${num1 - num2}`);
console.log(`Aquesta es la multiplicacio: ${num1 * num2}`);
console.log(`Aquesta es la divisio: ${num1 / num2}`);