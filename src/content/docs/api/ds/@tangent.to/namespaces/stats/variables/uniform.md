---
title: "uniform"
---

> `const` **uniform**: `object`

Defined in: [stats/distribution.js:58](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/stats/distribution.js#L58)

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
