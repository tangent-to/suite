---
title: "Layer"
---

Defined in: [graph.js:37](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L37)

A layer: a type, a configuration, and the two things `model` needs of it,
`outputShape` and `compute`. Layers with parameters also implement `build`.

A layer is called on tensors, `layer(x)`, and returns a tensor. The callable
is a function whose `layer` property is the instance; see callable.

## Constructors

### Constructor

> **new Layer**(`type`, `config?`): `Layer`

Defined in: [graph.js:42](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L42)

#### Parameters

##### type

`string`

the layer's type name, for `summary` and `toJSON`

##### config?

`any` = `{}`

what `toJSON` writes and `fromJSON` rebuilds from

#### Returns

`Layer`

## Properties

### config

> **config**: `any`

Defined in: [graph.js:44](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L44)

***

### name

> **name**: `any`

Defined in: [graph.js:46](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L46)

Assigned by `model` in graph order unless the config names the layer.

***

### type

> **type**: `string`

Defined in: [graph.js:43](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L43)

## Methods

### apply()

> **apply**(...`inputs`): [`Tensor`](Tensor.md)

Defined in: [graph.js:94](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L94)

Apply to tensors, recording the application.

#### Parameters

##### inputs

...`any`[]

#### Returns

[`Tensor`](Tensor.md)

***

### build()

> **build**(`_inputShapes`, `_rng`): `any`

Defined in: [graph.js:60](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L60)

Fresh parameters for these input shapes: a map of tensors
`{ data: Float64Array, shape }`. Layers without parameters return null.

#### Parameters

##### \_inputShapes

`number`[][]

##### \_rng

###### float

() => `number`

###### normal

() => `number`

#### Returns

`any`

***

### compute()

> **compute**(`_params`, `_inputs`, `_ctx`): `void`

Defined in: [graph.js:72](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L72)

The layer's output on grad Vars.

#### Parameters

##### \_params

this layer's parameters as Vars

##### \_inputs

`any`[]

one Var of shape [n, d] per input tensor

##### \_ctx

`any`

`{ training, feed, name, n }`: the mode, the feed map
  (where a mask drawn by the loop is found under `${name}/mask`), the
  layer's name, and the batch size

#### Returns

`void`

***

### outputShape()

> **outputShape**(`_inputShapes`): `void`

Defined in: [graph.js:50](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L50)

Feature shape of the output given the input feature shapes.

#### Parameters

##### \_inputShapes

`any`

#### Returns

`void`

***

### regularizer()

> **regularizer**(`_params`, `_feed`, `_name`): `any`

Defined in: [graph.js:89](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L89)

A term added to the training objective, or null. Receives the layer's
parameter Vars and the feed Vars (for coefficients that depend on `N`).

#### Parameters

##### \_params

`any`

##### \_feed

`any`

##### \_name

`any`

#### Returns

`any`

***

### stochastic()

> **stochastic**(`_inputShapes`, `_name`): `any`

Defined in: [graph.js:81](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L81)

Inputs the training loop must draw for this layer per batch, as
`{ key: { kind: 'dropout'|'uniform', p, shape } }`, keyed by the feed name.
Null for a layer that needs none.

#### Parameters

##### \_inputShapes

`any`

##### \_name

`any`

#### Returns

`any`
