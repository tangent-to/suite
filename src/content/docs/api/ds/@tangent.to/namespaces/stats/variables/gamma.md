---
title: "gamma"
---

> `const` **gamma**: `object`

Defined in: [stats/distribution.js:117](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/stats/distribution.js#L117)

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
