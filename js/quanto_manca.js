// quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

// stabilire ora attuale
var dataCorrente = new Date();

var minutiInUnOra = 60;
var minutiOraCorrente = dataCorrente.getMinutes();
console.log(minutiOraCorrente);

var minutiMancanti = minutiInUnOra - minutiOraCorrente;
console.log(minutiMancanti);

var messaggio;
if(minutiMancanti != 1) {
    messaggio = "Mancano " + minutiMancanti + " minuti allo scoccare dell'ora"; 
} else {
    messaggio = "Manca " + minutiMancanti + " minuto allo scoccare dell'ora";
}

document.getElementById("title").innerHTML = messaggio;

