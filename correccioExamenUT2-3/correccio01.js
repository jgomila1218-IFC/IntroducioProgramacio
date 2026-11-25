const prompt = require('prompt-sync')();
const NOMEMPRESA = "NetLlevant";                
const ANYACTUAL = 2026;             
let nomEquip
let ramEquip
let discEquip
let anyCompraEquip
let garantiaEquip 
let ipEquip //ha de quedar undefinied

nomEquip = String( prompt("Com es diu l'equip? ", "Equip 1"));
ramEquip = Number( prompt("Cuanta de RAM te l'equip? GB ", 4));
discEquip = Number(prompt("De cuant es el disc de l'equip? GB ", 60));
anyCompraEquip = Number(prompt("Any de compra: ", 2015));
garantiaEquip = prompt("Esta en garantia [s/n]? ", "n"); //havia de demanar si/no en lloc de s/n (No ha baixat la nota)

garantiaEquip === "s" ? garantiaEquip = true : garantiaEquip = false;

let ramEquipMb = (ramEquip * 1024)
let discEquipTb = (discEquip / 1024)
let anticEquip = (ANYACTUAL - anyCompraEquip)
//ipEquip = Number("10.20.11.0"); //aquesta linea sobra
console.log()
console.log("===== NetLlevant ·  INVENTARI ======"); //console.log(`===== ${NOMEMPRESA} ·  INVENTARI ======`);
console.log(`Equip: ${nomEquip}`);
console.log(`RAM: ${ramEquip}GB ${ramEquipMb}MB`);
console.log(`Discx: ${discEquip}GB ${discEquipTb}TB`);
console.log(`Antiguitat: ${anticEquip}`); //console.log(`Antiguitat: ${anticEquip} anys`); 
console.log(`En garantia: ${garantiaEquip}`);

console.log();
console.log("------------- TIPUS DE DADES --------------");

console.log(`nomEquip: ${typeof(nomEquip)}`);
console.log(`ramEquip: ${typeof(ramEquip)}`);
console.log(`ramEquipMb: ${typeof(ramEquipMb)}`);
console.log(`discEquip: ${typeof(discEquip)}`);
console.log(`discEquipTb: ${typeof(discEquipTb)}`);
console.log(`anticEquip: ${typeof(anticEquip)}`);
console.log(`garantiaEquip: ${typeof(garantiaEquip)}`);
console.log(`ipEquip: ${typeof(ipEquip)}`); //donara undefinied
//console.log(`ipEquip: ${typeof(nomEquip)}`); //aquesta linea sobra

