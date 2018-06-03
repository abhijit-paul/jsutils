import isEqual from '../src/isEqual';

test('string test', () => {
    expect(isEqual('Hello world', 'Hello world')).toBe(true);
});

test('NEG: string test', () => {
    expect(isEqual('Hello world', 'Hello world!')).toBe(false);
});

test('number test', () => {
    expect(isEqual(123, 123)).toBe(true);
});

test('NEG: number test', () => {
    expect(isEqual(123, 1234)).toBe(false);
});

test('object test', () => {
    expect(isEqual({ a: 123 }, { a: 123 })).toBe(true);
});

test('NEG: object property test', () => {
    expect(isEqual({ a: 123 }, { b: 123 })).toBe(false);
});

test('NEG: object value test', () => {
    expect(isEqual({ a: 123 }, { a: 183 })).toBe(false);
});

test('array test', () => {
    expect(isEqual(
        [1,2,6],
        [1,2,6])
    ).toBe(true);
});

test('NEG: array size test', () => {
    expect(isEqual(
        [1,2,6],
        [1,2,6,7])
    ).toBe(false);
});

test('NEG: array val test', () => {
    expect(isEqual(
        [1,2,6],
        [1,3,6])
    ).toBe(false);
});

test('object and array test', () => {
    expect(isEqual(
        { a: 123,k:90,p:{o:78},d:[1,2] },
        { a: 123,k:90,p:{o:78},d:[1,2] })
    ).toBe(true);
});

test('NEG: object and array test', () => {
    expect(isEqual(
        { a: 123,k:90,p:{o:78},d:[1,2] },
        { a: 123,k:90,q:{o:78},d:[1,2] })
    ).toBe(false);
});

test('complex object and array test', () => {
    expect(isEqual(
        { a: 123,k:90,p:{o:78},d:[1,2,6] },
        { a: 123,k:90,p:{o:78},d:[1,2,6] })
    ).toBe(true);
});

test('NEG: complex object and array test', () => {
    expect(isEqual(
        { a: 123,k:90,p:{o:78},d:[1,2,6] },
        { a: 123,k:90,p:{l:78},d:[1,2,6] })
    ).toBe(false);
});
