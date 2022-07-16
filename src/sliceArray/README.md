# sliceArray

Функция для разделения массива на подмассивы N размера.

> **es6**

```ts
import { sliceArray } from "elum-libs";

const array = [1, 2, 3, 4, 5];

sliceArray(1, array); // [[1],[2],[3],[4],[5]]
sliceArray(2, array); // [[1,2],[3,4],[5]]
sliceArray(3, array); // [[1,2,3],[4,5]]
sliceArray(3, array); // [[1,2,3,4],[5]]
sliceArray(5, array); // [[1,2,3,4,5]]
sliceArray(6, array); // [[1,2,3,4,5]]
```

> **es5**

```js
const { sliceArray } = requeire("elum-libs");

const array = [1, 2, 3, 4, 5];

sliceArray(1, array); // [[1],[2],[3],[4],[5]]
sliceArray(2, array); // [[1,2],[3,4],[5]]
sliceArray(3, array); // [[1,2,3],[4,5]]
sliceArray(3, array); // [[1,2,3,4],[5]]
sliceArray(5, array); // [[1,2,3,4,5]]
sliceArray(6, array); // [[1,2,3,4,5]]
```

> **benchmark**

```js
sliceArray(2,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
// sliceArray x 69,968,375 ops/sec ±0.82% (95 runs sampled);
```
