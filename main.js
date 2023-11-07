'use strict';

const bigliettoPrezzoPerKm = 0.21; // Costante prezzo biglietto al km
const bigliettoScontoMinorenni = 20; //Costante percentuale di sconto da applicare ai minorenni
const bigliettoScontoOver65 = 40; //Costante percentuale di sconto da applicare agli over65
let passeggeroSconto = 0; //Variabile globale che verrà utilizzata per calcolare lo sconto a cui si ha diritto (inizializzato a 0)
let bigliettoPrezzo; //Variabile globale che verrà utilizzata per calcolare il prezzo del biglietto (dalla quale verranno sottratti eventuali sconti

const bigliettoKm = Number(prompt('Inserire numero km da percorrere:')); //L'utente inserisce la distanza.
console.log('[INPUT:]km inseriti: ' + bigliettoKm);
const passeggeroEta = Number(prompt('Inserisci la tue età:'))//L'utente inserisce la sua età.
console.log('[INPUT:]età inserita: ' + passeggeroEta);
if(!isNaN(bigliettoKm) && !isNaN(passeggeroEta)){ //Verifica che i dati inseriti siano SOLO numerici
    bigliettoPrezzo = bigliettoKm * bigliettoPrezzoPerKm; //Viene calcolato il prezzo del biglietto (0.21€/km).
    if(passeggeroEta < 18){//Controllo se il passeggero è minorenne e calcolo lo sconto del 20%.

        passeggeroSconto = ((bigliettoPrezzo / 100) * bigliettoScontoMinorenni);

    }else if(passeggeroEta > 65){ //Controllo se il passeggero è over65 e calcolo lo sconto del 40%.

        passeggeroSconto = ((bigliettoPrezzo / 100) * bigliettoScontoOver65); 
        
    }
}
bigliettoPrezzo = bigliettoPrezzo - passeggeroSconto;
console.log('[CALC:]prezzo biglietto: ' + (bigliettoPrezzo).toFixed(2)); //Console-log del prezzo Finale.