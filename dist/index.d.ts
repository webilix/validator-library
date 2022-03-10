export declare const Validator: {
    ARRAY: {
        isUnique: (arr: any[]) => boolean;
        isIn: (values: any[], arr: any[]) => boolean;
    };
    STRING: {
        isEmail: (value: string) => boolean;
        isUrl: (value: string) => boolean;
        isMobile: (value: string) => boolean;
        isNumeric: (value: string) => boolean;
        isDomain: (value: string) => boolean;
        isDate: (value: string) => boolean;
        isTime: (value: string) => boolean;
        isJsonDate: (value: string) => boolean;
        isObjectId: (value: string) => boolean;
        isNationalCode: (value: string) => boolean;
        isBankCard: (value: string) => boolean;
    };
    VALUE: {
        isNull: (value: any) => boolean;
        isEmpty: (value: any) => boolean;
        isString: (value: any) => boolean;
        isNumber: (value: any) => boolean;
        isBoolean: (value: any) => boolean;
        isDate: (value: any) => boolean;
        isArray: (value: any) => boolean;
        isObject: (value: any) => boolean;
    };
};
//# sourceMappingURL=index.d.ts.map