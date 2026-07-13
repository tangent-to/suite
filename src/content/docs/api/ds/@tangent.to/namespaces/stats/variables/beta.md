---
title: "beta"
---

> `const` **beta**: `object`

Defined in: [stats/distribution.js:155](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/stats/distribution.js#L155)

## Type Declaration

### cdf()

> **cdf**(`x`, `params?`): `number`

Cumulative distribution function

#### Parameters

##### x

`number`

Value in [0, 1]

##### params?

`any` = `{}`

{alpha, beta}

#### Returns

`number`

Cumulative probability

### pdf()

> **pdf**(`x`, `params?`): `number`

Probability density function

#### Parameters

##### x

`number`

Value in [0, 1]

##### params?

`any` = `{}`

{alpha, beta}

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

{alpha, beta}

#### Returns

`number`

Quantile
