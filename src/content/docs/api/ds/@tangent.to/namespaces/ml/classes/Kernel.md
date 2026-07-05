---
title: "Kernel"
---

Defined in: [ds/src/ml/kernels/base.js:13](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L13)

Abstract base class for GP kernels

## Extended by

- [`RBF`](RBF.md)
- [`Periodic`](Periodic.md)
- [`RationalQuadratic`](RationalQuadratic.md)
- [`ConstantKernel`](ConstantKernel.md)
- [`SumKernel`](SumKernel.md)
- [`Matern`](Matern.md)
- [`DotProduct`](DotProduct.md)

## Constructors

### Constructor

> **new Kernel**(): `Kernel`

#### Returns

`Kernel`

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ds/src/ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L30)

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

***

### clone()

> **clone**(): `Kernel`

Defined in: [ds/src/ml/kernels/base.js:76](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L76)

Clone the kernel with the same parameters

#### Returns

`Kernel`

New kernel instance

***

### compute()

> **compute**(`_x1`, `_x2`): `number`

Defined in: [ds/src/ml/kernels/base.js:20](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L20)

Compute covariance between two points

#### Parameters

##### \_x1

`any`

##### \_x2

`any`

#### Returns

`number`

Covariance value

***

### getParams()

> **getParams**(): `any`

Defined in: [ds/src/ml/kernels/base.js:60](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L60)

Get kernel hyperparameters

#### Returns

`any`

Hyperparameters

***

### setParams()

> **setParams**(`_params`): `void`

Defined in: [ds/src/ml/kernels/base.js:68](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L68)

Set kernel hyperparameters

#### Parameters

##### \_params

`any`

#### Returns

`void`
