---
title: "Matern"
---

Defined in: [ml/kernels/matern.js:13](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L13)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new Matern**(`lengthScaleOrOpts?`, `nu?`, `variance?`): `Matern`

Defined in: [ml/kernels/matern.js:14](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L14)

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

> **lengthScale**: `any`

Defined in: [ml/kernels/matern.js:23](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L23)

***

### nu

> **nu**: `any`

Defined in: [ml/kernels/matern.js:24](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L24)

***

### variance

> **variance**: `any`

Defined in: [ml/kernels/matern.js:25](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L25)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/base.js:30](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/base.js#L30)

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

Defined in: [ml/kernels/base.js:76](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/base.js#L76)

Clone the kernel with the same parameters

#### Returns

[`Kernel`](Kernel.md)

New kernel instance

#### Inherited from

[`Kernel`](Kernel.md).[`clone`](Kernel.md#clone)

***

### compute()

> **compute**(`x1`, `x2`): `any`

Defined in: [ml/kernels/matern.js:39](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L39)

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

Defined in: [ml/kernels/matern.js:76](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L76)

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

Defined in: [ml/kernels/matern.js:84](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/matern.js#L84)

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
