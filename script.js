'use strict'

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Augusto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const d = new Date();
let month = months[d.getMonth()];
let day = d.getDay()
let year = d.getFullYear()

let date = `${day} de ${month} de ${year}`

document.getElementById('p-date').value = 'date'