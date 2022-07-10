"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decWord = (n, titles) => {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
        return titles[2];
    }
    if (n1 > 1 && n1 < 5) {
        return titles[1];
    }
    if (n1 === 1) {
        return titles[0];
    }
    return titles[2];
};
exports.default = decWord;
