const reverseString = require("../src/reverseString");

test('Reverse string 1' , () => {
    expect(reverseString('how')).toBe('woh');
});

test('Reverse string 2' , () => {
    expect(reverseString('How')).toBe('woH');
});

test('Reverse string 3' , () => {
    expect(reverseString('How are you')).toBe('uoy era woH');
});

test('Reverse string 4' , () => {
    expect(reverseString('how are you')).toBe('uoy era woh');
});

test('Reverse string 5' , () => {
    expect(reverseString('!@#$%^')).toBe('^%$#@!');
});

test('Reverse string 6' , () => {
    expect(reverseString('')).toBe('Nothing to be reversed');
});

test('Reverse string 7' , () => {
    expect(reverseString('                     dgss gsgsdfh dsgh                ')).toBe('                hgsd hfdsgsg ssgd                     ');
});

test('Reverse string 2' , () => {
    expect(reverseString(13423)).toBe('Enter a valid string');
});