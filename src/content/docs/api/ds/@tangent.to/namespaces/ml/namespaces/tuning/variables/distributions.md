---
title: "distributions"
---

> `const` **distributions**: `object`

Defined in: [ds/src/ml/tuning.js:308](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/tuning.js#L308)

Create parameter distribution objects

## Type Declaration

### choice

> **choice**: (`options`) => `any`

Choice from options

#### Parameters

##### options

`any`[]

#### Returns

`any`

### loguniform

> **loguniform**: (`low`, `high`) => `any`

Log-uniform distribution (for learning rates, etc.)

#### Parameters

##### low

`number`

##### high

`number`

#### Returns

`any`

### randint

> **randint**: (`low`, `high`) => `any`

Random integer

#### Parameters

##### low

`number`

##### high

`number`

#### Returns

`any`

### uniform

> **uniform**: (`low`, `high`) => `any`

Uniform distribution

#### Parameters

##### low

`number`

##### high

`number`

#### Returns

`any`
