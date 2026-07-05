---
title: "ConstantKernel"
---

Defined in: [ds/src/ml/kernels/constant.js:11](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L11)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new ConstantKernel**(`valueOrOpts?`): `ConstantKernel`

Defined in: [ds/src/ml/kernels/constant.js:15](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L15)

#### Parameters

##### valueOrOpts?

`any` = `1.0`

Constant value or options object

#### Returns

`ConstantKernel`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### value

> **value**: `any`

Defined in: [ds/src/ml/kernels/constant.js:19](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L19)

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

#### Inherited from

[`Kernel`](Kernel.md).[`call`](Kernel.md#call)

***

### clone()

> **clone**(): [`Kernel`](Kernel.md)

Defined in: [ds/src/ml/kernels/base.js:76](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/base.js#L76)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(): `any`

Defined in: [ds/src/ml/kernels/constant.js:25](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L25)

Compute covariance between two points

#### Returns

`any`

Covariance value

#### Overrides

[`Kernel`](Kernel.md).[`compute`](Kernel.md#compute)

***

### getParams()

> **getParams**(): `object`

Defined in: [ds/src/ml/kernels/constant.js:29](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L29)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### value

> **value**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ds/src/ml/kernels/constant.js:33](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/constant.js#L33)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### amplitude

`any`

###### value

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
