---
title: "summaryQuantiles"
---

> **summaryQuantiles**(`arr`, `probs?`, `options?`): `any`

Defined in: [core/math.js:276](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/math.js#L276)

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
