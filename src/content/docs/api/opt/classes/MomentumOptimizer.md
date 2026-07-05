---
title: "MomentumOptimizer"
---

Defined in: [compat.js:67](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L67)

Momentum Optimizer

## Extends

- `Optimizer`

## Constructors

### Constructor

> **new MomentumOptimizer**(`options?`): `MomentumOptimizer`

Defined in: [compat.js:68](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L68)

#### Parameters

##### options?

#### Returns

`MomentumOptimizer`

#### Overrides

`Optimizer.constructor`

## Properties

### learningRate

> **learningRate**: `any`

Defined in: [compat.js:17](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L17)

#### Inherited from

`Optimizer.learningRate`

***

### maxIter

> **maxIter**: `any`

Defined in: [compat.js:18](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L18)

#### Inherited from

`Optimizer.maxIter`

***

### momentum

> **momentum**: `any`

Defined in: [compat.js:70](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L70)

***

### tol

> **tol**: `any`

Defined in: [compat.js:19](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L19)

#### Inherited from

`Optimizer.tol`

***

### verbose

> **verbose**: `any`

Defined in: [compat.js:20](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L20)

#### Inherited from

`Optimizer.verbose`

## Methods

### \_options()

> **\_options**(`options`): `object`

Defined in: [compat.js:34](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L34)

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

Defined in: [compat.js:73](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L73)

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
