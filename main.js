'use strict';
const bigliettoPrezzoPerKm = 0.21; //Prezzo biglietto al km
const bigliettoScontoMinorenni = 20; //Percentuale di sconto da applicare ai minorenni
const bigliettoScontoOver65 = 40; //Percentuale di sconto da applicare agli over65
const bigliettoKm = Number(prompt('Inserire numero km da percorrere:')); //L'utente inserisce la distanza.
console.log('[INPUT:]km inseriti: ' + bigliettoKm);
const passeggeroEta = Number(prompt('Inserisci la tue età:'))//L'utente inserisce la sua età.
console.log('[INPUT:]età inserita: ' + passeggeroEta);
let bigliettoPrezzo = bigliettoKm * bigliettoPrezzoPerKm; //Viene calcolato il prezzo del biglietto (0.21€/km).
if(passeggeroEta < 18){//Controllo se il passeggero è minorenne e applicazione sconto del 20%.

    bigliettoPrezzo = (bigliettoPrezzo - ((bigliettoPrezzo/100) * bigliettoScontoMinorenni)).toFixed(2);

}else if(passeggeroEta > 65){ //Controllo se il passeggero è over65 e applicazione sconto del 40%.

    bigliettoPrezzo = (bigliettoPrezzo - ((bigliettoPrezzo/100) * bigliettoScontoOver65)).toFixed(2); 
    
}
console.log('[CALC:]prezzo biglietto: ' + (bigliettoPrezzo).toFixed(2)); //Console-log del prezzo Finale.