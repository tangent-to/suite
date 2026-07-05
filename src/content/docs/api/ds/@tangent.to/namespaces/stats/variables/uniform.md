---
title: "uniform"
---

> `const` **uniform**: `object`

Defined in: [ds/src/stats/distribution.js:58](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/stats/distribution.js#L58)

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

{min, max}

#### Returns

`number`

Cumulative probability

### pdf()

> **pdf**(`x`, `params?`): `number`

Probability density function

#### Parameters

##### x

`number`

Value

##### params?

`any` = `{}`

{min, max}

#### Returns

`number`

Probability density

### quantile()

> **quantile**(`p`, `params?`): `number`

Quantile function

#### Parameters

##### p

`number`

Probability

##### params?

`any` = `{}`

{min, max}

#### Returns

`number`

Quantile
