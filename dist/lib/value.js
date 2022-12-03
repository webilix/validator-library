"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALUE = void 0;
exports.VALUE = {
    isArray: (value) => Array.isArray(value),
    isBoolean: (value) => typeof value === 'boolean',
    isDate: (value) => {
        if (Object.prototype.toString.call(value) !== '[object Date]')
            return false;
        const date = value;
        return !isNaN(date.getTime());
    },
    isEmpty: (value) => exports.VALUE.isNull(value) ||
        value === '' ||
        (exports.VALUE.isArray(value) && value.length === 0) ||
        (exports.VALUE.isObject(value) && Object.keys(value).length === 0),
    isNull: (value) => value === null || value === undefined,
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    isObject: (value) => value !== null && typeof value == 'object' && !exports.VALUE.isArray(value) && !exports.VALUE.isDate(value),
    isString: (value) => typeof value === 'string',
};
//# sourceMappingURL=value.js.map