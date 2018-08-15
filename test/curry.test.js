import curry from '../src/curry';

let curriedMultiply;
beforeAll(() => {
    function multiply(a, b, c, d) {
        return a*b*c*d;
    }
    curriedMultiply = curry(multiply);
})

test('multiply test1', () => {
    expect(curriedMultiply(2,3)(4,5)).toBe(2*3*4*5);
});

test('multiply test2', () => {
    expect(curriedMultiply(2)(3,4,5)).toBe(2*3*4*5);
});

test('multiply test3', () => {
    expect(curriedMultiply(2,3,4)(5)).toBe(2*3*4*5);
});

test('multiply test4', () => {
    expect(curriedMultiply(2)(3)(4)(5)).toBe(2*3*4*5);
});

test('multiply test5', () => {
    expect(curriedMultiply(2,3,4,5)).toBe(2*3*4*5);
});