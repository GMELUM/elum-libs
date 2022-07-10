"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clamp = (value, min, max) => value > min ? (value < max ? value : max) : min;
exports.default = clamp;
