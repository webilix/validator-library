"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value_1 = require("../lib/value");
test(`VALUE: isArray`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: true },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: true },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isArray(test.value)).toBe(test.result);
    });
});
test(`VALUE: isBoolean`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: true },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isBoolean(test.value)).toBe(test.result);
    });
});
test(`VALUE: isDate`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: true },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isDate(test.value)).toBe(test.result);
    });
});
test(`VALUE: isEmpty`, () => {
    const tests = [
        { value: null, result: true },
        { value: undefined, result: true },
        { value: '', result: true },
        { value: [], result: true },
        { value: {}, result: true },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isEmpty(test.value)).toBe(test.result);
    });
});
test(`VALUE: isNull`, () => {
    const tests = [
        { value: null, result: true },
        { value: undefined, result: true },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isNull(test.value)).toBe(test.result);
    });
});
test(`VALUE: isNumber`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: false },
        { value: 123, result: true },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isNumber(test.value)).toBe(test.result);
    });
});
test(`VALUE: isObject`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: false },
        { value: [], result: false },
        { value: {}, result: true },
        { value: 'string', result: false },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: true },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isObject(test.value)).toBe(test.result);
    });
});
test(`VALUE: isString`, () => {
    const tests = [
        { value: null, result: false },
        { value: undefined, result: false },
        { value: '', result: true },
        { value: [], result: false },
        { value: {}, result: false },
        { value: 'string', result: true },
        { value: 123, result: false },
        { value: true, result: false },
        { value: new Date(), result: false },
        { value: [1], result: false },
        { value: { key: 'value' }, result: false },
    ];
    tests.forEach((test) => {
        expect(value_1.VALUE.isString(test.value)).toBe(test.result);
    });
});
//# sourceMappingURL=value.test.js.map