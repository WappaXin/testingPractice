const capitalize = require("../src/capitalize");

test('capitalize 1' , () => {
    expect(capitalize('how')).toBe('How');
});

test('capitalize 2' , () => {
    expect(capitalize('how are you')).toBe('How are you');
});

test('capitalize 3' , () => {
    expect(capitalize('?')).toBe('No valid character to capitalize');
});

test('capitalize 4' , () => {
    expect(capitalize('how are you')).toBe('How are you');
});

test('capitalize 5' , () => {
    expect(capitalize('!@#afagfsdgas#@$@')).toBe('!@#Afagfsdgas#@$@');
});

test('capitalize 6' , () => {
    expect(capitalize('!@#Afagfsdgas#@$@')).toBe('!@#Afagfsdgas#@$@');
});

test('capitalize 7' , () => {
    expect(capitalize('')).toBe('No valid character to capitalize');
});