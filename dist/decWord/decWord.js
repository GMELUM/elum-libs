"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decWord = (n, words) => words[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
exports.default = decWord;
