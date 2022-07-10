import clamp from "./clamp";

test("clamp", () => {
  expect(clamp(100,50,100)).toEqual(100);
  expect(clamp(75,50,100)).toEqual(75);
  expect(clamp(150,50,100)).toEqual(100);
  expect(clamp(0,50,100)).toEqual(50);
  expect(clamp(-100,50,100)).toEqual(50);
})
