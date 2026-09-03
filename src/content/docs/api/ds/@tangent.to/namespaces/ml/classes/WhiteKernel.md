---
title: "WhiteKernel"
---

Defined in: [ml/kernels/white.js:32](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L32)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new WhiteKernel**(`noiseLevelOrOpts?`): `WhiteKernel`

Defined in: [ml/kernels/white.js:45](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L45)

#### Parameters

##### noiseLevelOrOpts?

`any` = `1.0`

Noise variance, or an options
  object `{ noiseLevel, noiseLevelBounds }` (aliases: `noise_level`,
  `variance`, `noise_level_bounds`). `noiseLevelBounds` is `[low, high]`,
  honoured by hyperparameter optimization; a floor is the usual reason to
  set it, since marginal likelihood with many ARD length scales can drive
  the noise to zero and explain everything through the kernel.

#### Returns

`WhiteKernel`

#### Example

```ts
new WhiteKernel(0.1)
new WhiteKernel({ noiseLevel: 0.1, noiseLevelBounds: [0.05, 2] })
```

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### noiseLevel

> **noiseLevel**: `any`

Defined in: [ml/kernels/white.js:49](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L49)

***

### noiseLevelBounds

> **noiseLevelBounds**: `any`

Defined in: [ml/kernels/white.js:54](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L54)

## Methods

### call()

> **call**(`X1`, `X2?`): [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/kernels/white.js:76](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L76)

noiseLevel·I for K(X, X), all zeros for a cross-covariance K(X1, X2).
Overridden rather than left to the base pointwise loop so the distinction
rests on which matrix is being built, not on row identity.

#### Parameters

##### X1

`any`

##### X2?

`any` = `null`

#### Returns

[`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

#### Overrides

[`Kernel`](Kernel.md).[`call`](Kernel.md#call)

***

### clone()

> **clone**(): [`Kernel`](Kernel.md)

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `any`

Defined in: [ml/kernels/white.js:67](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L67)

Covariance between two observations. `noiseLevel` only when they are the
same observation — identified by reference, not by value, since the whole
point of white noise is that two readings of the same input are still
independent. Callers that mean "the variance at this point" pass the same
row twice (`compute(x, x)`), which is exactly the diagonal case.

#### Parameters

##### x1

`any`

##### x2

`any`

#### Returns

`any`

#### Overrides

[`Kernel`](Kernel.md).[`compute`](Kernel.md#compute)

***

### getParams()

> **getParams**(): `object`

Defined in: [ml/kernels/white.js:90](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L90)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### noiseLevel

> **noiseLevel**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/white.js:96](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/white.js#L96)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### noise_level

`any`

###### noiseLevel

`any`

###### variance

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
