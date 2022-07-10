"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toShort = (number, customParts) => {
    const parts = customParts || ["", "k", "M", "G", "T", "P"];
    const isNegative = number < 0;
    const positive = Math.abs(number);
    const index = Math.log10(positive) / 3 | 0;
    const scale = 10 ** (index * 3);
    const result = positive / scale;
    return parseFloat(`${isNegative ? "-" : ""}${result % 1 ? result.toFixed(1) : result}`) + parts[index];
};
exports.default = toShort;
