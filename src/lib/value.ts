export const VALUE = {
    isArray: (value: any): boolean => Array.isArray(value),

    isBoolean: (value: any): boolean => typeof value === 'boolean',

    isDate: (value: any): boolean => {
        if (Object.prototype.toString.call(value) !== '[object Date]') return false;
        const date: Date = value;
        return !isNaN(date.getTime());
    },

    isEmpty: (value: any): boolean =>
        VALUE.isNull(value) ||
        value === '' ||
        (VALUE.isArray(value) && value.length === 0) ||
        (VALUE.isObject(value) && Object.keys(value).length === 0),

    isNull: (value: any): boolean => value === null || value === undefined,

    isNumber: (value: any): boolean => typeof value === 'number' && !isNaN(value),

    isObject: (value: any): boolean =>
        value !== null && typeof value == 'object' && !VALUE.isArray(value) && !VALUE.isDate(value),

    isString: (value: any): boolean => typeof value === 'string',
};
