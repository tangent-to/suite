---
title: "Var"
---

Defined in: [tape.js:18](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L18)

A node in the computation graph.

## Constructors

### Constructor

> **new Var**(`value`, `parents?`, `backward?`): `Var`

Defined in: [tape.js:27](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L27)

#### Parameters

##### value

`Tensor`

forward value

##### parents?

`Var`[] = `[]`

inputs this node was computed from

##### backward?

(`g`) => `Float64Array`\<`ArrayBufferLike`\>[]

given the
  gradient of the root w.r.t. this node's value, return the contribution to
  each parent, in `parents` order. `null` skips a parent (e.g. an integer
  index argument), which is cheaper than allocating a zero buffer.

#### Returns

`Var`

## Properties

### \_backward

> **\_backward**: (`g`) => `Float64Array`\<`ArrayBufferLike`\>[]

Defined in: [tape.js:30](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L30)

#### Parameters

##### g

`Float64Array`

#### Returns

`Float64Array`\<`ArrayBufferLike`\>[]

***

### grad

> **grad**: `Float64Array`\<`ArrayBufferLike`\>

Defined in: [tape.js:32](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L32)

***

### parents

> **parents**: `Var`[]

Defined in: [tape.js:29](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L29)

***

### value

> **value**: `Tensor`

Defined in: [tape.js:28](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L28)

## Accessors

### data

#### Get Signature

> **get** **data**(): `Float64Array`\<`ArrayBufferLike`\>

Defined in: [tape.js:39](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L39)

##### Returns

`Float64Array`\<`ArrayBufferLike`\>

***

### isScalar

#### Get Signature

> **get** **isScalar**(): `boolean`

Defined in: [tape.js:44](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L44)

True for a rank-0 node, the only kind `backward()` can seed on its own.

##### Returns

`boolean`

***

### shape

#### Get Signature

> **get** **shape**(): `number`[]

Defined in: [tape.js:35](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L35)

##### Returns

`number`[]

## Methods

### backward()

> **backward**(`seed?`): `Var`

Defined in: [tape.js:55](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/tape.js#L55)

Accumulate gradients through the graph, from this node backwards.

#### Parameters

##### seed?

`Float64Array`\<`ArrayBufferLike`\> \| `number`[]

gradient of the objective w.r.t.
  this node. Required unless the node is a scalar, where it defaults to 1.

#### Returns

`Var`
