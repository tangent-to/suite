---
title: "GradientDescent"
---

Defined in: [compat.js:47](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L47)

Gradient Descent (batch; optional backtracking line search)

## Extends

- `Optimizer`

## Constructors

### Constructor

> **new GradientDescent**(`options?`): `GradientDescent`

Defined in: [compat.js:48](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L48)

#### Parameters

##### options?

#### Returns

`GradientDescent`

#### Overrides

`Optimizer.constructor`

## Properties

### batchSize

> **batchSize**: `any`

Defined in: [compat.js:51](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L51)

***

### learningRate

> **learningRate**: `any`

Defined in: [compat.js:17](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L17)

#### Inherited from

`Optimizer.learningRate`

***

### lineSearch

> **lineSearch**: `any`

Defined in: [compat.js:52](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L52)

***

### maxIter

> **maxIter**: `any`

Defined in: [compat.js:18](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L18)

#### Inherited from

`Optimizer.maxIter`

***

### stochastic

> **stochastic**: `any`

Defined in: [compat.js:50](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L50)

***

### tol

> **tol**: `any`

Defined in: [compat.js:19](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L19)

#### Inherited from

`Optimizer.tol`

***

### verbose

> **verbose**: `any`

Defined in: [compat.js:20](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L20)

#### Inherited from

`Optimizer.verbose`

## Methods

### \_options()

> **\_options**(`options`): `object`

Defined in: [compat.js:34](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L34)

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

Defined in: [compat.js:55](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/compat.js#L55)

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

> **history**: `any`

##### x

> **x**: `any`

#### Overrides

`Optimizer.minimize`
