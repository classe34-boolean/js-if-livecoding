// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// chiedo all'utente parola 1
var parola1 = prompt("Inserisci la prima parola");
console.log(parola1);
// chiedo all'utente parola 2
var parola2 = prompt("Inserisci la seconda parola");
console.log(parola2);
// calcolare lunghezza parola 1
var lunghezzaParola1 = parola1.length;
console.log(lunghezzaParola1);
// calcolare lunghezza parola 2
var lunghezzaParola2 = parola2.length;
console.log(lunghezzaParola2);

// confrontare le due lunghezze e stampare messaggio in console
if (lunghezzaParola1 > lunghezzaParola2) {
    // blocco di istruzioni 1
    console.log("Parola 1 vince");
} else if (lunghezzaParola1 == lunghezzaParola2) {
     // blocco di istruzioni 2
    console.log("Pareggio");
} else {
     // blocco di istruzioni 3
    console.log("Parola 2 vince");
}