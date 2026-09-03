---
title: "percentile"
---

> **percentile**(`arr`, `value`, `options?`): `number`

Defined in: [core/math.js:256](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/math.js#L256)

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
