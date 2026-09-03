---
title: "RBF"
---

Defined in: [ml/kernels/rbf.js:15](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L15)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new RBF**(`lengthScaleOrOpts?`, `variance?`): `RBF`

Defined in: [ml/kernels/rbf.js:36](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L36)

#### Parameters

##### lengthScaleOrOpts?

`any` = `1.0`

a length scale, one
  per input dimension (ARD), or an options object with `lengthScale`,
  `variance`, and optionally `blocks` (ARD by block, see Matern),
  `lengthScaleBounds` and `varianceBounds` (`[low, high]`, honoured by
  hyperparameter optimization)

##### variance?

`number` = `1.0`

#### Returns

`RBF`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### blocks

> **blocks**: `any`

Defined in: [ml/kernels/rbf.js:48](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L48)

***

### lengthScale

> **lengthScale**: `any`

Defined in: [ml/kernels/rbf.js:45](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L45)

***

### lengthScaleBounds

> **lengthScaleBounds**: `any`

Defined in: [ml/kernels/rbf.js:49](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L49)

***

### variance

> **variance**: `any`

Defined in: [ml/kernels/rbf.js:46](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L46)

***

### varianceBounds

> **varianceBounds**: `any`

Defined in: [ml/kernels/rbf.js:50](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L50)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/base.js#L30)

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

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/rbf.js:59](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L59)

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

Defined in: [ml/kernels/rbf.js:73](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L73)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### lengthScale

> **lengthScale**: `any`

##### variance

> **variance**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/rbf.js:81](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/rbf.js#L81)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### amplitude

`any`

###### lengthScale

`any`

###### variance

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
