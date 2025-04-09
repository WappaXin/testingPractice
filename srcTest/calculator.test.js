const calculator = require("./../src/calculator");

// add
test('calculator add numbers' , () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('calculator add string' , () => {
    expect(calculator.add('sdgsg',2)).toBe('Enter valid numbers.');
});

test('calculator add string as number' , () => {
    expect(calculator.add('0',2)).toBe('Enter valid numbers.');
});

test('calculator add null' , () => {
    expect(calculator.add(null,2)).toBe('Enter valid numbers.');
});


// subtract
test('calculator subtract numbers' , () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('calculator subtract string' , () => {
    expect(calculator.subtract('sdgsg',2)).toBe('Enter valid numbers.');
});

test('calculator subtract string as number' , () => {
    expect(calculator.subtract('0',2)).toBe('Enter valid numbers.');
});

test('calculator subtract null' , () => {
    expect(calculator.subtract(null,2)).toBe('Enter valid numbers.');
});


// multiply
test('calculator multiply numbers' , () => {
    expect(calculator.multiply(1,2)).toBe(2);
});

test('calculator multiply numbers by 0' , () => {
    expect(calculator.multiply(1,0)).toBe(0);
});

test('calculator multiply string' , () => {
    expect(calculator.multiply('sdgsg',2)).toBe('Enter valid numbers.');
});

test('calculator multiply string as number' , () => {
    expect(calculator.multiply('0',2)).toBe('Enter valid numbers.');
});

test('calculator multiply null' , () => {
    expect(calculator.multiply(null,2)).toBe('Enter valid numbers.');
});


// divide
test('calculator divide numbers' , () => {
    expect(calculator.divide(1,2)).toBe(0.5);
});

test('calculator divide numbers by 0' , () => {
    expect(calculator.divide(1,0)).toBe(Infinity);
});

test('calculator divide 0 by numbers' , () => {
    expect(calculator.divide(0,1)).toBe(0);
});

test('calculator divide string' , () => {
    expect(calculator.divide('sdgsg',2)).toBe('Enter valid numbers.');
});

test('calculator divide string as number' , () => {
    expect(calculator.divide('0',2)).toBe('Enter valid numbers.');
});

test('calculator divide null' , () => {
    expect(calculator.divide(null,2)).toBe('Enter valid numbers.');
});
