---
title: "SumKernel"
---

Defined in: [ml/kernels/sum.js:11](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L11)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new SumKernel**(`opts?`): `SumKernel`

Defined in: [ml/kernels/sum.js:16](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L16)

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

Defined in: [ml/kernels/sum.js:27](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L27)

## Methods

### call()

> **call**(`X1`, `X2?`): `Matrix`

Defined in: [ml/kernels/sum.js:42](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L42)

Sum the children's covariance MATRICES rather than their pointwise
`compute()` values. Identical numbers for kernels that are plain functions
of the input values, but a WhiteKernel is not one: it must know whether the
matrix being built is K(X, X) or a cross-covariance K(X1, X2), which only
`call()` can tell it. Delegating per element would silently drop the noise
term (or, worse, leak it into the train/test block).

#### Parameters

##### X1

`any`

##### X2?

`any` = `null`

#### Returns

`Matrix`

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

> **compute**(`x1`, `x2`): `number`

Defined in: [ml/kernels/sum.js:30](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L30)

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

Defined in: [ml/kernels/sum.js:55](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L55)

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

Defined in: [ml/kernels/sum.js:64](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/kernels/sum.js#L64)

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
