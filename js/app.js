// // PALINDROMA

// // chiedere all’utente di inserire una parola
// const userWord = prompt('Inserisci una parola');

// // controllare se la parola inserita è palindroma (funzione)
// function isPalindroma(text) {
//     // dividere la parola in lettere
//     const chars = text.split('');
//     const revertChars = [];
//     // invertire l'ordine delle lettere
//     for (let i = chars.length - 1; i >= 0; i--) {
//         const char = chars[i];
//         revertChars.push(char);
//     }
//     console.log(chars, revertChars);

//     // controllare che la parola sia palindroma
//     let isPalindroma = false;
//     if (chars.join() === revertChars.join()) {
//         isPalindroma = true;
//     }
    
//     return isPalindroma;
// }

// console.log(isPalindroma(userWord));




// PARI E DISPARI

// chiedere all'utente di scegliere pari o dispari
// chiedere all'utente di inserire un numero da 1 a 5
const evenOrOdd = prompt('Pari o dispari?');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// generare un numero random da 1 a 5 per il computer
const pcNumber = getRandomInt();
console.log(evenOrOdd, userNumber, pcNumber);

// sommare i due numeri
const sum = userNumber + pcNumber;

// stabilire se la somma dei due numeri è pari o dispari


// Dichiariamo chi ha vinto.

function getRandomInt() {
    const num = Math.floor(Math.random() * 5) + 1;
    return num;
}