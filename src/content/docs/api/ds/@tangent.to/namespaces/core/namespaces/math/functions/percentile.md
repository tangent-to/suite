---
title: "percentile"
---

> **percentile**(`arr`, `value`, `options?`): `number`

Defined in: [core/math.js:256](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/math.js#L256)

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
