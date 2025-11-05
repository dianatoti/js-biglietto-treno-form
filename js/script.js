const prezzoAlKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
const kmPercorrere = 10;
const etaUtente = 20;

let costoTotale = prezzoAlKm * kmPercorrere 
if (etaUtente < 18) {

    let sconto = costoTotale * (scontoMinorenni / 100)
    console.log (sconto)
    costoTotale = costoTotale - sconto
    
}
else if (etaUtente > 65) {

    let sconto = costoTotale * (scontoOver65 / 100)
    console.log (sconto)
    costoTotale = costoTotale - sconto
} 

console.log(`Il prezzo del biglietto è ${costoTotale.toFixed(2)}€`);


// form
// const formElem = document.getElementById("treno-form");
// console.log(formElem);

// imputs
