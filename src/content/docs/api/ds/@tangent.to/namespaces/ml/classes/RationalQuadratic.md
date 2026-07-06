---
title: "RationalQuadratic"
---

Defined in: [ml/kernels/rational-quadratic.js:15](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L15)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new RationalQuadratic**(`lengthScaleOrOpts?`, `alpha?`, `variance?`): `RationalQuadratic`

Defined in: [ml/kernels/rational-quadratic.js:21](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L21)

#### Parameters

##### lengthScaleOrOpts?

`any` = `1.0`

Length scale or options object

##### alpha?

`number` = `1.0`

Scale mixture parameter (default: 1.0)

##### variance?

`number` = `1.0`

Signal variance (default: 1.0)

#### Returns

`RationalQuadratic`

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### alpha

> **alpha**: `any`

Defined in: [ml/kernels/rational-quadratic.js:32](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L32)

***

### lengthScale

> **lengthScale**: `any`

Defined in: [ml/kernels/rational-quadratic.js:31](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L31)

***

### variance

> **variance**: `any`

Defined in: [ml/kernels/rational-quadratic.js:33](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L33)

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

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/rational-quadratic.js:41](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L41)

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

Defined in: [ml/kernels/rational-quadratic.js:51](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L51)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### alpha

> **alpha**: `any`

##### lengthScale

> **lengthScale**: `any`

##### variance

> **variance**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params`): `void`

Defined in: [ml/kernels/rational-quadratic.js:59](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/kernels/rational-quadratic.js#L59)

Set kernel hyperparameters

#### Parameters

##### params

New parameters

###### alpha

`any`

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
