---
title: "quantile"
---

> **quantile**(`arr`, `p`, `options?`): `number` \| `number`[]

Defined in: [core/math.js:205](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/math.js#L205)

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
