---
title: "\_\_runChain"
---

> **\_\_runChain**(`spec`): `object`

Defined in: [parallel.js:138](https://github.com/tangent-to/mc/blob/479ed802039cc6f55191648284819e2988a24579/src/parallel.js#L138)

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
