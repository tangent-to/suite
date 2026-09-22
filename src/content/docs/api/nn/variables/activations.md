---
title: "activations"
---

> `const` **activations**: `object`

Defined in: [layers/dense.js:8](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/layers/dense.js#L8)

Activations, as expressions. `relu`, `tanh` and `sigmoid` are grad kernels;
the rest are written in them and cost a few nodes each.

## Type Declaration

### elu

> **elu**: (`x`) => `any`

#### Parameters

##### x

`any`

#### Returns

`any`

### gelu

> **gelu**: (`x`) => `any`

#### Parameters

##### x

`any`

#### Returns

`any`

### linear

> **linear**: (`x`) => `any`

#### Parameters

##### x

`any`

#### Returns

`any`

### relu

> **relu**: `any`

### sigmoid

> **sigmoid**: `any`

### softplus

> **softplus**: (`x`) => `any`

#### Parameters

##### x

`any`

#### Returns

`any`

### tanh

> **tanh**: `any`
