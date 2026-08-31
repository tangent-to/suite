---
title: "normal"
---

> `const` **normal**: `object`

Defined in: [stats/distribution.js:20](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/stats/distribution.js#L20)

Normal distribution

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

{mean, sd}

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

{mean, sd}

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

{mean, sd}

#### Returns

`number`

Quantile
