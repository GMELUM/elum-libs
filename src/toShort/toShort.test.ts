import toShort from "./toShort";

test("toShort", () => {
  expect(toShort(1)).toEqual("1");
  expect(toShort(1000)).toEqual("1k");
  expect(toShort(10000)).toEqual("10k");
  expect(toShort(100000)).toEqual("100k");
  expect(toShort(1000000)).toEqual("1M");
  expect(toShort(1000001)).toEqual("1M");
  expect(toShort(1010001)).toEqual("1M");
  expect(toShort(9000001)).toEqual("9M");
  expect(toShort(9100000)).toEqual("9.1M");
  expect(toShort(9900000)).toEqual("9.9M");
})
