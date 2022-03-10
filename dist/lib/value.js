"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALUE = void 0;
exports.VALUE = {
    isNull: (value) => value === null || value === undefined,
    isEmpty: (value) => exports.VALUE.isNull(value) ||
        value === '' ||
        (exports.VALUE.isArray(value) && value.length === 0) ||
        (exports.VALUE.isObject(value) && Object.keys(value).length === 0),
    isString: (value) => typeof value === 'string',
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    isBoolean: (value) => typeof value === 'boolean',
    isDate: (value) => {
        if (Object.prototype.toString.call(value) !== '[object Date]')
            return false;
        const date = value;
        return !isNaN(date.getTime());
    },
    isArray: (value) => Array.isArray(value),
    isObject: (value) => value !== null && typeof value == 'object' && !exports.VALUE.isArray(value) && !exports.VALUE.isDate(value),
};
//# sourceMappingURL=value.js.map