"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING = void 0;
const rx = __importStar(require("regex-library"));
exports.STRING = {
    isEmail: (value) => rx.EMAIL.get().test(value.toLowerCase()),
    isUrl: (value) => rx.URL.get(true).test(value),
    isMobile: (value) => rx.MOBILE.get().test(value),
    isNumeric: (value) => rx.NUMERIC.get().test(value),
    isDomain: (value) => rx.DOMAIN.get().test(value),
    isDate: (value) => rx.DATE.get().test(value),
    isTime: (value) => rx.TIME.get().test(value),
    isJsonDate: (value) => rx.JSON_DATE.get().test(value),
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