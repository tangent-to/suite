---
title: "RMSProp"
---

Defined in: [compat.js:85](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L85)

RMSProp Optimizer

## Extends

- `Optimizer`

## Constructors

### Constructor

> **new RMSProp**(`options?`): `RMSProp`

Defined in: [compat.js:86](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L86)

#### Parameters

##### options?

#### Returns

`RMSProp`

#### Overrides

`Optimizer.constructor`

## Properties

### decay

> **decay**: `any`

Defined in: [compat.js:88](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L88)

***

### epsilon

> **epsilon**: `any`

Defined in: [compat.js:89](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L89)

***

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

Defined in: [compat.js:92](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/compat.js#L92)

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
