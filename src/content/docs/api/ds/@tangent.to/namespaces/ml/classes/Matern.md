---
title: "Matern"
---

Defined in: [ml/kernels/matern.js:13](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L13)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new Matern**(`lengthScaleOrOpts?`, `nu?`, `variance?`): `Matern`

Defined in: [ml/kernels/matern.js:14](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L14)

#### Parameters

##### lengthScaleOrOpts?

`number` = `1.0`

##### nu?

`number` = `1.5`

##### variance?

`number` = `1.0`

#### Returns

`Matern`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### lengthScale

> **lengthScale**: `number`

Defined in: [ml/kernels/matern.js:27](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L27)

***

### nu

> **nu**: `number`

Defined in: [ml/kernels/matern.js:28](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L28)

***

### variance

> **variance**: `number`

Defined in: [ml/kernels/matern.js:29](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L29)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/base.js#L30)

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

Defined in: [ml/kernels/base.js:87](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/base.js#L87)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/matern.js:43](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L43)

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

Defined in: [ml/kernels/matern.js:80](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L80)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### lengthScale

> **lengthScale**: `number`

##### nu

> **nu**: `number`

##### variance

> **variance**: `number`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/matern.js:88](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/matern.js#L88)

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
