---
title: "WhiteKernel"
---

Defined in: [ml/kernels/white.js:32](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L32)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new WhiteKernel**(`noiseLevelOrOpts?`): `WhiteKernel`

Defined in: [ml/kernels/white.js:41](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L41)

#### Parameters

##### noiseLevelOrOpts?

`any` = `1.0`

Noise variance, or an options
  object `{ noiseLevel }` (aliases: `noise_level`, `variance`)

#### Returns

`WhiteKernel`

#### Example

```ts
new WhiteKernel(0.1)
new WhiteKernel({ noiseLevel: 0.1 })
```

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### noiseLevel

> **noiseLevel**: `any`

Defined in: [ml/kernels/white.js:45](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L45)

## Methods

### call()

> **call**(`X1`, `X2?`): [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/kernels/white.js:67](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L67)

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

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `any`

Defined in: [ml/kernels/white.js:58](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L58)

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

Defined in: [ml/kernels/white.js:81](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L81)

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

Defined in: [ml/kernels/white.js:85](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/white.js#L85)

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
