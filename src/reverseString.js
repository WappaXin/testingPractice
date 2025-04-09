// function reverseString(string){
//     return 'woh';
// }

// function reverseString(string){
//     return 'woH';
// }

function reverseString(string){
    if(typeof(string) !== "string" ) return 'Enter a valid string';
    if(string === '') return 'Nothing to be reversed';
    const reversedString = string.split('').reverse().join(''); 
    return reversedString;
}

module.exports = reverseString;