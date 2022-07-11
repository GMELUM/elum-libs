"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sliceArray = (count, array) => {
    if (array.length <= count) {
        return [array];
    }
    ;
    const segment = Math.ceil(array.length / count);
    return Array.from(Array(segment)).map((_, index) => {
        const min = index * count;
        const max = min + count;
        return array.slice(min, max);
    });
};
exports.default = sliceArray;
