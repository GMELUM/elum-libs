# toShort

Функция для сокращения числа до формата N + "k" "M" "G" "T" "P".

> **es6**

```ts
import { toShort } from "elum-libs";

const ruParts = ["", "тыс.", "млн", "млдр", "трлн"];

toShort(1); // "1"
toShort(1000); // "1k"
toShort(10000); // "10k"
toShort(100000); // "100k"
toShort(1000000); // "1M"
toShort(1000001); // "1M"
toShort(1010001); // "1M"
toShort(9000001); // "9M"
toShort(9100000); // "9.1M"
toShort(9900000); // "9.9M"

toShort(1000, ruParts); // "1тыс."
toShort(1000000, ruParts); // "1млн"
```

> **es5**

```js
const { toShort } = requeire("elum-libs");

const ruParts = ["", "тыс.", "млн", "млдр", "трлн"];

toShort(1); // "1"
toShort(1000); // "1k"
toShort(10000); // "10k"
toShort(100000); // "100k"
toShort(1000000); // "1M"
toShort(1000001); // "1M"
toShort(1010001); // "1M"
toShort(9000001); // "9M"
toShort(9100000); // "9.1M"
toShort(9900000); // "9.9M"

toShort(1000, ruParts); // "1тыс."
toShort(1000000, ruParts); // "1млн"
```
