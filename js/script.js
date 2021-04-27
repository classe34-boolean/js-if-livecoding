// var condizione = false;

var x = 4;
console.log(x);
var y = 4;
console.log(y);
var condizione = x > y;
console.log(condizione);

if (!condizione) {
    // blocco di istruzioni 1
    console.log("La condizione è vera!");
    document.getElementById("title").innerHTML = "VERO!";
} 

if (condizione) {

} else {
    // blocco di istruzioni da eseguire quando la condizione è falsa
}

// else {
//     // blocco di istruzioni 2
//     console.log("La condizione è falsa");
//     document.getElementById("title").innerHTML = "FALSO!";
// }

console.log("Istruzione eseguita sempre");