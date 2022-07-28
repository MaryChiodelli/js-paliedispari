// chiedere all’utente di inserire una parola
const userWord = prompt('Inserisci una parola');

// controllare se la parola inserita è palindroma (funzione)
function isPalindroma(text) {
    // dividere la parola in lettere
    const chars = text.split('');
    const revertChars = [];
    // invertire l'ordine delle lettere
    for (let i = chars.length - 1; i >= 0; i--) {
        const char = chars[i];
        revertChars.push(char);
    }
    console.log(chars, revertChars);

    // controllare che la parola sia palindroma
    let isPalindroma = false;
    if (chars.join() === revertChars.join()) {
        isPalindroma = true;
    }
    
    return isPalindroma;
}

console.log(isPalindroma(userWord)); 