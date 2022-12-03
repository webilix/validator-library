import { ARRAY } from '../lib/array';

test(`ARRAY: isIn`, () => {
    const tests: { values: any[]; arr: any[]; result: boolean }[] = [
        { values: [], arr: [1, 2, 3], result: true },
        { values: [1, 2, 3], arr: [1, 2, 3], result: true },
        { values: [1, 2, 4], arr: [1, 2, 3], result: false },
    ];

    tests.forEach((test) => {
        expect(ARRAY.isIn(test.values, test.arr)).toBe(test.result);
    });
});

test(`ARRAY: isUnique`, () => {
    const tests: { arr: any[]; result: boolean }[] = [
        { arr: [], result: true },
        { arr: [1, 2, 3], result: true },
        { arr: [1, 2, 1], result: false },
    ];

    tests.forEach((test) => {
        expect(ARRAY.isUnique(test.arr)).toBe(test.result);
    });
});
