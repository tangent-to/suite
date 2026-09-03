---
title: "distributions"
---

> `const` **distributions**: `object`

Defined in: [ml/tuning.js:308](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/tuning.js#L308)

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
