import { STRING } from '../lib/string';

test(`STRING: isEmail`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'email@', result: false },
        { value: '@domain.com', result: false },
        { value: 'email@domain.com', result: true },
        { value: 'email.address@sub.domain.com', result: true },
        { value: 'email-address@sub.domain.com', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isEmail(test.value)).toBe(test.result);
    });
});

test(`STRING: isUrl`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'domain.com', result: false },
        { value: 'http:domain.com', result: false },
        { value: 'http//domain.com', result: false },
        { value: 'https:domain.com', result: false },
        { value: 'https//domain.com', result: false },
        { value: 'http://domain.com', result: true },
        { value: 'https://domain.com', result: true },
        { value: 'http://domain.com/', result: true },
        { value: 'https://domain.com/', result: true },
        { value: 'http://domain.com/path/', result: true },
        { value: 'https://domain.com/path/', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isUrl(test.value)).toBe(test.result);
    });
});

test(`STRING: isMobile`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0912', result: false },
        { value: '9123456789', result: false },
        { value: '0912.345.6789', result: false },
        { value: '09123456789', result: true },
        { value: '0912 345 6789', result: true },
        { value: '0912-345-6789', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isMobile(test.value)).toBe(test.result);
    });
});

test(`STRING: isNumeric`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '+1', result: false },
        { value: '-1', result: false },
        { value: '1.1', result: false },
        { value: '1234567890', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isNumeric(test.value)).toBe(test.result);
    });
});

test(`STRING: isDomain`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: 'domain', result: false },
        { value: 'domain.c', result: false },
        { value: 'domain.com', result: true },
        { value: 'sub.domain.com', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isDomain(test.value)).toBe(test.result);
    });
});

test(`STRING: isDate`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '2000', result: false },
        { value: '2000-1-01', result: false },
        { value: '2000-01-1', result: false },
        { value: '2000-01-00', result: false },
        { value: '2000-01-32', result: false },
        { value: '2000-00-01', result: false },
        { value: '2000-13-01', result: false },
        { value: '2000.01.01', result: false },
        { value: '2000-01-01', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isDate(test.value)).toBe(test.result);
    });
});

test(`STRING: isTime`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '1:01:01', result: false },
        { value: '01:1:01', result: false },
        { value: '01:01:1', result: false },
        { value: '24:00:00', result: false },
        { value: '00:60:00', result: false },
        { value: '00:00:60', result: false },
        { value: '00.00.00', result: false },
        { value: '00:00:00', result: true },
        { value: '23:59:59', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isTime(test.value)).toBe(test.result);
    });
});

test(`STRING: isJsonDate`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '2000-01-01', result: false },
        { value: '00:00:00', result: false },
        { value: '2000-01-01T00:00:00', result: false },
        { value: '2000-01-01T00:00:00.000', result: false },
        { value: '2000-01-01T00:00:00Z', result: false },
        { value: '2000-01-01T00:00:00.000Z', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isJsonDate(test.value)).toBe(test.result);
    });
});

test(`STRING: isObjectId`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '1234567890', result: false },
        { value: '61d24c823f16dcfe229962cg', result: false },
        { value: '123456789012', result: true },
        { value: '61d24c823f16dcfe229962ce', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isObjectId(test.value)).toBe(test.result);
    });
});

test(`STRING: isNationalCode`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0000000000', result: false },
        { value: '1234567890', result: false },
        { value: '0123456789', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isNationalCode(test.value)).toBe(test.result);
    });
});

test(`STRING: isBankCard`, () => {
    const tests: { value: string; result: boolean }[] = [
        { value: '', result: false },
        { value: '0000000000000000', result: false },
        { value: '1234567891234567', result: false },
        { value: '1234567891234563', result: true },
    ];

    tests.forEach((test) => {
        expect(STRING.isBankCard(test.value)).toBe(test.result);
    });
});
