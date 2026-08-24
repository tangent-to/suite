---
title: "KDTree"
---

Defined in: [core/spatial/kdtree.js:24](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L24)

KD-Tree for efficient spatial queries

## Constructors

### Constructor

> **new KDTree**(`points`, `metric?`): `KDTree`

Defined in: [core/spatial/kdtree.js:25](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L25)

#### Parameters

##### points

`any`

##### metric?

`string` = `'euclidean'`

#### Returns

`KDTree`

## Properties

### dimensions

> **dimensions**: `any`

Defined in: [core/spatial/kdtree.js:27](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L27)

***

### metric

> **metric**: `string`

Defined in: [core/spatial/kdtree.js:26](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L26)

***

### root

> **root**: `any`

Defined in: [core/spatial/kdtree.js:28](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L28)

## Methods

### \_chebyshev()

> **\_chebyshev**(`a`, `b`): `number`

Defined in: [core/spatial/kdtree.js:167](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L167)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

***

### \_euclidean()

> **\_euclidean**(`a`, `b`): `number`

Defined in: [core/spatial/kdtree.js:151](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L151)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

***

### \_manhattan()

> **\_manhattan**(`a`, `b`): `number`

Defined in: [core/spatial/kdtree.js:159](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L159)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

***

### knn()

> **knn**(`point`, `k`): `object`[]

Defined in: [core/spatial/kdtree.js:64](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L64)

Find k nearest neighbors

#### Parameters

##### point

`number`[]

Query point

##### k

`number`

Number of neighbors

#### Returns

`object`[]

***

### radiusSearch()

> **radiusSearch**(`point`, `radius`): `object`[]

Defined in: [core/spatial/kdtree.js:100](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/spatial/kdtree.js#L100)

Find all neighbors within radius

#### Parameters

##### point

`number`[]

Query point

##### radius

`number`

Search radius

#### Returns

`object`[]
