const prompt = require('prompt-sync')();
let ClasseTip //Tipus de classe
console.log("--------------------- CLASSIFICADOR D\'ADRECES IP ---------------------");
let IPsencera = String(prompt("Donem l'adressa IP: "));
let SpIP = IPsencera.split("."); //Split IP
let oct1 = Number(SpIP[0]); //Octet 1
let oct2 = Number(SpIP[1]); //Octet 2
let oct3 = Number(SpIP[2]); //Octet 3
let oct4 = Number(SpIP[3]); //Octet 4

let Voct1 = (oct1 <= 255 && oct1 >= 0); //Validació de l'octet 1 
let Voct2 = (oct2 <= 255 && oct2 >= 0); //Validació de l'octet 2
let Voct3 = (oct3 <= 255 && oct3 >= 0); //Validació de l'octet 3
let Voct4 = (oct4 <= 255 && oct4 >= 0); //Validació de l'octet 4
let Valit = (Voct1 == true && Voct2 == true && Voct3 == true && Voct4 == true); //Validació de tots els octets si son entre 0 i 255
Voct1 = Number.isInteger(oct1); //Comprovació de si l'octet 1 es un nombre sencer
Voct2 = Number.isInteger(oct2); //Comprovació de si l'octet 2 es un nombre sencer
Voct3 = Number.isInteger(oct3); //Comprovació de si l'octet 3 es un nombre sencer
Voct4 = Number.isInteger(oct4); //Comprovació de si l'octet 4 es un nombre sencer
let enter = (Voct1 == true && Voct2 == true && Voct3 == true && Voct4 == true); //validacio de si tots els octets son enters

console.log();
console.log("------------------------------------------------------------------------");
console.log();

if (oct1 == 169 && oct2 == 254) { //Comprovació de si la IP es una APIPA
    console.log("        ALERTA!! La teva adreca es una APIPA! Revisa el DHCP"); //advertencia si ho es
    console.log();
    console.log("------------------------------------------------------------------------");
    console.log();
}

if (Valit == true) { //Es segueix si els octets estan entre 0 i 255
    if (enter == true){
        console.log(`Addreca IP completa: ${IPsencera}`);

        if (oct1 >= 1 && oct1 <= 126) { //Comprovació de quina es la clase
            ClasseTip = "A"; //S'assigna un valor a la variable ClassTip
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
        console.log(`Classe: ${ClasseTip}`);

        switch(ClasseTip) { //S'indica la mascara en funció del tipus de clase
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
    
              
        (oct1 === 10 && oct2 === 0 || oct1 === 172 && oct2 === 16 || oct1 === 192 && oct2 === 168) ? console.log("Tipus d'adreca: Privada"):
            console.log("Tipus d'adreca: Publica");
    } else {
        console.log('ERROR!! els nombres han de ser enters'); //Dona un error si els octets contenen valors decimals.
    }
} else { //si no es troben entre 0 i 255 es d'ona un avis i acaba l'escript
    console.log('ERROR: No es permeten valors inferiors a 0 o speriors a 255 a cada octet.') 
}