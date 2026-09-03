---
title: "beta"
---

> `const` **beta**: `object`

Defined in: [stats/distribution.js:155](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/stats/distribution.js#L155)

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
