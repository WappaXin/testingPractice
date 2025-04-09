// function capitalize(string){
//     return 'How';
// }

// function capitalize(string){
//     const firstChar = string.charAt(0).toUpperCase();
//     const remainingString = string.split('');
//     remainingString.shift();
//     return firstChar + remainingString.join('');
// }

function capitalize(string){
    const stringArray = string.split('');
    const firstChar = stringArray.find((char) => /[a-zA-Z]{1}/.test(char));
    if(firstChar === undefined) return "No valid character to capitalize";
    stringArray.splice(stringArray.indexOf(firstChar), 1, firstChar.toUpperCase());
    return stringArray.join('');
}

module.exports = capitalize;