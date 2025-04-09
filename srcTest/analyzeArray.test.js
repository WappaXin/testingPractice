const analyzeArray = require("./../src/analyzeArray");

test('analyze an array' , () => {
    expect(analyzeArray([1,2,3])).toEqual({
        average: 2,
        min:1,
        max:3,
        length:3
    })
});

test('string in the array' , () => {
    expect(analyzeArray(['dfsfdsfsd',2,3])).toBe('Array should contain only numbers');
});
