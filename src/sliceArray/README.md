# sliceArray

Функция для разделения массива на подмассивы N размера.

> **es6**

```ts

import { sliceArray } from  "elum-libs";

const  array  = [1,2,3,4,5];

sliceArray(1,array); // [[1],[2],[3],[4],[5]]
sliceArray(2,array); // [[1,2],[3,4],[5]]
sliceArray(3,array); // [[1,2,3],[4,5]]
sliceArray(3,array); // [[1,2,3,4],[5]]
sliceArray(5,array); // [[1,2,3,4,5]]
sliceArray(6,array); // [[1,2,3,4,5]]

```
> **es5**
```js

const { sliceArray } =  requeire("elum-libs");

const  array  = [1,2,3,4,5];

sliceArray(1,array); // [[1],[2],[3],[4],[5]]
sliceArray(2,array); // [[1,2],[3,4],[5]]
sliceArray(3,array); // [[1,2,3],[4,5]]
sliceArray(3,array); // [[1,2,3,4],[5]]
sliceArray(5,array); // [[1,2,3,4,5]]
sliceArray(6,array); // [[1,2,3,4,5]]

```