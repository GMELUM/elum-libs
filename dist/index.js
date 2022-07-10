"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = exports.toShort = exports.decWord = exports.timeAgo = void 0;
var timeAgo_1 = require("./timeAgo/timeAgo");
Object.defineProperty(exports, "timeAgo", { enumerable: true, get: function () { return __importDefault(timeAgo_1).default; } });
var decWord_1 = require("./decWord/decWord");
Object.defineProperty(exports, "decWord", { enumerable: true, get: function () { return __importDefault(decWord_1).default; } });
var toShort_1 = require("./toShort/toShort");
Object.defineProperty(exports, "toShort", { enumerable: true, get: function () { return __importDefault(toShort_1).default; } });
var clamp_1 = require("./clamp/clamp");
Object.defineProperty(exports, "clamp", { enumerable: true, get: function () { return __importDefault(clamp_1).default; } });
