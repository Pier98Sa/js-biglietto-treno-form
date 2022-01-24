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
                
        let km = document.getElementById("km").value;

        let age = document.getElementById("age").value;
        
        let prezzoBiglietto;

        if (age == "under-18") {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto20;
            alert("il prezzo del biglietto è :" + prezzoBiglietto );
        } else if (age == "over-65"){
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto40;
            alert("il prezzo del biglietto è :" + prezzoBiglietto );
        }else if (age == ""){
            alert("Fascia d'età non valida")
        }else {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm ;
            
           alert("il prezzo del biglietto è :" + prezzoBiglietto );

        }
    }
);

//click su annulla
buttonAnnulla.addEventListener('click',    
    function() {
        document.getElementById("myForm").reset();
    }
);