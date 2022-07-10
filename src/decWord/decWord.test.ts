import decWord from "./decWord";

test("decWord", () => {
  expect(decWord(1, ["рубль", "рубля", "рублей"])).toEqual("рубль");
  expect(decWord(2, ["рубль", "рубля", "рублей"])).toEqual("рубля");
  expect(decWord(5, ["рубль", "рубля", "рублей"])).toEqual("рублей");
  expect(decWord(11, ["рубль", "рубля", "рублей"])).toEqual("рублей");
  expect(decWord(211, ["рубль", "рубля", "рублей"])).toEqual("рублей");
});
