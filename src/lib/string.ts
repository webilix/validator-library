import { RegX } from '@webilix/regex-library';

import { VALUE } from './value';

export const STRING = {
    isBankCard: (value: string): boolean => {
        if (!VALUE.isString(value)) return false;
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

    isDate: (value: string): boolean => VALUE.isString(value) && RegX.DATE.get().test(value),

    isDomain: (value: string): boolean => VALUE.isString(value) && RegX.DOMAIN.get().test(value),

    isEmail: (value: string): boolean => VALUE.isString(value) && RegX.EMAIL.get().test(value.toLowerCase()),

    isHexColor: (value: string): boolean => VALUE.isString(value) && RegX.HEX_COLOR.get().test(value),

    isIP4: (value: string): boolean => VALUE.isString(value) && RegX.IP4.get().test(value),

    isJsonDate: (value: string): boolean => VALUE.isString(value) && RegX.JSON_DATE.get().test(value),

    isMobile: (value: string): boolean => VALUE.isString(value) && RegX.MOBILE.get().test(value),

    isNationalCode: (value: string): boolean => {
        if (!VALUE.isString(value)) return false;
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

    isNumeric: (value: string): boolean => VALUE.isString(value) && RegX.NUMERIC.get().test(value),

    isObjectId: (value: string): boolean => {
        if (!VALUE.isString(value)) return false;

        if (value.length === 12) {
            const bytes = Buffer.from(value);
            return bytes.byteLength === 12;
        } else if (value.length === 24) return /^[0-9a-fA-F]{24}$/.test(value);

        return false;
    },

    isTime: (value: string): boolean => VALUE.isString(value) && RegX.TIME.get().test(value),

    isUrl: (value: string): boolean => VALUE.isString(value) && RegX.URL.get(true).test(value),
};
