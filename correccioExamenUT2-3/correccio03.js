const prompt = require('prompt-sync')();
let velContractada = Number(prompt("Velocitat contractada(Mbps): ", 600));
let velTest = Number(prompt("Velocitat del test (Mbps): ", 300));
let pingTest = Number(prompt("Ping (ms): ", 112));
let perduaTest = Number(prompt("Perdua de paquets (%): ",40));
let percentatge = ((velTest / velContractada) * 100);

console.log();
console.log("------- RESULTATS ------");
console.log();

if ( (velContractada > 0) 
&& (velTest >= 0)
&& (pingTest >= 0)
&& (perduaTest >= 0) ) {
    

    if ( (percentatge >= 90) &&( pingTest < 30) && (perduaTest === 0) ) {
        console.log(`Estat: ${percentatge} OPTIMA` );
    } else if ( (percentatge >= 70) && (pingTest <= 100) && (perduaTest <= 2) ) {
        console.log(`Estat: ${percentatge} ACCEPTABLE` );
    } else if ( (pingTest > 200) || (perduaTest > 10) ) {
        console.log(`Estat: ${percentatge} CRITICA. Avisa al servei tecnic en guardia.` );
    } else {
         console.log(`Estat: ${percentatge} DEFICIENT. Cal obrir una incidencia.` );
    }
} else {
    console.log("Dades no valides!!");
}
