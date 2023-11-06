'use strict';

const bigliettoKm = prompt('Inserire numero km da percorrere:'); //L'utente inserisce la distanza.
console.log('[INPUT:]km inseriti: ' + parseInt(bigliettoKm));
let bigliettoPrezzo = parseInt(bigliettoKm) * 0.21; //Viene calcolato il prezzo del biglietto (0.21€/km).
console.log('[CALC:]prezzo biglietto: ' + bigliettoPrezzo);
const passeggeroEta = prompt('Inserisci la tue età:')//L'utente inserisce la sua età.
console.log('[INPUT:]età inserita: ' + parseInt(passeggeroEta));
if(passeggeroEta < 18){//Controllo se il passeggero è minorenne e applicazione sconto del 20%.

    bigliettoPrezzo = bigliettoPrezzo - ((bigliettoPrezzo/100)*20);

}else if(passeggeroEta > 65){ //Controllo se il passeggero è minorenne e applicazione sconto del 40%

    bigliettoPrezzo = bigliettoPrezzo - ((bigliettoPrezzo/100)*20); 
    
}
console.log('[CALC:]prezzo biglietto: ' + bigliettoPrezzo); //Prezzo Finale.