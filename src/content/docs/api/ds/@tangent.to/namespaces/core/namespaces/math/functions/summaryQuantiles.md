---
title: "summaryQuantiles"
---

> **summaryQuantiles**(`arr`, `probs?`, `options?`): `any`

Defined in: [core/math.js:276](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/math.js#L276)

Compute a set of quantiles keyed by probability

## Parameters

### arr

`number`[]

Array of numbers

### probs?

`number`[] = `...`

Probabilities in [0, 1] to compute

### options?

Options

#### method?

`string`

Interpolation method ('linear' or nearest)

#### naOmit?

`boolean`

Omit non-finite values instead of throwing

## Returns

`any`

Object mapping each probability to its quantile value
