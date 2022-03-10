"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("../lib/array");
test(`ARRAY: isUnique`, () => {
    const tests = [
        { arr: [], result: true },
        { arr: [1, 2, 3], result: true },
        { arr: [1, 2, 1], result: false },
    ];
    tests.forEach((test) => {
        expect(array_1.ARRAY.isUnique(test.arr)).toBe(test.result);
    });
});
test(`ARRAY: isIn`, () => {
    const tests = [
        { values: [], arr: [1, 2, 3], result: true },
        { values: [1, 2, 3], arr: [1, 2, 3], result: true },
        { values: [1, 2, 4], arr: [1, 2, 3], result: false },
    ];
    tests.forEach((test) => {
        expect(array_1.ARRAY.isIn(test.values, test.arr)).toBe(test.result);
    });
});
//# sourceMappingURL=array.test.js.map