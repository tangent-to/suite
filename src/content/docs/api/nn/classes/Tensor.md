---
title: "Tensor"
---

Defined in: [graph.js:16](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L16)

A batch of rows, `shape` features per row, not yet computed.

## Constructors

### Constructor

> **new Tensor**(`shape`, `layer?`, `inputs?`): `Tensor`

Defined in: [graph.js:22](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L22)

#### Parameters

##### shape

`number`[]

feature shape, the batch axis excluded

##### layer?

[`Layer`](Layer.md) = `null`

the layer that produces it, null for an input

##### inputs?

`Tensor`[] = `[]`

the tensors that layer was applied to

#### Returns

`Tensor`

## Properties

### id

> **id**: `number`

Defined in: [graph.js:23](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L23)

***

### inputs

> **inputs**: `Tensor`[]

Defined in: [graph.js:26](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L26)

***

### layer

> **layer**: [`Layer`](Layer.md)

Defined in: [graph.js:25](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L25)

***

### shape

> **shape**: `number`[]

Defined in: [graph.js:24](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/graph.js#L24)
