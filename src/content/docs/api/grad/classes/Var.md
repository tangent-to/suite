---
title: "Var"
---

Defined in: [tape.js:18](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L18)

A node in the computation graph.

## Constructors

### Constructor

> **new Var**(`value`, `parents?`, `backward?`, `recompute?`, `spec?`): `Var`

Defined in: [tape.js:31](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L31)

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

##### recompute?

() => `void`

recompute this node's forward
  value IN PLACE from its parents' current values. Present on every op,
  absent on leaves. `compile()` replays a graph through these; see the
  in-place invariant documented on node.

##### spec?

`any` = `null`

#### Returns

`Var`

## Properties

### \_backward

> **\_backward**: (`g`) => `Float64Array`\<`ArrayBufferLike`\>[]

Defined in: [tape.js:34](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L34)

#### Parameters

##### g

`Float64Array`

#### Returns

`Float64Array`\<`ArrayBufferLike`\>[]

***

### \_recompute

> **\_recompute**: () => `void`

Defined in: [tape.js:35](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L35)

#### Returns

`void`

***

### grad

> **grad**: `Float64Array`\<`ArrayBufferLike`\>

Defined in: [tape.js:44](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L44)

***

### parents

> **parents**: `Var`[]

Defined in: [tape.js:33](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L33)

***

### spec

> **spec**: `object`

Defined in: [tape.js:42](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L42)

How to rebuild this node from its parents: the op's exported name and
its static (non-Var) arguments. What lets a compiled plan be written
out as data and rebuilt elsewhere. Null on a leaf.

#### args?

> `optional` **args?**: `any`[]

#### list?

> `optional` **list?**: `boolean`

#### op

> **op**: `string`

***

### value

> **value**: `Tensor`

Defined in: [tape.js:32](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L32)

## Accessors

### data

#### Get Signature

> **get** **data**(): `Float64Array`\<`ArrayBufferLike`\>

Defined in: [tape.js:51](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L51)

##### Returns

`Float64Array`\<`ArrayBufferLike`\>

***

### isScalar

#### Get Signature

> **get** **isScalar**(): `boolean`

Defined in: [tape.js:56](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L56)

True for a rank-0 node, the only kind `backward()` can seed on its own.

##### Returns

`boolean`

***

### shape

#### Get Signature

> **get** **shape**(): `number`[]

Defined in: [tape.js:47](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L47)

##### Returns

`number`[]

## Methods

### backward()

> **backward**(`seed?`): `Var`

Defined in: [tape.js:67](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/tape.js#L67)

Accumulate gradients through the graph, from this node backwards.

#### Parameters

##### seed?

`Float64Array`\<`ArrayBufferLike`\> \| `number`[]

gradient of the objective w.r.t.
  this node. Required unless the node is a scalar, where it defaults to 1.

#### Returns

`Var`
