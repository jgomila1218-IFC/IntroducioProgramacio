const prompt = require('prompt-sync')();
let ClasseTip
console.log("--------------------- CLASSIFICADOR D\'ADRECES IP ---------------------");
let oct1 = Number(prompt("Donem el primer octet: "));
let oct2 = Number(prompt("Donem el segon octet:  "));
let oct3 = Number(prompt("Donem el tercer octet: "));
let oct4 = Number(prompt("Donem el cuart octet:  "));
let Voct1 = (oct1 <= 255 && oct1 >= 0); 
let Voct2 = (oct2 <= 255 && oct2 >= 0);
let Voct3 = (oct3 <= 255 && oct3 >= 0);
let Voct4 = (oct4 <= 255 && oct4 >= 0); 
let Valit = (Voct1 == true && Voct2 == true && Voct3 == true && Voct4 == true); 
let IPsencera = (`${oct1}.${oct2}.${oct3}.${oct4}`);
Voct1 = Number.isInteger(oct1);
Voct2 = Number.isInteger(oct2);
Voct3 = Number.isInteger(oct3);
Voct4 = Number.isInteger(oct4);
let enter = (Voct1 == true && Voct2 == true && Voct3 == true && Voct4 == true);

console.log();
console.log("------------------------------------------------------------------------");
console.log();

if (oct1 == 169 && oct2 == 254) {
    console.log("        ALERTA!! La teva adreca es una APIPA! Revisa el DHCP");
    console.log();
    console.log("------------------------------------------------------------------------");
    console.log();
}

if (Valit == true) {
    if (enter == true){
        console.log(`Addreca IP completa: ${IPsencera}`);

        if (oct1 >= 1 && oct1 <= 126) {
            ClasseTip = "A";
        } else if (oct1 === 127) {
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
        console.log(`Adreca de clase ${ClasseTip}`);

        switch(ClasseTip) {
        case "A": 
          console.log('Mascara per defecte: 255.0.0.0');
        break;
        case "B": 
          console.log('Mascara per defecte: 255.255.0.0');
        break;
        case "C": 
          console.log('Mascara per defecte: 255.255.255.0');
        break;
        default:
          console.log('Les masqueres de tipus D i E, ames de les addresses especials no tenen una mascara per defecte');
        }
    
         (oct1 === 10 || oct1 === 172 || oct1 === 192) ? console.log("Tipus d'adreca: Privada"):
            console.log("Tipus d'adreca: Publica");
    } else {
        console.log('ERROR!! els nombres han de ser enters');
    }
} else { 
    console.log('ERROR: No es permeten valors inferiors a 0 o speriors a 255 a cada octet.') 
}