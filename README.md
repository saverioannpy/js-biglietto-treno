Descrizione del problema:

    Scrivere un programma che chieda all’utente:

        1. Il numero di chilometri da percorrere
        2. Età del passeggero

    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

        1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
        2. va applicato uno sconto del 20% per i minorenni
        3. va applicato uno sconto del 40% per gli over 65.
        
    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
    Questo richiederà un minimo di ricerca. 


Idea di risoluzione:

    1. Utilizzare il prompt per chiedere all'utente di inserire il numero di km da percorrere e memorizzare il dato 
    nella variabile 'bigliettoKm'.
    1a. Trasformo il dato inserito in un numero utilizzando il metono Number().
    2. Effettuare un primo calcolo del prezzo del biglietto moltiplicando il dato appena inserito dall'utente per il prezzo al km (0.21€/km) e memorizziamo il risultato dell'operazione nella variabile 'bigliettoPrezzo'.
    3. Utilizzare il prompt per chiedere all'utente di inserire la sua età e memorizzare il dato nella variabile costante 'passeggeroEta'.
    3a. Trasformo il dato inserito in un numero utilizzando il metono Number().
    4. Implementare delle condizioni di controllo sull'età inserita dall'utente per poter stabilire se va calcolato o meno uno sconto: 

        CONDIZIONI:

            SE(passeggeroEta<18)
                APPLICARE UNO SCONTO DEL 20% AL BIGLIETTO;
            ALLORA SE(passegeroEta>65)
                APPRICARE UNO SCONTO DEL 40% AL BIGLIETTO;
            ALTRIMENTI
                L'UTENTE NON HA DIRITTO AD UNO SCONTO;


Commenti: 

    1. Si decide di calcolare il prezzo immediatamente dopo il primo input dell'utente e lasciare i controlli sull'input dell'età con i calcoli dello sconto separati in modo tale da poter poi spostare con facilità quest'ultimo blocco di condizione in una funzione futura.

    2. Viene utilizzata una sola variabile bigliettoPrezzo che non sarà una variabile costante ma sarà la stessa variabile che conterrà il primo calcolo sul prezzo e il successivo prezzo scontato.

    3. LOC:18 viene effettuato un console-log al di fuori del ciclo in modo tale da darci un aggiornamento a schermo sulla variazione del prezzo a prescindere se lo sconto venga applicato o meno. 

    4. Nel caso in cui lo sconto venga applicato si utilizza si utilizza il metodo .toFixed(2) per poter approssimare il risultato finale a sole due cifre decimali.