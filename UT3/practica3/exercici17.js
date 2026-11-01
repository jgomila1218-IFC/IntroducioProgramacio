// Cas A --> Acces denegat. Ja que el valor es inferior a 10.
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("(A) Accés denegat");
}

// Cas B --> Sense misatge. ja quer el valor no es menor a 10,
// tampoc major que 18 i no es cap de setmana
hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("(B) Accés denegat");
}

// Cas C --> Sense misatge. Ja que l'unica de les tres condicions 
// que es compleix es que es cap de setmana
hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("(C) Accés denegat");
}