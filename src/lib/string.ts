import { RegX } from 'regex-library';

import { ARRAY } from './array';

export const STRING = {
    isEmail: (value: string): boolean => RegX.EMAIL.get().test(value.toLowerCase()),

    isUrl: (value: string): boolean => RegX.URL.get(true).test(value),

    isMobile: (value: string): boolean => RegX.MOBILE.get().test(value),

    isNumeric: (value: string): boolean => RegX.NUMERIC.get().test(value),

    isDomain: (value: string): boolean => RegX.DOMAIN.get().test(value),

    isDate: (value: string): boolean => RegX.DATE.get().test(value),

    isTime: (value: string): boolean => RegX.TIME.get().test(value),

    isJsonDate: (value: string): boolean => RegX.JSON_DATE.get().test(value),

    isIP4: (value: string): boolean => RegX.IP4.get().test(value),

    isObjectId: (value: string): boolean => {
        if (value.length === 12) {
            const bytes = Buffer.from(value);
            return bytes.byteLength === 12;
        } else if (value.length === 24) return /^[0-9a-fA-F]{24}$/.test(value);

        return false;
    },

    isNationalCode: (value: string): boolean => {
        if (value.length !== 10 || !STRING.isNumeric(value)) return false;

        const numbers: string[] = value.split('');

        // Check for all unique numbers
        const unique = numbers.filter((n, index: number, self: string[]) => self.indexOf(n) === index);
        if (unique.length === 1) return false;

        let check = 0;
        numbers.forEach((n: string, index: number) => {
            if (index >= 9) return;
            check += (10 - index) * +n;
        });

        check = check % 11;
        check = check < 2 ? check : 11 - check;

        return check === +numbers[9];
    },

    isBankCard: (value: string): boolean => {
        if (value.length !== 16 || !STRING.isNumeric(value)) return false;

        const numbers: string[] = value.split('');

        // Check for all unique numbers
        const unique = numbers.filter((n, index: number, self: string[]) => self.indexOf(n) === index);
        if (unique.length === 1) return false;

        let check: number = 0;
        numbers.forEach((n: string, index: number) => {
            const charCheck: number = +n * (index % 2 === 0 ? 2 : 1);
            check += charCheck > 9 ? charCheck - 9 : charCheck;
        });

        return check % 10 === 0;
    },
};
