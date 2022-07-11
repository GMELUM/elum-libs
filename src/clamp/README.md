# clamp

Функция для проверки вхождения числа в интервал от min до max и его корректировка.

> **es6**

```ts
import { clamp } from "elum-libs";

clamp(100, 50, 100); // 100
clamp(75, 50, 100); // 75
clamp(10, 50, 100); // 50
clamp(110, 50, 100); // 100
clamp(-100, 50, 100); // 50
```

> **es5**

```js
const { clamp } = requeire("elum-libs");

clamp(100, 50, 100); // 100
clamp(75, 50, 100); // 75
clamp(10, 50, 100); // 50
clamp(110, 50, 100); // 100
clamp(-100, 50, 100); // 50
```