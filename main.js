//costanti per il calcolo del prezzo del biglietto
const prezzoKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

//variabili immesse dall'utente
let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");

console.log(name);
console.log(km);
//button
let buttonGenera = document.getElementById("genera");
let buttonAnnulla = document.getElementById("annulla");


//click su genera

buttonGenera.addEventListener('click',    
    function() {

        let prezzoBiglietto;

        if (age == "under-18") {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto20;
            alert("il prezzo del biglietto è :" + prezzoBiglietto );
        } else if (age == "over-65"){
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm * sconto40;
            alert("il prezzo del biglietto è :" + prezzoBiglietto );
        }else {
            // calcolo costo del biglietto
            prezzoBiglietto = km * prezzoKm ;
            
           alert("il prezzo del biglietto è :" + prezzoBiglietto );

        }
    }
);