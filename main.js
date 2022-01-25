//costanti per il calcolo del prezzo del biglietto
const prezzoKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

//button
let buttonGenera = document.getElementById("genera");
let buttonAnnulla = document.getElementById("annulla");

//click su genera

buttonGenera.addEventListener('click',    
    function() {
        
        //variabili immesse dall'utente
        let name = document.getElementById("name").value;
        //stampa del nome 
        document.getElementById('name-ticket').innerHTML = name;
                
        let km = document.getElementById("km").value;

        let age = document.getElementById("age").value;
        
        //variabile inizializzata fuori dal ciclo if
        let prezzoBiglietto;

        //funzioni per la creazione di numeri randomici
        document.getElementById('train-car').innerHTML = (Math.floor(Math.random() * 9)+1);
        document.getElementById('cp-code').innerHTML = (Math.floor(Math.random() * 9999)+ 90000);

        
        if (age == "under-18") {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto20;
            //stampa del prezzo e dell'offerta
            document.getElementById('ticket-price').innerHTML = (prezzoBiglietto.toFixed(2)) + "\u20AC";
            document.getElementById('ticket-type').innerHTML = 'Biglietto scontato -20%';
        } else if (age == "over-65"){
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto40;
            //stampa del prezzo e dell'offerta
            document.getElementById('ticket-price').innerHTML = (prezzoBiglietto.toFixed(2)) + "\u20AC"
            document.getElementById('ticket-type').innerHTML = 'Biglietto scontato -40%';
        }else if (age == ""){
            alert("Fascia d'età non valida")
        }else {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm ;
            //stampa del prezzo e dell'offerta
           document.getElementById('ticket-price').innerHTML = (prezzoBiglietto.toFixed(2)) + "\u20AC";
           document.getElementById('ticket-type').innerHTML = 'Biglietto standard';

        }

        //aggiunta della classe active per mostrare il risultato
        const htmlGeneratedTicket = document.querySelector('.generated-ticket');
        htmlGeneratedTicket.classList.add('active');
    }
);

//click su annulla
buttonAnnulla.addEventListener('click',    
    function() {
        document.getElementById("myForm").reset();
        //rimozione della classe active per resettare la pagina
        const htmlGeneratedTicket = document.querySelector('.generated-ticket');
        htmlGeneratedTicket.classList.remove('active');
    }
);
