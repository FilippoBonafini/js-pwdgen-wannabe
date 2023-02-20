'use strict';

const name = prompt("Inserisci il tuo nome:");
const surname = prompt("Inserisci il tuo cognome:");
const color = prompt("Inserisci il tuo colore preferito:");
const number = prompt("inserisci le ultime 2 cifre del tuo anno di nascita:");

const pw = `${surname}${color}${number}!`;


document .querySelector("#password") .innerHTML = pw;
console.log(pw);
