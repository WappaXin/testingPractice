const ceaserCipher = require("./../src/ceaserCipher");

test('ceaser cipher basic' , () => {
    expect(ceaserCipher('abc' , 2)).toBe('cde');
});

test('ceaser cipher, number as a string' , () => {
    expect(ceaserCipher( 2 , 2)).toBe('Enter valid string to encrypt');
});

test('ceaser cipher key as a string' , () => {
    expect(ceaserCipher( 'dsfdsa' , 'fsd')).toBe('Enter valid number for the key');
});

test('ceaser cipher basic, indexOfModifiedChar > 25' , () => {
    expect(ceaserCipher('xyz' , 3)).toBe('abc');
});

test('ceaser cipher string contains more characters than alphabets' , () => {
    expect(ceaserCipher( 'dsf#dsa####!!!%&%^*^&(^%(^' , 1)).toBe('etg#etb####!!!%&%^*^&(^%(^');
});

test('ceaser cipher, key is divisible by 26 then return the same string' , () => {
    expect(ceaserCipher( 'dsf#dsa####!!!%&%^*^&(^%(^' , 26)).toBe('dsf#dsa####!!!%&%^*^&(^%(^');
});

test('ceaser cipher, string contains uppercase letters' , () => {
    expect(ceaserCipher( 'Abc' , 1)).toBe('Bcd');
});

test("ceaser cipher, string contains space's" , () => {
    expect(ceaserCipher( 'Hello, World!' , 3)).toBe('Khoor, Zruog!');
});
