---
title: "quantile"
---

> **quantile**(`arr`, `p`, `options?`): `number` \| `number`[]

Defined in: [core/math.js:205](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/math.js#L205)

Compute the quantile(s) of an array

## Parameters

### arr

`number`[]

Array of numbers

### p

`number` \| `number`[]

Probability in [0, 1], or an array of probabilities

### options?

Options

#### method?

`string`

Interpolation method ('linear' or nearest)

#### naOmit?

`boolean`

Omit non-finite values instead of throwing

## Returns

`number` \| `number`[]

Quantile value, or array of quantiles if p is an array
