"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
const regex_library_1 = require("regex-library");
exports.STRING = {
    isEmail: (value) => regex_library_1.RrgX.EMAIL.get().test(value.toLowerCase()),
    isUrl: (value) => regex_library_1.RrgX.URL.get(true).test(value),
    isMobile: (value) => regex_library_1.RrgX.MOBILE.get().test(value),
    isNumeric: (value) => regex_library_1.RrgX.NUMERIC.get().test(value),
    isDomain: (value) => regex_library_1.RrgX.DOMAIN.get().test(value),
    isDate: (value) => regex_library_1.RrgX.DATE.get().test(value),
    isTime: (value) => regex_library_1.RrgX.TIME.get().test(value),
    isJsonDate: (value) => regex_library_1.RrgX.JSON_DATE.get().test(value),
    isObjectId: (value) => {
        if (value.length === 12) {
            const bytes = Buffer.from(value);
            return bytes.byteLength === 12;
        }
        else if (value.length === 24)
            return /^[0-9a-fA-F]{24}$/.test(value);
        return false;
    },
    isNationalCode: (value) => {
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
    isBankCard: (value) => {
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
};
//# sourceMappingURL=string.js.map