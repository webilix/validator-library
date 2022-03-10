export const ARRAY = {
    isUnique: (arr: any[]): boolean =>
        arr.filter((v: any, index: number, self: string[]) => self.indexOf(v) === index).length === arr.length,

    isIn: (values: any[], arr: any[]): boolean => {
        for (const v of values) if (!arr.includes(v)) return false;
        return true;
    },
};
