export const VALUE = {
    isNull: (value: any): boolean => value === null || value === undefined,

    isEmpty: (value: any): boolean =>
        VALUE.isNull(value) ||
        value === '' ||
        (VALUE.isArray(value) && value.length === 0) ||
        (VALUE.isObject(value) && Object.keys(value).length === 0),

    isString: (value: any): boolean => typeof value === 'string',

    isNumber: (value: any): boolean => typeof value === 'number' && !isNaN(value),

    isBoolean: (value: any): boolean => typeof value === 'boolean',

    isDate: (value: any): boolean => {
        if (Object.prototype.toString.call(value) !== '[object Date]') return false;
        const date: Date = value;
        return !isNaN(date.getTime());
    },

    isArray: (value: any): boolean => Array.isArray(value),

    isObject: (value: any): boolean =>
        value !== null && typeof value == 'object' && !VALUE.isArray(value) && !VALUE.isDate(value),
};
