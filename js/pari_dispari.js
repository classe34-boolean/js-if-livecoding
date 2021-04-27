// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// var numeroDecimale = Math.random() * 10;
// var numeroIntero = Math.floor(numeroDecimale); 

// numero compreso tra 0 e 9
var numero = Math.floor(Math.random() * 9) + 1;
document.getElementById("title").innerHTML = numero;

// chiedere all'utente se vuole pari o dispari 
var sceltaUtente = prompt("Scegli pari o dispari");
console.log(sceltaUtente);
// chiedere all'utente un numero intero compreso tra 1 e 9
var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 9"));
console.log(numeroUtente);
// Generare un numero casuale compreso tra 1 e 9
var numeroPC = Math.floor(Math.random() * 9) + 1;
console.log(numeroPC);
// sommare i due numeri
var somma = numeroPC + numeroUtente;
console.log(somma);

// % Modulo = resto della divisione intera
// console.log(somma % 2);
var risultato;
if(somma % 2 == 0) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

// verificare chi ha vinto e stampare relativo messaggio in pagina
if (sceltaUtente == risultato) {
    alert("Ho vinto");
} else {
    alert("Ho perso");
}

