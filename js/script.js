const priceKm = 0.21;
const discountMin = 20;
const discountOver = 40;

// form
const formElem = document.getElementById("treno-form");
console.log(formElem);

// imputs
const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");

// elementi del riepilogo
const passengerNameElem = document.querySelector(".f-name");
const typeElem = document.querySelector(".f-type");
const carElem = document.querySelector(".f-car");
const cpElem = document.querySelector(".f-cp");
const priceElem = document.querySelector(".f-price");

// submit del form
formElem.addEventListener("submit", function(event){
    event.preventDefault();


// values degli input
const nameUser = nameInput.value;
const kmUser = parseInt(kmInput.value);
const ageUser = ageInput.value;

//calcolo del costo
let totalPrice = priceKm * kmUser;

if (ageUser === "min") {

    let discount = totalPrice * (discountMin / 100);
    totalPrice = totalPrice - discount;
    typeElem.innerHTML = "Biglietto Giovani";
    
}
else if (ageUser === "over") {

    let discount = totalPrice * (discountOver / 100);
    totalPrice = totalPrice - discount;
    typeElem.innerHTML = "Biglietto Adulti";
} 
else {
    typeElem.innerHTML = "Biglietto Standard";
}

// numeri generati
const car = Math.floor(Math.random() * 10) + 1;
const cp = Math.floor(Math.random() * 90000) + 10000;

// stampa
passengerNameElem.innerHTML = nameUser;
carElem.innerHTML = car;
cpElem.innerHTML = cp;
priceElem.innerHTML = `${totalPrice.toFixed(2)}€`;

formElem.reset();
})