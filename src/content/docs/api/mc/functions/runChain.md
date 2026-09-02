---
title: "\_\_runChain"
---

> **\_\_runChain**(`spec`): `object`

Defined in: [parallel.js:109](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/parallel.js#L109)

Run ONE chain from a serialized spec. Shared by the worker entry and the
in-process fallback so both paths are byte-for-byte the same computation.
Internal — exported so the worker bootstrap can `import()` this module and
call it; not part of the public API.

## Parameters

### spec

`any`

{factorySrc, data, samplerName, samplerOptions,
  init, runOptions, seed}

## Returns

`object`

### acceptanceRate

> **acceptanceRate**: `number`

### stepSize

> **stepSize**: `number`

### trace

> **trace**: `any`
