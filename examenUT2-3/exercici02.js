const prompt = require('prompt-sync')();
const PREUHORA = 35;
const IVA = 1.21;
const DESCOMPTECON = (1*((100 - 20)/100));
const RECARREC = 15;

let nomClient = String(prompt("Nom client: ", "Joan"));
let hores = Number(prompt("Hores de ma d'obra: ", 20));
let costPeces = Number(prompt("Cost peces (€): ", 100));
let contrMant = String(prompt("Contractre de manteniment [s/n]: ", "n"));
let urgent = String(prompt("NServei urgent [s/n]: ", "n"));
let maObra
let recarrecFinal
if (contrMant === "s"){
    maObra = (PREUHORA * hores * DESCOMPTECON);
} else {
    maObra = (PREUHORA * hores); 
}
let descContracte = ((PREUHORA * hores) - (maObra));
urgent === "s" ? recarrecFinal = RECARREC : recarrecFinal = 0;  
let IvaMaObra = (maObra * IVA) - (maObra);
let preuFinal = (IVA * (maObra + costPeces + recarrecFinal));

console.log();
console.log("--------- PRESUPOST -----------");
console.log();
console.log(`Client: ${nomClient}`);
console.log(`Ma d\'obra: ${maObra}`);
console.log(`Descompte Cointracte: ${descContracte}`);
console.log(`Peces: ${costPeces}`);
console.log(`Recarrec urgencia: ${recarrecFinal}`);
console.log(`IVA(21%): ${IvaMaObra}`);
console.log(`TOTAL: ${preuFinal}`);

