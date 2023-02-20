'use strict';

const nome = prompt("Inserisci il tuo nome:");
const surname = prompt("Inserisci il tuo cognome:");
const color = prompt("Inserisci il tuo colore preferito:");
const number = prompt("inserisci le ultime 2 cifre del tuo anno di nascita:");

const string_nome = `${nome} ecco la tua password:`;
const pw = `-> ${surname}${color}${number}!`;

document .querySelector(".nome") .innerHTML =string_nome;
document .querySelector("#password") .innerHTML = pw;


console.log("Il nome utente è: "+ nome)
console.log("Il cognome utente è: "+ surname)
console.log("Il colore scelto dall'utente è: "+ color)
console.log("L'anno di nascita dell'utente è: "+ number)
console.log("La Password è:" + pw);
