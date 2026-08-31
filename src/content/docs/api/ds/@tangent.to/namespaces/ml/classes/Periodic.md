---
title: "Periodic"
---

Defined in: [ml/kernels/periodic.js:15](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L15)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new Periodic**(`lengthScale?`, `period?`, `variance?`): `Periodic`

Defined in: [ml/kernels/periodic.js:21](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L21)

#### Parameters

##### lengthScale?

`number` = `1.0`

Length scale (default: 1.0)

##### period?

`number` = `1.0`

Period length (default: 1.0)

##### variance?

`number` = `1.0`

Signal variance (default: 1.0)

#### Returns

`Periodic`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### lengthScale

> **lengthScale**: `number`

Defined in: [ml/kernels/periodic.js:23](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L23)

***

### period

> **period**: `number`

Defined in: [ml/kernels/periodic.js:24](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L24)

***

### variance

> **variance**: `number`

Defined in: [ml/kernels/periodic.js:25](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L25)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/base.js#L30)

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

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/periodic.js:28](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L28)

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

Defined in: [ml/kernels/periodic.js:41](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L41)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### lengthScale

> **lengthScale**: `number`

##### period

> **period**: `number`

##### variance

> **variance**: `number`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/periodic.js:49](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kernels/periodic.js#L49)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### lengthScale

`any`

###### period

`any`

###### variance

`any`

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
