---
title: "percentile"
---

> **percentile**(`arr`, `value`, `options?`): `number`

Defined in: [ds/src/core/math.js:256](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/math.js#L256)

Compute the proportion of values less than or equal to a given value

## Parameters

### arr

`number`[]

Array of numbers

### value

`number`

Threshold value

### options?

Options

#### naOmit?

`boolean`

Omit non-finite values instead of throwing

## Returns

`number`

Proportion in [0, 1], or NaN if empty
