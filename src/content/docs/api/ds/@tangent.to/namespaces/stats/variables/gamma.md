---
title: "gamma"
---

> `const` **gamma**: `object`

Defined in: [stats/distribution.js:117](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/stats/distribution.js#L117)

## Type Declaration

### cdf()

> **cdf**(`x`, `params?`): `number`

Cumulative distribution function

#### Parameters

##### x

`number`

Value

##### params?

`any` = `{}`

{shape, scale} or {shape, rate}

#### Returns

`number`

Cumulative probability

### pdf()

> **pdf**(`x`, `params?`): `number`

Probability density function

#### Parameters

##### x

`number`

Value (x > 0)

##### params?

`any` = `{}`

{shape, scale} or {shape, rate}

#### Returns

`number`

Probability density

### quantile()

> **quantile**(`p`, `params?`): `number`

Quantile function (inverse CDF)

#### Parameters

##### p

`number`

Probability

##### params?

`any` = `{}`

{shape, scale} or {shape, rate}

#### Returns

`number`

Quantile
