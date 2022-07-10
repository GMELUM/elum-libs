import timeAgo from "./timeAgo";

test("timeAgo", () => { 
  const date = new Date("07.10.2020");
  const [second, minute, hour, day] = [1000, 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000];
  const initDate = (value: number) => new Date(Date.now() - (value)).getTime();
  const staticDate = (value: number) => (date.getTime() + value);

  expect(timeAgo(initDate(second))).toEqual("1 секунду назад");
  expect(timeAgo(initDate(30 * second))).toEqual("30 секунд назад");
  expect(timeAgo(initDate(minute))).toEqual("1 минуту назад");
  expect(timeAgo(initDate(59 * minute))).toEqual("59 минут назад");
  expect(timeAgo(initDate(hour))).toEqual("час назад");
  expect(timeAgo(initDate(2 * hour))).toEqual("два часа назад");
  expect(timeAgo(initDate(3 * hour))).toEqual("три часа назад");
  expect(timeAgo(staticDate(0))).toEqual("10 июл 2020 г. ");
  expect(timeAgo(staticDate(day * 4))).toEqual("14 июл 2020 г. ");
  expect(timeAgo(staticDate(day * 10))).toEqual("20 июл 2020 г. ");
  expect(timeAgo(new Date("01.01.1997").getTime())).toEqual("1 янв 1997 г. ");
})
