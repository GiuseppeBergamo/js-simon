/* Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const getUniqueRandomNumbers = (min, max, total) => {
    const randomNumbers = [];

    while (randomNumbers.length < total) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber)
    }

    return randomNumbers;
}



const countdown = document.getElementById("countdown");
const numberList = document.getElementById("number-list");

const min = 1;
const max = 100;
const numbersLength = 5;
let time = 40;
const randomNumbers = getUniqueRandomNumbers(min, max, numbersLength);
console.log(randomNumbers);


const countdownEvent = setInterval(() => {
    if (time === 0) clearInterval(countdownEvent)
    else countdown.innerText = --time;
}, 1000)

let listitems = '';

for (let i = 0; i < numbersLength; i++) {
    listitems += `<li class="list-inline-item h2 fw-bold">${randomNumbers[i]}</li>`
}

numberList.innerHTML = listitems;


setTimeout(() => {
    numberList.classList.add("d-none")
}, 30000)

setTimeout(() => {
    const userNumbers = [];

    while (userNumbers.length < numbersLength) {
        const userNumber = parseInt(prompt(`Inserisci un numero da ${min} a ${max} tra quelli che hai visto prima dello scadere del tempo`))
        if (!userNumbers.includes(userNumber)) userNumbers.push(userNumber)
    }

    let userPoints = 0;

    for (i = 0; i < numbersLength; i++) {
        if (randomNumbers.includes(userNumbers[i])) userPoints++;
    }

    alert(`Hai totalizzato ${userPoints} punti`)

}, 30500)