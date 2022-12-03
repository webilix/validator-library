"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
const regex_library_1 = require("@webilix/regex-library");
const value_1 = require("./value");
exports.STRING = {
    isBankCard: (value) => {
        if (!value_1.VALUE.isString(value))
            return false;
        if (value.length !== 16 || !exports.STRING.isNumeric(value))
            return false;
        const numbers = value.split('');
        // Check for all unique numbers
        const unique = numbers.filter((n, index, self) => self.indexOf(n) === index);
        if (unique.length === 1)
            return false;
        let check = 0;
        numbers.forEach((n, index) => {
            const charCheck = +n * (index % 2 === 0 ? 2 : 1);
            check += charCheck > 9 ? charCheck - 9 : charCheck;
        });
        return check % 10 === 0;
    },
    isDate: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.DATE.get().test(value),
    isDomain: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.DOMAIN.get().test(value),
    isEmail: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.EMAIL.get().test(value.toLowerCase()),
    isHexColor: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.HEX_COLOR.get().test(value),
    isIP4: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.IP4.get().test(value),
    isJsonDate: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.JSON_DATE.get().test(value),
    isMobile: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.MOBILE.get().test(value),
    isNationalCode: (value) => {
        if (!value_1.VALUE.isString(value))
            return false;
        if (value.length !== 10 || !exports.STRING.isNumeric(value))
            return false;
        const numbers = value.split('');
        // Check for all unique numbers
        const unique = numbers.filter((n, index, self) => self.indexOf(n) === index);
        if (unique.length === 1)
            return false;
        let check = 0;
        numbers.forEach((n, index) => {
            if (index >= 9)
                return;
            check += (10 - index) * +n;
        });
        check = check % 11;
        check = check < 2 ? check : 11 - check;
        return check === +numbers[9];
    },
    isNumeric: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.NUMERIC.get().test(value),
    isObjectId: (value) => {
        if (!value_1.VALUE.isString(value))
            return false;
        if (value.length === 12) {
            const bytes = Buffer.from(value);
            return bytes.byteLength === 12;
        }
        else if (value.length === 24)
            return /^[0-9a-fA-F]{24}$/.test(value);
        return false;
    },
    isTime: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.TIME.get().test(value),
    isUrl: (value) => value_1.VALUE.isString(value) && regex_library_1.RegX.URL.get(true).test(value),
};
//# sourceMappingURL=string.js.map