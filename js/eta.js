// età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// chiedere età persona 1
var eta1 = prompt("Inserisci l'età della prima persona");
console.log("Età della persona 1: " + eta1);
// chiedere età persona 2
var eta2 = prompt("Inserisci l'età della seconda persona");
console.log("Età della persona 2: " + eta2);
// confrontare le due età
var etaNumero1 = parseInt(eta1);
var etaNumero2 = parseInt(eta2);
console.log(etaNumero1, etaNumero2);

// stampare messaggio di testo
if (etaNumero1 > etaNumero2) {
    // blocco di istruzioni 1
    alert("La persona 1 è più anziana");
} else if (etaNumero1 < etaNumero2) {
    // blocco di istruzioni 2
    alert("La persona 2 è più anziana");
} else {
    // blocco di istruzioni 3
    alert("Le due persone hanno la stessa età");
}
