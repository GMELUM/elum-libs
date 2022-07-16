import { toShort, decWord, timeAgo, clamp, sliceArray } from "./dist";

import Benchmark from "benchmark";

var suite = new Benchmark.Suite();

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const time = new Date().getTime() - 6000;

suite
  .add("toShort", () => toShort(10000000))
  .add("clamp", () => clamp(0, -100, 100))
  .add("decWord", () => decWord(21, ["рубль", "рубля", "рублей"]))
  .add("sliceArray", () => sliceArray(21, array))
  .add("timeAgo", () => timeAgo(time))
  .on("cycle", (event: any) => console.log(String(event.target)))
  .run({ async: false });
  