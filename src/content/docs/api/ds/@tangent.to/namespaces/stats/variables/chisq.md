---
title: "chisq"
---

> `const` **chisq**: `object`

Defined in: [stats/distribution.js:196](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/stats/distribution.js#L196)

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

{df}

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

{df}

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

{df}

#### Returns

`number`

Quantile
