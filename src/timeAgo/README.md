# timeAgo

Функция для расчета прошедшего времени от текущей даты до даты передаваемой функции в формате timestamp.

> **es6**

```ts
import { timeAgo } from "elum-libs";

const date = new Date("07.10.2020");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const initDate = (value: number) => new Date(Date.now() - value).getTime();
const staticDate = (value: number) => date.getTime() + value;

timeAgo(initDate(second)); // "1 секунду назад"
timeAgo(initDate(30 * second)); // "30 секунд назад"
timeAgo(initDate(minute)); // "1 минуту назад"
timeAgo(initDate(59 * minute)); // "59 минут назад"
timeAgo(initDate(hour)); // "час назад"
timeAgo(initDate(2 * hour)); // "два часа назад"
timeAgo(initDate(3 * hour)); // "три часа назад"
timeAgo(staticDate(0)); // "10 июл 2020 г."
timeAgo(staticDate(day * 4)); // "14 июл 2020 г."
timeAgo(staticDate(day * 10)); // "20 июл 2020 г."
timeAgo(new Date("01.01.1997").getTime()); // "1 янв 1997 г."
```

> **es5**

```js
const { timeAgo } = require("elum-libs");

const date = new Date("07.10.2020");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const initDate = (value: number) => new Date(Date.now() - value).getTime();
const staticDate = (value: number) => date.getTime() + value;

timeAgo(initDate(second)); // "1 секунду назад"
timeAgo(initDate(30 * second)); // "30 секунд назад"
timeAgo(initDate(minute)); // "1 минуту назад"
timeAgo(initDate(59 * minute)); // "59 минут назад"
timeAgo(initDate(hour)); // "час назад"
timeAgo(initDate(2 * hour)); // "два часа назад"
timeAgo(initDate(3 * hour)); // "три часа назад"
timeAgo(staticDate(0)); // "10 июл 2020 г."
timeAgo(staticDate(day * 4)); // "14 июл 2020 г."
timeAgo(staticDate(day * 10)); // "20 июл 2020 г."
timeAgo(new Date("01.01.1997").getTime()); // "1 янв 1997 г."
```

> **benchmark**

```js
const time = new Date().getTime() - 6000;
timeAgo(time);
// timeAgo x 2,964,086 ops/sec ±1.08% (93 runs sampled);
```
