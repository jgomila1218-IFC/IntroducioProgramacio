const prompt = require('prompt-sync')();
console.log("--------------------- CLASSIFICADOR D\'ADRECES IP ---------------------");
let oct1 = Number(prompt("Donem el primer octet: "));
let oct2 = Number(prompt("Donem el segon octet:  "));
let oct3 = Number(prompt("Donem el tercer octet: "));
let oct4 = Number(prompt("Donem el cuart octet:  "));
let ClasseTip
if (oct1 <= 255 && oct1 >= 0 && oct2 <= 255 && oct2 >= 0 && oct3 <= 255 && oct3 >= 0 && oct4 <= 255 && oct4 >= 0) {
    console.log(`Addreca IP: ${oct1}.${oct2}.${oct3}.${oct4}`);
    if (oct1 >= 1 && oct1 <= 126) {
        ClasseTip = "A";
    } else if (oct1 = 127) {
        ClasseTip = "Loopback";
    } else if (oct1 >= 128 && oct1 <= 191) {
        ClasseTip = "B";
    } else if (oct1 >= 192 && oct1 <= 223) {
        ClasseTip = "C";
    } else if (oct1 >= 224 && oct1 <= 239) {
        ClasseTip = "D, multicast";
    } else if (oct1 >= 240 && oct1 <= 255) {
        ClasseTip = "E, experimental";
    } else if (oct1 === 0) {
        ClasseTip = "Reservada";
    }
    console.log(`L'addresa partany a la Classe ${ClasseTip}`);



} else { console.log('ERROR: No es permeten valors inferiors a 0 o speriors a 255 a cada octet.') }
