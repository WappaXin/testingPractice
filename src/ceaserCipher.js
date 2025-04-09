// function ceaserCipher(string , key){
//     return 'cde';
// }

// function ceaserCipher(string , key){
//     const alphabetArray = [ "a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n","o","p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"];
//     const stringArray = string.split('');
//     return stringArray.map((char) => {
//         const indexOfChar = alphabetArray.indexOf(char.toLowerCase());
//         const indexOfNewChar = indexOfChar + key;
//         if(indexOfNewChar > 25) return alphabetArray[indexOfNewChar%25 - 1];
//         return alphabetArray[indexOfNewChar];
//     }).join('');
// }


// function ceaserCipher(string , key){
//     if(typeof(string) !== "string") return 'Enter valid string to encrypt';
//     if(typeof(key) !== "number") return 'Enter valid number for the key';
//     const alphabetArray = [ "a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n","o","p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"];
//     const stringArray = string.split('');
//     return stringArray.map((char) => {
//         const indexOfChar = alphabetArray.indexOf(char.toLowerCase());
//         const indexOfNewChar = indexOfChar + key;
//         if(indexOfNewChar > 25) return alphabetArray[indexOfNewChar%25 - 1];
//         return alphabetArray[indexOfNewChar];
//     }).join('');
// }

// function ceaserCipher1(string , key){
//     if(typeof(string) !== "string") return 'Enter valid string to encrypt';
//     if(typeof(key) !== "number") return 'Enter valid number for the key';
//     const alphabetArray = [ "a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n","o","p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"];
//     const stringArray = string.split('');
//     return stringArray.map((char) => {
//         const indexOfChar = alphabetArray.indexOf(char.toLowerCase());
//         // indexOf returns -1 if the value is not found in the array
//         if(indexOfChar === -1) return char;
//         const indexOfNewChar = indexOfChar + key;
//         if(indexOfNewChar > 25) return alphabetArray[indexOfNewChar%25 - 1];
//         return alphabetArray[indexOfNewChar];
//     }).join('');
// }

// function ceaserCipher(string , key){
//     if(typeof(string) !== "string") return 'Enter valid string to encrypt';
//     if(typeof(key) !== "number") return 'Enter valid number for the key';
//     if(key%26 === 0) return string;
//     const alphabetArray = [ "a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n","o","p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"];
//     const stringArray = string.split('');
//     return stringArray.map((char) => {
//         const indexOfChar = alphabetArray.indexOf(char.toLowerCase());
//         // indexOf returns -1 if the value is not found in the array
//         if(indexOfChar === -1) return char;
//         const indexOfNewChar = indexOfChar + key;
//         if(indexOfNewChar > 25) return alphabetArray[indexOfNewChar%25 - 1];
//         return alphabetArray[indexOfNewChar];
//     }).join('');
// }

function ceaserCipher(string , key){
    if(typeof(string) !== "string") return 'Enter valid string to encrypt';
    if(typeof(key) !== "number") return 'Enter valid number for the key';
    if(key%26 === 0) return string;
    const alphabetArray = [ "a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n","o","p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"];
    const stringArray = string.split('');
    
    return stringArray.map((char) => {
        const indexOfChar = alphabetArray.indexOf(char.toLowerCase());
        // indexOf returns -1 if the value is not found in the array
        if(indexOfChar < 0) return char;
        const indexOfNewChar = indexOfChar + key;
        let newChar;
        if(indexOfNewChar > 25) newChar = alphabetArray[indexOfNewChar%25 - 1];
        if(indexOfNewChar <= 25) newChar = alphabetArray[indexOfNewChar];
        if(char === char.toUpperCase()) return newChar.toUpperCase();
        return newChar;
    }).join('');
}

module.exports = ceaserCipher;