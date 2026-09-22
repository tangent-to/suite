---
title: "extent"
---

> **extent**(`arr`, `options?`): \[`number`, `number`\]

Defined in: [core/math.js:319](https://github.com/tangent-to/ds/blob/9dbc626cfabd94d37405b8d2e2c24fdf3fdfe65f/src/core/math.js#L319)

Compute the extent (min and max) of an array

## Parameters

### arr

`number`[]

Array of numbers

### options?

`any` = `{}`

Options { naOmit: boolean }

## Returns

\[`number`, `number`\]

[min, max] extent or [NaN, NaN] if empty

## Example

```ts
extent([3, 1, 4, 1, 5, 9]) // [1, 9]
extent([42]) // [42, 42]
extent([]) // [NaN, NaN]
```
