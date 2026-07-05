---
title: "DotProduct"
---

Defined in: [ds/src/ml/kernels/dot-product.js:15](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L15)

Abstract base class for GP kernels

## Extends

- [`Kernel`](Kernel.md)

## Constructors

### Constructor

> **new DotProduct**(`sigma0OrOpts?`): `DotProduct`

Defined in: [ds/src/ml/kernels/dot-product.js:24](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L24)

#### Parameters

##### sigma0OrOpts?

`any` = `1.0`

Inhomogeneity term, or `{ sigma0 }`.

#### Returns

`DotProduct`

#### Example

```ts
new DotProduct(1.0)
new DotProduct({ sigma0: 1.0 })
```

#### Overrides

[`Kernel`](Kernel.md).[`constructor`](Kernel.md#constructor)

## Properties

### sigma0

> **sigma0**: `any`

Defined in: [ds/src/ml/kernels/dot-product.js:27](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L27)

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

> **compute**(`x1`, `x2`): `number`

Defined in: [ds/src/ml/kernels/dot-product.js:33](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L33)

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

Defined in: [ds/src/ml/kernels/dot-product.js:39](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L39)

Get kernel hyperparameters

#### Returns

`object`

Hyperparameters

##### sigma0

> **sigma0**: `any`

#### Overrides

[`Kernel`](Kernel.md).[`getParams`](Kernel.md#getparams)

***

### setParams()

> **setParams**(`params?`): `void`

Defined in: [ds/src/ml/kernels/dot-product.js:43](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/kernels/dot-product.js#L43)

Set kernel hyperparameters

#### Parameters

##### params?

New parameters

#### Returns

`void`

#### Overrides

[`Kernel`](Kernel.md).[`setParams`](Kernel.md#setparams)
