---
title: "SingularValueDecomposition"
---

Defined in: [core/linalg.js:218](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L218)

SVD with the decomposition-object interface of ml-matrix, for
least-squares solves and pseudoinverses reusing one factorization.

## Constructors

### Constructor

> **new SingularValueDecomposition**(`data`): `SingularValueDecomposition`

Defined in: [core/linalg.js:222](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L222)

#### Parameters

##### data

`number`[][] \| [`Matrix`](Matrix.md)

Input matrix (any shape)

#### Returns

`SingularValueDecomposition`

## Properties

### \_m

> **\_m**: `any`

Defined in: [core/linalg.js:227](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L227)

***

### \_n

> **\_n**: `any`

Defined in: [core/linalg.js:228](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L228)

***

### \_s

> **\_s**: `any`

Defined in: [core/linalg.js:225](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L225)

***

### \_U

> **\_U**: `any`

Defined in: [core/linalg.js:224](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L224)

***

### \_V

> **\_V**: `any`

Defined in: [core/linalg.js:226](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L226)

## Accessors

### diagonal

#### Get Signature

> **get** **diagonal**(): `any`

Defined in: [core/linalg.js:239](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L239)

##### Returns

`any`

***

### leftSingularVectors

#### Get Signature

> **get** **leftSingularVectors**(): [`Matrix`](Matrix.md)

Defined in: [core/linalg.js:231](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L231)

##### Returns

[`Matrix`](Matrix.md)

***

### rightSingularVectors

#### Get Signature

> **get** **rightSingularVectors**(): [`Matrix`](Matrix.md)

Defined in: [core/linalg.js:235](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L235)

##### Returns

[`Matrix`](Matrix.md)

## Methods

### \_cutoff()

> **\_cutoff**(): `number`

Defined in: [core/linalg.js:243](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L243)

#### Returns

`number`

***

### inverse()

> **inverse**(): [`Matrix`](Matrix.md)

Defined in: [core/linalg.js:269](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L269)

Pseudoinverse from the computed factorization

#### Returns

[`Matrix`](Matrix.md)

Pseudoinverse

***

### solve()

> **solve**(`b`): [`Matrix`](Matrix.md)

Defined in: [core/linalg.js:252](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L252)

Minimum-norm least-squares solution of A x = b

#### Parameters

##### b

`number`[][] \| [`Matrix`](Matrix.md)

Right-hand side (column(s))

#### Returns

[`Matrix`](Matrix.md)

Solution x
