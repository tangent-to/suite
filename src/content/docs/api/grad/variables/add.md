---
title: "add"
---

> `const` **add**: (...`args`) => `any`

Defined in: [ops.js:231](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L231)

Sum of two or more operands, elementwise, broadcasting a scalar against
anything and a vector against the rows of a matrix.

## Parameters

### args

...`any`[]

## Returns

`any`

## Example

```ts
const mu = add(intercept, mul(slope, X), seasonOffset);
```
