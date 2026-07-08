---
title: "AdamOptimizer"
---

Defined in: [compat.js:105](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L105)

Adam Optimizer (Adaptive Moment Estimation)

## Extends

- `Optimizer`

## Constructors

### Constructor

> **new AdamOptimizer**(`options?`): `AdamOptimizer`

Defined in: [compat.js:106](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L106)

#### Parameters

##### options?

#### Returns

`AdamOptimizer`

#### Overrides

`Optimizer.constructor`

## Properties

### beta1

> **beta1**: `any`

Defined in: [compat.js:108](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L108)

***

### beta2

> **beta2**: `any`

Defined in: [compat.js:109](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L109)

***

### epsilon

> **epsilon**: `any`

Defined in: [compat.js:110](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L110)

***

### learningRate

> **learningRate**: `any`

Defined in: [compat.js:17](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L17)

#### Inherited from

[`GradientDescent`](GradientDescent.md).[`learningRate`](GradientDescent.md#learningrate)

***

### maxIter

> **maxIter**: `any`

Defined in: [compat.js:18](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L18)

#### Inherited from

[`GradientDescent`](GradientDescent.md).[`maxIter`](GradientDescent.md#maxiter)

***

### tol

> **tol**: `any`

Defined in: [compat.js:19](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L19)

#### Inherited from

[`GradientDescent`](GradientDescent.md).[`tol`](GradientDescent.md#tol)

***

### verbose

> **verbose**: `any`

Defined in: [compat.js:20](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L20)

#### Inherited from

[`GradientDescent`](GradientDescent.md).[`verbose`](GradientDescent.md#verbose)

## Methods

### \_options()

> **\_options**(`options`): `object`

Defined in: [compat.js:34](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L34)

#### Parameters

##### options

`any`

#### Returns

`object`

##### learningRate

> **learningRate**: `any`

##### maxIter

> **maxIter**: `any`

##### tol

> **tol**: `any`

##### verbose

> **verbose**: `any`

#### Inherited from

`Optimizer._options`

***

### minimize()

> **minimize**(`lossFn`, `x0`, `options?`): `object`

Defined in: [compat.js:113](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/compat.js#L113)

Minimize a loss function

#### Parameters

##### lossFn

`any`

Function that returns {loss, gradient}

##### x0

`any`

Initial parameters

##### options?

Additional options

#### Returns

`object`

{x, history}

##### history

> **history**: `object`

###### history.gradNorm

> **gradNorm**: `any`

###### history.loss

> **loss**: `any`

##### x

> **x**: `any`

#### Overrides

`Optimizer.minimize`
