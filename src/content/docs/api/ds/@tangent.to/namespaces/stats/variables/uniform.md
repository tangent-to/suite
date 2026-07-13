---
title: "uniform"
---

> `const` **uniform**: `object`

Defined in: [stats/distribution.js:58](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/stats/distribution.js#L58)

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
