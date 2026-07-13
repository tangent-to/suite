---
title: "SumKernel"
---

Defined in: [ml/kernels/sum.js:11](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L11)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new SumKernel**(`opts?`): `SumKernel`

Defined in: [ml/kernels/sum.js:16](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L16)

#### Parameters

##### opts?

###### kernels

[`Kernel`](Kernel.md)[]

Array of kernel instances to sum

#### Returns

`SumKernel`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### kernels

> **kernels**: [`Kernel`](Kernel.md)[]

Defined in: [ml/kernels/sum.js:27](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L27)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/base.js#L30)

Compute covariance matrix between sets of points

#### Parameters

##### X1

`any`

First set of points (n1 x d)

##### X2?

`any` = `null`

Second set of points (n2 x d). If omitted, computes K(X1, X1)

#### Returns

`Matrix`

Covariance matrix (n1 x n2)

#### Inherited from

[`Kernel`](Kernel.md).[`call`](Kernel.md#call)

***

### clone()

> **clone**(): [`Kernel`](Kernel.md)

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/sum.js:30](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L30)

Compute covariance between two points

#### Parameters

##### x1

`any`

First point

##### x2

`any`

Second point

#### Returns

`number`

Covariance value

#### Overrides

[`Kernel`](Kernel.md).[`compute`](Kernel.md#compute)

***

### getParams()

> **getParams**(): `object`

Defined in: [ml/kernels/sum.js:34](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L34)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### kernels

> **kernels**: `object`[]

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/sum.js:43](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/kernels/sum.js#L43)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### kernels

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
