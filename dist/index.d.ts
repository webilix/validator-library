export declare const Validator: {
    ARRAY: {
        isIn: (values: any[], arr: any[]) => boolean;
        isUnique: (arr: any[]) => boolean;
    };
    STRING: {
        isBankCard: (value: string) => boolean;
        isDate: (value: string) => boolean;
        isDomain: (value: string) => boolean;
        isEmail: (value: string) => boolean;
        isHexColor: (value: string) => boolean;
        isIP4: (value: string) => boolean;
        isJsonDate: (value: string) => boolean;
        isMobile: (value: string) => boolean;
        isNationalCode: (value: string) => boolean;
        isNumeric: (value: string) => boolean;
        isObjectId: (value: string) => boolean;
        isTime: (value: string) => boolean;
        isUrl: (value: string) => boolean;
    };
    VALUE: {
        isArray: (value: any) => boolean;
        isBoolean: (value: any) => boolean;
        isDate: (value: any) => boolean;
        isEmpty: (value: any) => boolean;
        isNull: (value: any) => boolean;
        isNumber: (value: any) => boolean;
        isObject: (value: any) => boolean;
        isString: (value: any) => boolean;
    };
};
//# sourceMappingURL=index.d.ts.map