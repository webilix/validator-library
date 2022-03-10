"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY = void 0;
exports.ARRAY = {
    isUnique: (arr) => arr.filter((v, index, self) => self.indexOf(v) === index).length === arr.length,
    isIn: (values, arr) => {
        for (const v of values)
            if (!arr.includes(v))
                return false;
        return true;
    },
};
//# sourceMappingURL=array.js.map