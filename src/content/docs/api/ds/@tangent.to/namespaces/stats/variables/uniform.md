---
title: "uniform"
---

> `const` **uniform**: `object`

Defined in: [ds/src/stats/distribution.js:58](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/distribution.js#L58)

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
