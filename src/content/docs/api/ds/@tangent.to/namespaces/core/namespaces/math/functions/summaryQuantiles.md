---
title: "summaryQuantiles"
---

> **summaryQuantiles**(`arr`, `probs?`, `options?`): `any`

Defined in: [core/math.js:276](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/math.js#L276)

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
