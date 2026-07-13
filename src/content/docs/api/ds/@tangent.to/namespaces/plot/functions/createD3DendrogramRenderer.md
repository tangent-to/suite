---
title: "createD3DendrogramRenderer"
---

> **createD3DendrogramRenderer**(`d3`, `options?`): `Function`

Defined in: [plot/renderers/d3Dendrogram.js:52](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/plot/renderers/d3Dendrogram.js#L52)

Build a dendrogram renderer that relies on user-supplied D3 modules for scaling.
The returned function is compatible with the `.show(renderer)` helper emitted by plotHCA.

Usage:
  import { plotHCA } from '@tangent.to/ds/plot';
  import { createD3DendrogramRenderer } from '@tangent.to/ds/plot/renderers/d3Dendrogram.js';
  const spec = plotHCA(model);
  const svg = spec.show(createD3DendrogramRenderer(d3));

## Parameters

### d3

`any`

D3 namespace (only `scaleLinear` is used if available)

### options?

`any` = `{}`

Renderer options

## Returns

`Function`

Renderer function accepted by config.show()
