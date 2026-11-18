const prompt = require('prompt-sync')();
console.log();
console.log("-----------------------------------------------------------------");
console.log();
console.log("[1] XARXA");
console.log("[2] HARDWARE");
console.log("[3] SOFTWARE");
let tipusIncidencia = Number(prompt("Tipus d'incidencia [1-3]: ", 1));
let horesOberta = Number(prompt("hores des que es va obrir: ", 5));
let clientEmpresa = String(prompt("El client es una empresa [s/n]: ", "n"));
let clientAturat = String(prompt("El client esta aturat [s/n]: ", "n"));
let termini
let departament
let prioritat
let terminiSuperat
let horesRestants = (horesOberta - termini);
let capServei
switch (tipusIncidencia) {
    case 1:
        termini = 4 //hores
        departament = "XARXA"
    break;
    case 2:
        termini = 24
        departament = "HARDWARE"
    break;
    case 3:
        termini = 48
        departament = "SOFTWARE"
    break;
}

if ((departament === "XARXA")
|| (departament === "HARDWARE")
|| (departament === "SOFTWARE")
) {
    (clientAturat === "s") && (clientEmpresa === "s") ? prioritat = "CRITICA" : prioritat = "NORMAL";
    (prioritat === "CRITICA") ? termini = termini / 2  : '';
    (prioritat === "CRITICA") ? (capServei = "Cal cridar al cap de servei") : capServei = "";
    (horesOberta <= termini) ? terminiSuperat = `Dins del termini. Queden ${horesRestants}h` : terminiSuperat = "Fora del termini";

    console.log();
    console.log("------------------------ RESULTATS ---------------------------");
    console.log();
    console.log(`Departament: ${departament}`);
    console.log(`Prioritat: ${prioritat}`);
    console.log(`Termini: ${termini}h, ${terminiSuperat}`);
    console.log(capServei);
} else {
    console.log("Tipus d'incidencia no valida");
}