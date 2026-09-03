---
title: "add"
---

> `const` **add**: (...`args`) => `any`

Defined in: [ops.js:187](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L187)

Sum of two or more operands, elementwise, broadcasting a scalar against
anything.

## Parameters

### args

...`any`[]

## Returns

`any`

## Example

```ts
const mu = add(intercept, mul(slope, X), seasonOffset);
```
