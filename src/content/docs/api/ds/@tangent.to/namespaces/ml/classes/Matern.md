---
title: "Matern"
---

Defined in: [ml/kernels/matern.js:13](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L13)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new Matern**(`lengthScaleOrOpts?`, `nu?`, `variance?`): `Matern`

Defined in: [ml/kernels/matern.js:31](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L31)

#### Parameters

##### lengthScaleOrOpts?

`any` = `1.0`

a length scale, one
  per input dimension (ARD), or an options object

##### nu?

`number` = `1.5`

##### variance?

`number` = `1.0`

#### Returns

`Matern`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### blocks

> **blocks**: `any`

Defined in: [ml/kernels/matern.js:55](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L55)

***

### lengthScale

> **lengthScale**: `any`

Defined in: [ml/kernels/matern.js:47](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L47)

***

### lengthScaleBounds

> **lengthScaleBounds**: `any`

Defined in: [ml/kernels/matern.js:57](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L57)

***

### nu

> **nu**: `any`

Defined in: [ml/kernels/matern.js:48](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L48)

***

### variance

> **variance**: `any`

Defined in: [ml/kernels/matern.js:49](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L49)

***

### varianceBounds

> **varianceBounds**: `any`

Defined in: [ml/kernels/matern.js:58](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L58)

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

> **compute**(`x1`, `x2`): `any`

Defined in: [ml/kernels/matern.js:73](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L73)

Compute covariance between two points

#### Parameters

##### x1

`any`

First point

##### x2

`any`

Second point

#### Returns

`any`

Covariance value

#### Overrides

[`Kernel`](Kernel.md).[`compute`](Kernel.md#compute)

***

### getParams()

> **getParams**(): `object`

Defined in: [ml/kernels/matern.js:112](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L112)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### lengthScale

> **lengthScale**: `any`

##### nu

> **nu**: `any`

##### variance

> **variance**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/matern.js:120](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/kernels/matern.js#L120)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### amplitude

`any`

###### lengthScale

`any`

###### nu

`any`

###### variance

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
